import { EmulatorWorkspaces } from "../../workspace";
import { InitableInstance } from "../interfaces";
import Pos2 from "../pos2";
import onImg from '../../../images/led/on.png';
import offImg from '../../../images/led/off.png';

export default class Led extends Pos2 implements InitableInstance {
    state: boolean = false;

    constructor(pos: Pos2) {
        super(pos.x, pos.y);
    }

    static init = (reference: Led) => new Led(Pos2.init(reference));

    render(): void {
        const img = document.createElement('img');
        img.src = this.state ? onImg : offImg;
        img.className = 'led';
        img.style.position = 'relative';
        img.style.top = `${this.y * 100}px`;
        img.style.left = `${this.x * 100}px`;
        img.style.width = '200px';
        img.style.height = '200px';
        document.getElementsByClassName('sensor_emulator')[0]!.appendChild(img);
    }

    clear(): void {
    }
}