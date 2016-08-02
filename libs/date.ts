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

Date.timeNow = function(): number {
    return Math.floor((new Date()).getTime() / 1000);
};

Date.dateNow = function(): string {
    return (new Date()).getSimpleDate();
};
