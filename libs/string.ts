/// <reference path="./langext.d.ts"/>

/**
 * This module introduces new utility functions for JS/TS.
 */

const DEFAULT_RANDOM_SEED: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

if (!String.random) {

    String.random = function (length: number, seed: string = DEFAULT_RANDOM_SEED): string {

        let l: number = seed.length;
        let result: string = "";

        if (length <= 0) {

            return result;
        }

        while (length-- > 0) {

            result += seed[Math.floor(Math.random() * l)];
        }

        return result;
    };
}

if (!String.format) {

    String.format = function(fmt: string, target: { [key: string]: string | number; }): string {

        return fmt.replace(/\$\{\w+\}/g, function(matchVal: string, index: number): any {

            return target[matchVal.substr(2, matchVal.length - 3)];

        });
    };
}

if (!String.prototype.leftPad) {

    String.prototype.leftPad = function (el: string, length: number): string {

        let rtn: string = this, t: string = this;

        while ((t = el + t).length <= length) {

            rtn = t;
        }

        if (rtn.length < length) {

            rtn = el.substr(0, length - rtn.length) + rtn;
        }

        return rtn;
    };
}

if (!String.prototype.rightPad) {

    String.prototype.rightPad = function (el: string, length: number): string {

        let rtn: string = this, t: string = this;

        while ((t += el).length <= length) {

            rtn = t;
        }

        if (rtn.length < length) {

            rtn += el.substr(0, length - rtn.length);
        }

        return rtn;
    };
}

if (!String.prototype.isEMail) {

    String.prototype.isEMail = function(): boolean {

        return this.match(/^[-_\w\.]+\@[-_\w]+(\.[-_\w]+)*$/i) ? true : false;
    };
}

if (!String.prototype.isHex) {

    String.prototype.isHex = function(): boolean {

        return this.match(/^[0-9a-f]+$/i) ? true : false;
    };
}

if (!String.prototype.isIPv4) {

    String.prototype.isIPv4 = function(): boolean {

        return this.match(/^[0-9]{1,3}(\.[0-9]{1,3}){3}$/) ? true : false;
    };
}

if (!String.prototype.format) {

    String.prototype.format = function(target: { [key: string]: string | number; }): string {

        return this.replace(/\$\{\w+\}/g, function(matchVal: string, index: number): string | number {

            return target[matchVal.substr(2, matchVal.length - 3)];

        });
    };
}

if (!String.prototype.toEndLineOfCR) {

    String.prototype.toEndLineOfCR = function(): string {

        return this.replace(/\r\n|\n/g, "\r");
    };
}

if (!String.prototype.toEndLineOfLF) {

    String.prototype.toEndLineOfLF = function(): string {

        return this.replace(/\r\n|\n/g, "\n");
    };
}

if (!String.prototype.toEndLineOfCRLF) {

    String.prototype.toEndLineOfCRLF = function(): string {

        return this.replace(/\r\n|\r|\n/g, "\r\n");
    };
}
