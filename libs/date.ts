/// <reference path="./langext.d.ts"/>

import { extendMethod } from "./extDefine";

extendMethod(Date.prototype, "getSimpleDate", function(): string {

    return this.getFullYear()
                + "-" + (this.getMonth() + 1).toString().leftPad("0", 2)
                + "-" + this.getDate().toString().leftPad("0", 2)
                + " " + this.getHours().toString().leftPad("0", 2)
                + ":" + this.getMinutes().toString().leftPad("0", 2)
                + ":" + this.getSeconds().toString().leftPad("0", 2);
});

extendMethod(Date.prototype, "getNextMonth", function(remains: boolean = true): Date {

    let result: Date = new Date(this.getTime());

    result.setMonth(result.getMonth() + 1);

    if (!remains) {

        result.setDate(1);
        result.setHours(0);
        result.setSeconds(0);
        result.setMinutes(0);
        result.setMilliseconds(0);

    }

    return result;

});

extendMethod(Date.prototype, "getNextDay", function(remains: boolean = true): Date {

    let result: Date = new Date(this.getTime() + 86400000);

    if (!remains) {

        result.setHours(0);
        result.setSeconds(0);
        result.setMinutes(0);
        result.setMilliseconds(0);

    }

    return result;

});

extendMethod(Date.prototype, "getToday", function(): Date {

    let result: Date = new Date();

    result.setHours(0);
    result.setSeconds(0);
    result.setMinutes(0);
    result.setMilliseconds(0);

    return result;

});

extendMethod(Date.prototype, "isLeapYear", function(): boolean {

    let year: number = this.getFullYear();

    return year % 100 === 0 ? (year % 400 === 0) : (year % 4 === 0);

});

let daysInMonth: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

extendMethod(Date.prototype, "getDaysInMonth", function (month: number): number {

    return month === 1 ? (this.isLeapYear() ? 1 : 0) + daysInMonth[1] : daysInMonth[month];
});

extendMethod(Date, "timeNow", function(): number {

    return Math.floor((new Date()).getTime() / 1000);
});

extendMethod(Date, "dateNow", function(): string {

    return (new Date()).getSimpleDate();
});
