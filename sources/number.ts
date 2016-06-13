/// <reference path="../typings/langext.d.ts"/>

/**
 * This module introduces new utility functions for JS/TS.
 */

Number.prototype.formatSize = function(ac: number = 1) : NumberFormatSizeResult {

    var k = this * 1.0;
    var i = 0;
    var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
    while (k >= 1048576) {
        i++;
        k /= 1024.0;
    }
    if (k >= 1024) {
        i++;
        k /= 1024.0;
    }
    return {
        "num": k>0?k.toFixed(ac):'0',
        "unit": units[i]
    };
};
