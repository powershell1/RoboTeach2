import { EmulatorWorkspaces } from "../../workspace";
import { BlockCode } from "../blockCode";
export declare class LEDBlock extends BlockCode {
    workspace: EmulatorWorkspaces;
    blockData: {
        [id: string]: any;
    };
    constructor(workspace: EmulatorWorkspaces, blockData: {
        [id: string]: any;
    });
    run(): Promise<void>;
}
declare class BeepConstruct {
    context: AudioContext;
    constructor(tone: number);
    stop(): void;
}
export declare class BuzzerBlock extends BlockCode {
    beep: BeepConstruct | null;
    workspace: EmulatorWorkspaces;
    blockData: {
        [id: string]: any;
    };
    constructor(workspace: EmulatorWorkspaces, blockData: {
        [id: string]: any;
    });
    run(): Promise<void>;
}
export declare class WalkBlock extends BlockCode {
    workspace: EmulatorWorkspaces;
    blockData: {
        [id: string]: any;
    };
    constructor(workspace: EmulatorWorkspaces, blockData: {
        [id: string]: any;
    });
    run(): Promise<void>;
}
export declare class RotateBlock extends BlockCode {
    workspace: EmulatorWorkspaces;
    blockData: {
        [id: string]: any;
    };
    constructor(workspace: EmulatorWorkspaces, blockData: {
        [id: string]: any;
    });
    run(): Promise<void>;
}
export {};
//# sourceMappingURL=walk.d.ts.map