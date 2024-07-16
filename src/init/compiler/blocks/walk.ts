import Dog from "../../types/entities/dog";
import Led from "../../types/entities/led";
import { EmulatorWorkspaces } from "../../workspace";
import { BlockCode } from "../blockCode";

export class LEDBlock extends BlockCode {
    workspace: EmulatorWorkspaces;
    blockData: { [id: string]: any; };

    constructor(workspace: EmulatorWorkspaces, blockData: { [id: string]: any }) {
        super(workspace, blockData);
        this.workspace = workspace;
        this.blockData = blockData;
    }

    async run() {
        super.clear();
        // const add = (2*this.blockData['fields']['FB'])-1;
        this.workspace.entities.forEach((entity: any) => {
            if (entity instanceof Led) {
                entity.state = this.blockData['fields']['LED'] === '0';
            }
        });
        // this.workspace.dog!.x = this.workspace.dog!.x - add;
        await super.run();
    }
}

class BeepConstruct {
    context: AudioContext;

    constructor(tone: number) {
        var context = new AudioContext();
        var oscillator = context.createOscillator();
        oscillator.type = "square";
        oscillator.frequency.value = tone * 2;
        oscillator.connect(context.destination);
        oscillator.start();
        this.context = context;
    }

    stop() {
        this.context.close();
    }
}

export class BuzzerBlock extends BlockCode {
    beep: BeepConstruct | null = null;
    workspace: EmulatorWorkspaces;
    blockData: { [id: string]: any; };

    constructor(workspace: EmulatorWorkspaces, blockData: { [id: string]: any }) {
        super(workspace, blockData);
        this.workspace = workspace;
        this.blockData = blockData;
    }

    async run() {
        super.clear();
        // const add = (2*this.blockData['fields']['FB'])-1;
        const find = this.workspace.cacheCodeExecution.find((block: any) => block instanceof BuzzerBlock);
        if (find) {
            find.beep!.stop();
            this.workspace.cacheCodeExecution = this.workspace.cacheCodeExecution.filter((block: any) => block !== find);
        }
        this.beep = new BeepConstruct(440);
        console.log(this.workspace.cacheCodeExecution);
        this.workspace.cacheCodeExecution.push(this);
        // this.workspace.dog!.x = this.workspace.dog!.x - add;
        await super.run();
    }
}

export class WalkBlock extends BlockCode {
    workspace: EmulatorWorkspaces;
    blockData: { [id: string]: any; };

    constructor(workspace: EmulatorWorkspaces, blockData: { [id: string]: any }) {
        super(workspace, blockData);
        this.workspace = workspace;
        this.blockData = blockData;
    }

    async run() {
        super.clear();
        // const add = (2*this.blockData['fields']['FB'])-1;
        this.workspace.entities.forEach((entity: any) => {
            if (entity instanceof Dog) {
                entity.walk(this.blockData['fields']['FB'] === '1');
            }
        });
        // this.workspace.dog!.x = this.workspace.dog!.x - add;
        await super.run();
    }
}

export class RotateBlock extends BlockCode {
    workspace: EmulatorWorkspaces;
    blockData: { [id: string]: any; };

    constructor(workspace: EmulatorWorkspaces, blockData: { [id: string]: any }) {
        super(workspace, blockData);
        this.workspace = workspace;
        this.blockData = blockData;
    }

    async run() {
        super.clear();
        const add = (2 * this.blockData['fields']['LR']) - 1;
        this.workspace.entities.forEach((entity: any) => {
            if (entity instanceof Dog) {
                entity.rotation -= add * 90;
            }
        });
        // this.workspace.dog!.rotation -= add*90;
        // const add = this.blockData['fields']['DEG'];
        // this.workspace.dog!.y = this.workspace.dog!.y + add;
        await super.run();
    }
}