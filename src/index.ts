import './index.css';
import { compile } from './init/compiler/blueprint';
import Buzzer from './init/types/entities/buzzer';
import Led from './init/types/entities/led';
import Servo from './init/types/entities/servo';
import { InitableConstructor, InitableInstance } from './init/types/interfaces';
import Pos2 from './init/types/pos2';
import { EmulatorWorkspaces } from './init/workspace';

const workspace = new EmulatorWorkspaces();
workspace.addEntity(new Led(new Pos2(1, 1)));
workspace.addEntity(new Buzzer(new Pos2(2, 1)));
workspace.addEntity(new Servo(new Pos2(1, 2)));
// workspace.addEntity(new Slime(workspace, new Pos2(5, 5), 0));

// beep(10);


var blocklyWorkspaceJSON: any = JSON.parse('{"blocks":{"languageVersion":0,"blocks":[{"type":"start_event","id":"Y$PnHc11]nleH0`8*L$#","x":250,"y":250}]}}');

function onMessage(this: Window, event: MessageEvent<any>) {
    blocklyWorkspaceJSON = JSON.parse(event.data);
}

const iframe: HTMLIFrameElement = document.querySelector("body > div > iframe")!;
iframe.contentWindow!.addEventListener("message", onMessage, false);

//const workspace = new EmulatorWorkspaces(new Dog(new Pos2(0, 0)), [new Pos2(5, 5)]);
var isCompiling = false;

document.getElementById('compile')?.addEventListener('click', async (event) => {
    if (isCompiling) return;
    isCompiling = true;

    /*
    const worker = new Worker(new URL("./threads/test.ts", import.meta.url));
    worker.onmessage = (event) => {
        console.log(event.data);
    }
    worker.postMessage([workspace, blocklyWorkspaceJSON]);
    */
    await compile(workspace, blocklyWorkspaceJSON);
    // await worker.postMessage({ workspace, blocklyWorkspaceJSON });
    isCompiling = false;
});

/*
setTimeout(() => {
    compile(workspace, blocklyWorkspaceJSON);
    setTimeout(() => {
        compile(workspace, blocklyWorkspaceJSON);
    }, 1000);
}, 3000);
*/