/**
 * Define an extension method for existing object.
 */
export let extendMethod: (obj: any, name: string, fn: Function) => void;

/**
 * Define an extension constant for existing object.
 */
export let extendConstant: (obj: any, name: string, val: any) => void;

if (Object && Object.defineProperty) {

    extendMethod = function (obj: any, name: string, fn: Function): void {

        if (obj[name] !== undefined) {

            return;
        }

        Object.defineProperty(obj, name, {

            "value": fn,

            "enumerable": false,

            "writable": false,

            "configurable": false
        });
    };

    extendConstant = function (obj: any, name: string, val: any): void {

        if (obj[name] !== undefined) {

            return;
        }

        Object.defineProperty(obj, name, {

            "value": val,

            "enumerable": true,

            "writable": false,

            "configurable": false
        });
    };

} else {

    extendMethod = function (obj: any, name: string, fn: Function): void {

        if (obj[name] !== undefined) {

            return;
        }

        obj[name] = fn;

    };

    extendConstant = function (obj: any, name: string, val: any): void {

        if (obj[name] !== undefined) {

            return;
        }

        obj[name] = val;

    };
}
