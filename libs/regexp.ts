/// <reference path="./langext.d.ts"/>

import { extendMethod } from "./extDefine";

extendMethod(RegExp, "escape", function(str: string): string {

    return str.replace(/([\*\.\?\+\$\^\[\]\(\)\{\}\|\\])/g, "\\$1");

});

extendMethod(RegExp.prototype, "matches", function(str: string): MatchResultItem[] {

    let mc: MatchResultItem[] = [];
    let rea: RegExpExecArray;

    while (rea = this.exec(str)) {

        let gc: MatchSubGroup[] = [];

        let i: number = 0;
        let ot: string = rea[0];
        let baseIndex: number = rea.index;

        for (let val of rea) {

            let g: MatchSubGroup;

            if (i === 0) {

                g = {
                    "index": rea.index,
                    "value": val
                };

            } else {

                let index: number = ot.indexOf(val);

                g = {
                    "index": index + baseIndex,
                    "value": val
                };
                ot = ot.substr(index + val.length);
                baseIndex += index + val.length;

            }

            gc.push(g);

            ++i;
        }

        mc.push({
            "index": rea.index,
            "value": rea[0],
            "groups": gc
        });
    }

    return mc;
});
