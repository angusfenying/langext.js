/// <reference path="./langext.d.ts"/>

/**
 * This module introduces new utility functions for JS/TS.
 */

String.random = function (length: number, seed: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"): string {
    let l: number = seed.length;
    let result: string = "";
    while (length-- > 0) {
        result += seed[Math.floor(Math.random() * l)];
    }
    return result;
};

String.format = function(fmt: string, target: { [key: string]: string; }): string {

    return fmt.replace(/\$\{\w+\}/g, function(matchVal: string, index: number): string {

        return target[matchVal.substr(2, matchVal.length - 3)];

    });
};

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

String.prototype.isEMail = function(): boolean {
    return this.match(/^[-_\w\.]+\@[-_\w]+(\.[-_\w]+)*$/i) ? true : false;
};

String.prototype.isHex = function(): boolean {
    return this.match(/^[0-9a-f]+$/i) ? true : false;
};

String.prototype.isIPv4 = function(): boolean {
    return this.match(/^[0-9]{1,3}(\.[0-9]{1,3}){3}$/) ? true : false;
};

String.prototype.format = function(target: { [key: string]: string; }): string {

    return this.replace(/\$\{\w+\}/g, function(matchVal: string, index: number): string {

        return target[matchVal.substr(2, matchVal.length - 3)];

    });
};

String.prototype.toEndLineOfCR = function(): string {
    return this.replace(/\r\n|\n/g, "\r");
};

String.prototype.toEndLineOfLF = function(): string {
    return this.replace(/\r\n|\n/g, "\n");
};

String.prototype.toEndLineOfCRLF = function(): string {
    return this.replace(/\r\n|\r|\n/g, "\r\n");
};
