/// <reference path="./langext.d.ts"/>

import { extendMethod, extendConstant } from "./extDefine";

const DEFAULT_RANDOM_SEED: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

extendConstant(String, "DEFAULT_RANDOM_SEED", "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");

extendMethod(String, "random", function (length: number, seed: string = String["DEFAULT_RANDOM_SEED"]): string {

    let l: number = seed.length;
    let result: string = "";

    if (length <= 0) {

        return result;
    }

    while (length-- > 0) {

        result += seed[Math.floor(Math.random() * l)];
    }

    return result;
});

extendMethod(String, "format", function(fmt: string, target: { [key: string]: string | number; }): string {

    return fmt.replace(/\$\{\w+\}/g, function(matchVal: string, index: number): any {

        return target[matchVal.substr(2, matchVal.length - 3)];

    });
});

extendMethod(String.prototype, "leftPad", function (el: string, length: number): string {

    let rtn: string = this, t: string = this;

    while ((t = el + t).length <= length) {

        rtn = t;
    }

    if (rtn.length < length) {

        rtn = el.substr(0, length - rtn.length) + rtn;
    }

    return rtn;
});

extendMethod(String.prototype, "rightPad", function (el: string, length: number): string {

    let rtn: string = this, t: string = this;

    while ((t += el).length <= length) {

        rtn = t;
    }

    if (rtn.length < length) {

        rtn += el.substr(0, length - rtn.length);
    }

    return rtn;
});

extendMethod(String.prototype, "isEMail", function(): boolean {

    return this.match(/^[-_\w\.]+\@[-_\w]+(\.[-_\w]+)*$/i) ? true : false;
});

extendMethod(String.prototype, "isHex", function(): boolean {

    return this.match(/^[0-9a-f]+$/i) ? true : false;
});

extendMethod(String.prototype, "isIPv4", function(): boolean {

    return this.match(/^[0-9]{1,3}(\.[0-9]{1,3}){3}$/) ? true : false;
});

extendMethod(String.prototype, "format", function(target: { [key: string]: string | number; }): string {

    return this.replace(/\$\{\w+\}/g, function(matchVal: string, index: number): string | number {

        let k: string = matchVal.substr(2, matchVal.length - 3);

        return target[k] ? target[k] : matchVal;

    });
});

extendMethod(String.prototype, "toEndLineOfCR", function(): string {

    return this.replace(/\r\n|\n/g, "\r");
});

extendMethod(String.prototype, "toEndLineOfLF", function(): string {

    return this.replace(/\r\n|\n/g, "\n");
});

extendMethod(String.prototype, "toEndLineOfCRLF", function(): string {

    return this.replace(/\r\n|\r|\n/g, "\r\n");
});
