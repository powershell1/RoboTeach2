import { EmulatorWorkspaces } from "../../workspace";
import { BlockCode } from "../blockCode";
import { blockPicker, craftBlock } from "../blueprint";

export class RunBlock extends BlockCode {
    workspace: EmulatorWorkspaces;
    blockData: { [id: string] : any };

    constructor(workspace: EmulatorWorkspaces, blockData: { [id: string] : any }) {
        super(workspace, blockData);
        this.workspace = workspace;
        this.blockData = blockData;
    }

    async run() {
        const inputs: { [id: string] : any } = this.blockData['inputs'];
        if (inputs) {
            const doBlock = inputs['DO']['block'];
            await craftBlock(this.workspace, doBlock).run();
        }
        await super.run(false);
    }
}

export class WaitFor extends BlockCode {
    workspace: EmulatorWorkspaces;
    blockData: { [id: string] : any };

    constructor(workspace: EmulatorWorkspaces, blockData: { [id: string] : any }) {
        super(workspace, blockData);
        this.workspace = workspace;
        this.blockData = blockData;
    }

    async run() {
        const inputs: { [id: string] : any } = this.blockData['inputs'];
        if (inputs) {
            const time = await craftBlock(this.workspace, blockPicker(inputs['SECONDS'])).run();
            await new Promise(resolve => setTimeout(resolve, time * 1000));
        }
        await super.run(false);
    }
}