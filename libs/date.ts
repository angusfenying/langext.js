/// <reference path="./langext.d.ts"/>

interface DateConstructor {
    timeNow(): number;
    dateNow(): string;
}

Date.prototype.getSimpleDate = function(): string {
    return this.getFullYear()
                + "-" + (this.getMonth() + 1).toString().leftPad("0", 2)
                + "-" + this.getDate().toString().leftPad("0", 2)
                + " " + this.getHours().toString().leftPad("0", 2)
                + ":" + this.getMinutes().toString().leftPad("0", 2)
                + ":" + this.getSeconds().toString().leftPad("0", 2);
};

Date.prototype.isLeapYear = function(): boolean {

    let year: number = this.getFullYear();

    return year % 100 === 0 ? (year % 400 === 0) : (year % 4 === 0);
};

let daysInMonth: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

Date.prototype.getDaysInMonth = function (month: number): number {

    return month === 1 ? (this.isLeapYear() ? 1 : 0) + daysInMonth[1] : daysInMonth[month];
};

Date.timeNow = function(): number {

    return Math.floor((new Date()).getTime() / 1000);
};

Date.dateNow = function(): string {

    return (new Date()).getSimpleDate();
};
