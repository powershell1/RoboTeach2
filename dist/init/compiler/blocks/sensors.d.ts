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
export declare class ServoBlock extends BlockCode {
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
export {};
//# sourceMappingURL=sensors.d.ts.map