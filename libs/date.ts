/// <reference path="./langext.d.ts"/>

interface DateConstructor {
    timeNow(): number;
    dateNow(): string;
}

if (!Date.prototype.getSimpleDate) {

    Date.prototype.getSimpleDate = function(): string {
        return this.getFullYear()
                    + "-" + (this.getMonth() + 1).toString().leftPad("0", 2)
                    + "-" + this.getDate().toString().leftPad("0", 2)
                    + " " + this.getHours().toString().leftPad("0", 2)
                    + ":" + this.getMinutes().toString().leftPad("0", 2)
                    + ":" + this.getSeconds().toString().leftPad("0", 2);
    };
}

if (!Date.prototype.nextMonth) {

    Object.defineProperty(Date.prototype, "nextMonth", {

        "value": function(): Date {

            let result: Date = new Date(this.getTime());

            result.setMonth(result.getMonth() + 1);

            return result;

        },

        "enumerable": false,

        "writable": false,

        "configurable": false
    });
}

if (!Date.prototype.nextDay) {

    Object.defineProperty(Date.prototype, "nextDay", {

        "value": function(): Date {

            return new Date(this.getTime() + 86400000);

        },

        "enumerable": false,

        "writable": false,

        "configurable": false
    });
}

if (!Date.prototype.isLeapYear) {

    Date.prototype.isLeapYear = function(): boolean {

        let year: number = this.getFullYear();

        return year % 100 === 0 ? (year % 400 === 0) : (year % 4 === 0);
    };
}

let daysInMonth: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if (!Date.prototype.getDaysInMonth) {

    Date.prototype.getDaysInMonth = function (month: number): number {

        return month === 1 ? (this.isLeapYear() ? 1 : 0) + daysInMonth[1] : daysInMonth[month];
    };
}

if (!Date.timeNow) {

    Date.timeNow = function(): number {

        return Math.floor((new Date()).getTime() / 1000);
    };
}

if (!Date.dateNow) {

    Date.dateNow = function(): string {

        return (new Date()).getSimpleDate();
    };
}
