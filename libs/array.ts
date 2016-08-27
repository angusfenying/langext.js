/// <reference path="./langext.d.ts"/>

import { extendMethod } from "./extDefine";

extendMethod(Array.prototype, "remove", function(v: any, limit: number = 0xFFFFFFFF): number {

    let pos: number, i: number;

    for (i = 0; i < limit && (pos = this.indexOf(v)) !== -1; i++) {

        this.splice(pos, 1);

    }

    return i;
});
