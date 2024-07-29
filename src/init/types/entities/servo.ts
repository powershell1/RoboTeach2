import { EmulatorWorkspaces } from "../../workspace";
import { InitableInstance } from "../interfaces";
import Pos2 from "../pos2";
import baseImg from '../../../images/servo/base.png';
import headImg from '../../../images/servo/head.png';

export default class Servo extends Pos2 implements InitableInstance {
    rotation: number = 90;

    constructor(pos: Pos2) {
        super(pos.x, pos.y);
    }

    static init = (reference: Servo) => new Servo(Pos2.init(reference));

    render(): void {
        const group = document.createElement('div');
        group.className = 'servo';
        group.style.position = 'relative';
        group.style.top = `${this.y * 100}px`;
        group.style.left = `${this.x * 100}px`;
        group.style.width = '200px';
        group.style.height = '200px';
        const base = document.createElement('img');
        base.style.position = 'absolute';
        base.style.width = '100%';
        base.style.height = '100%';
        base.src = baseImg;
        const head = document.createElement('img');
        head.style.position = 'absolute';
        head.style.width = '100%';
        head.style.height = '100%';
        head.style.transform = `rotate(${this.rotation}deg)`;
        head.src = headImg;
        group.appendChild(base);
        group.appendChild(head);
        document.getElementsByClassName('sensor_emulator')[0]!.appendChild(group);
    }

    clear(): void {
    }
}