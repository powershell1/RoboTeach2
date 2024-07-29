import Dog from "./types/entities/dog";
import { RenderableObject } from "./types/interfaces";
import Pos2 from "./types/pos2";

export class EmulatorWorkspaces {
    entities: Pos2 extends RenderableObject ? Pos2[] : RenderableObject[] = [];
    actionAvaible: number | null = null;

    cacheWorkspace: any[] = [];
    cacheCodeExecution: any[] = [];

    constructor(action: number | null = 10) {
        this.clearCache();
        this.actionAvaible = action;

        /*      for (let y = 0; y < blockPer; y++) {
                    const row = document.createElement('div');
                    row.className = 'row';
                    for (let x = 0; x < blockPer; x++) {
                        const cell = document.createElement('div');
                        cell.className = 'boxes';
                        cell.id = `${y}-${x}`;
                        row.appendChild(cell);
                    }
                    emulatorDiv.appendChild(row);
                } */

        // this.randomStart();
        // this.randomEnd();
        this.render();

        // this.cacheWorkspace = new EmulatorConfig(new Pos2(dog.x, dog.y), slimesClone, action);

        const sturct = structuredClone([this.entities, structuredClone(action)]);
        this.cacheWorkspace = sturct;

        // console.log(sturct);
    }

    addEntity(entity: RenderableObject): void {
        this.entities.push(entity);
        const enti = entity as any;
        this.cacheWorkspace[0].push(enti.constructor.init(entity));
        this.clearCache();
        this.render();
    }

    resetLevel(): void {
        const sturct = structuredClone(this.cacheWorkspace);
        // this.entities = [];
        // console.log("init" in this.entities);

        this.entities = [];
        // const newEntities: RenderableObject[] = [];
        this.cacheWorkspace[0].forEach((entity: any, idx: number) => {
            if ("init" in entity.constructor) {
                this.entities.push(entity.constructor.init(entity));
            }
        });
        // this.entities = newEntities;
        this.actionAvaible = sturct[1];
        this.render();
    }

    clearCache(): void {
        var property: { [id: string]: any } = ({ ...this });
        for (const prop in property['entities']) {
            const classProp: any = property['entities'][prop];
            //const classProp: any = getValue(this, prop as keyof EmulatorWorkspaces);
            if (classProp != null && "clear" in classProp) {
                classProp.clear();
            }
        }
    }

    render(): void {
        if (typeof window != 'undefined') {
            document.getElementsByClassName('sensor_emulator')[0].innerHTML = '';
            var property: { [id: string]: any } = ({ ...this });
            for (const prop in property['entities']) {
                const classProp: any = property['entities'][prop];
                if (classProp != null && "render" in classProp) {
                    classProp.render();
                }
            }

            if (this.actionAvaible == null) {
                // actionLeft.style.display = 'none';
                return;
            }
        }
        // actionLeft.innerText = `Action Left: ${this.actionAvaible}`;
        /*
        this.slimes.forEach((slime) => {
            const foundCell = findCell(slime.y, slime.x);
            foundCell!.classList.add('slime');
        });
        */
    }
}