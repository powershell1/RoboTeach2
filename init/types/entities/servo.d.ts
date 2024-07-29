import { InitableInstance } from "../interfaces";
import Pos2 from "../pos2";
export default class Servo extends Pos2 implements InitableInstance {
    rotation: number;
    constructor(pos: Pos2);
    static init: (reference: Servo) => Servo;
    render(): void;
    clear(): void;
}
//# sourceMappingURL=servo.d.ts.map