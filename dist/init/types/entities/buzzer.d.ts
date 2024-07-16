import { InitableInstance } from "../interfaces";
import Pos2 from "../pos2";
export default class Buzzer extends Pos2 implements InitableInstance {
    state: boolean;
    constructor(pos: Pos2);
    static init: (reference: Buzzer) => Buzzer;
    render(): void;
    clear(): void;
}
//# sourceMappingURL=buzzer.d.ts.map