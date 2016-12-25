/// <reference path="../langext.d.ts"/>

import { extendMethod } from "./extDefine";

extendMethod(Number.prototype, "formatSize", function(ac: number = 1): langext.NumberFormatSizeResult {

    let k = this * 1.0;
    let i = 0;
    let units = ["B", "KB", "MB", "GB", "TB", "PB"];

    while (k >= 1048576) {

        i++;
        k /= 1024.0;
    }

    if (k >= 1024) {

        i++;
        k /= 1024.0;
    }

    return {
        "num": k > 0 ? k.toFixed(ac) : "0",
        "unit": units[i]
    };
});

extendMethod(Number.prototype, "between", function(a: number, b: number): boolean {

    if (a > b) {

        throw new TypeError("First parameter cannot be larger than the second one.");
    }

    return a < this && this < b;
});

extendMethod(Number.prototype, "insides", function(a: number, b: number): boolean {

    if (a > b) {

        throw new TypeError("First parameter cannot be larger than the second one.");
    }

    return a <= this && this <= b;
});
