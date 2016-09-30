/// <reference path="./langext.d.ts"/>

import { extendMethod } from "./extDefine";

extendMethod(Array.prototype, "remove", function<T>(v: T, limit: number = 0xFFFFFFFF): any {

    let pos: number, i: number;

    for (i = 0; i < limit && (pos = this.indexOf(v)) !== -1; i++) {

        this.splice(pos, 1);

    }

    return i;
});

extendMethod(Array.prototype, "removeByIndexes", function<T>(v: number[]): any {

    let pos: number, i: number;

    i = 0;

    for (let x of v) {

        if (x < this.length) {

            this[x] = undefined;
        }
    }

    return this.remove(undefined);

});
