import { EmulatorWorkspaces } from "../init/workspace"
import { compile } from "../init/compiler/blueprint";

self.onmessage = async (event) => {
    console.log(event.data[0]);
    const json = event.data[1];
    global.__CALLBACK_F__ = async () => {
        console.log("callback");
    };
    while (true) {
        var stamp = Date.now();
        await compile(new EmulatorWorkspaces(), json);
        var diff = Date.now() - stamp;
        await new Promise(resolve => setTimeout(resolve, Math.max(100 - diff, 0)));
    }
}