import Buzzer from "../../types/entities/buzzer";
import Dog from "../../types/entities/dog";
import Led from "../../types/entities/led";
import { EmulatorWorkspaces } from "../../workspace";
import { BlockCode } from "../blockCode";
import { blockPicker, craftBlock } from "../blueprint";

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
        if (this.blockData['inputs']) {
            const num = await craftBlock(this.workspace, blockPicker(this.blockData['inputs']['TONE'])).run();
            this.workspace.entities.forEach((entity: any) => {
                if (entity instanceof Buzzer) {
                    entity.state = num > 0;
                }
            });
            if (num <= 0) return;
            this.beep = new BeepConstruct(num);
            this.workspace.cacheCodeExecution.push(this);
        }
        // this.workspace.dog!.x = this.workspace.dog!.x - add;
        await super.run();
    }
}