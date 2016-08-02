/// <reference path="../typings/langext.d.ts"/>

/**
 * This module introduces new utility functions for JS/TS.
 */

Number.prototype.formatSize = function(ac: number = 1): NumberFormatSizeResult {

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
};
