import { InitableInstance } from "../interfaces";
import Pos2 from "../pos2";
export default class Led extends Pos2 implements InitableInstance {
    state: boolean;
    constructor(pos: Pos2);
    static init: (reference: Led) => Led;
    render(): void;
    clear(): void;
}
//# sourceMappingURL=led.d.ts.map