"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TowerOfHanoi = {
  default(props = { height: 4 }) {
    const plates = [[], [], []];
    for (let i = props.height; i > 0; --i) plates[0].push(i);
    return { plates };
  },
  actions: {
    async move(state, { x, y }) {
      console.log("LMAO XD");
      const all = [1, 2, 3];
      if (!all.includes(x) || !all.includes(y)) {
        throw new Error("Invalid params");
      }
      if (x === y) {
        throw new Error("Cannot move to same plate");
      }
      --x, --y;
      const plates = state.plates.map(v => v.slice());
      if (plates[x].length === 0) throw new Error("Empty source plate");
      const piece = plates[x].pop();
      if (plates[y].length > 0 && plates[y][plates[y].length - 1] < piece) {
        throw new Error(
          "Top piece on destination plate is smaller than moving piece"
        );
      }
      plates[y].push(piece);
      return { plates };
    }
  },
  isValid(state) {
    const plates = state.plates;
    if (!(plates instanceof Array)) return false;
    if (plates.length !== 3) return false;
    const Plates = [];
    for (const plate of plates) {
      if (!(plate instanceof Array)) return false;
      Plates.push(plate);
    }
    // Each number should appear only once
    const set = new Set();
    const total = Plates[0].length + Plates[1].length + Plates[2].length;
    for (let i = 1; i <= total; ++i) set.add(i);
    for (const plate of Plates) {
      for (let i = 0; i < plate.length; ++i) {
        if (!set.has(plate[i])) return false;
        set.delete(plate[i]);
        if (i > 0 && plate[i] > plate[i - 1]) return false;
      }
    }
    return true;
  },
  isEnding(state) {
    if (state.plates[0].length === 0 && state.plates[1].length === 0)
      return "won";
    return null;
  }
};
exports.default = TowerOfHanoi;
//# sourceMappingURL=tower_of_hanoi.js.map
