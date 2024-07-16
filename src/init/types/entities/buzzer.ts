import { EmulatorWorkspaces } from "../../workspace";
import { InitableInstance } from "../interfaces";
import Pos2 from "../pos2";
import dullImg from '../../../images/buzzer/dull.png';
import litImg from '../../../images/buzzer/lit.png';

export default class Buzzer extends Pos2 implements InitableInstance {
    state: boolean = false;

    constructor(pos: Pos2) {
        super(pos.x, pos.y);
    }

    static init = (reference: Buzzer) => new Buzzer(Pos2.init(reference));

    render(): void {
        const img = document.createElement('img');
        img.src = this.state ? litImg : dullImg;
        img.className = 'led';
        img.style.position = 'relative';
        img.style.top = `${this.y * 100}px`;
        img.style.left = `${this.x * 100}px`;
        img.style.width = '250px';
        img.style.height = '250px';
        img.style.rotate = '90deg';
        document.getElementsByClassName('sensor_emulator')[0]!.appendChild(img);
    }

    clear(): void {
    }
}