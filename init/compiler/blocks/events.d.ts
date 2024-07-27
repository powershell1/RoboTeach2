import { EmulatorWorkspaces } from "../../workspace";
import { BlockCode } from "../blockCode";
export declare class RunBlock extends BlockCode {
    workspace: EmulatorWorkspaces;
    blockData: {
        [id: string]: any;
    };
    constructor(workspace: EmulatorWorkspaces, blockData: {
        [id: string]: any;
    });
    run(): Promise<void>;
}
export declare class WaitFor extends BlockCode {
    workspace: EmulatorWorkspaces;
    blockData: {
        [id: string]: any;
    };
    constructor(workspace: EmulatorWorkspaces, blockData: {
        [id: string]: any;
    });
    run(): Promise<void>;
}
//# sourceMappingURL=events.d.ts.map