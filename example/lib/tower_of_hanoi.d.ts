import { Game } from "../../lib";
export interface TOHState {
    plates: number[][];
}
export interface TOHProps {
    height: number;
}
declare const TowerOfHanoi: Game<TOHState, TOHProps>;
export default TowerOfHanoi;
