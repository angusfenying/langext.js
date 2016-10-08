/// <reference path="../langext.d.ts"/>

import { extendMethod } from "./extDefine";
import { EmptyCallback } from "./emptyCallback";

if (console.isDebug === undefined) {

    if (Object && Object.defineProperties) {

        Object.defineProperties(console, {

            "isDebug": {

                "set": function(newValue: boolean): void {

                    this.__debug = newValue;

                    if (newValue) {

                        this.debug = this.log;

                    } else {

                        this.debug = EmptyCallback;
                    }
                },

                "get": function(): boolean {

                    return this.__debug;
                }
            },

            "__debug": {

                "value": false,

                "writable": true,

                "enumerable": false
            },

            "debug": {

                "value": EmptyCallback,

                "writable": true,

                "enumerable": false
            }
        });

    } else {

        console.isDebug = false;

        console.debug = function() {

            if (this.isDebug) {

                this.log.apply(this, arguments);

            }
        };

    }

}
