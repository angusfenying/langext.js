/// <reference path="./libs/langext.d.ts" />

import "./langext";

let s: string = "${name}@gmail.com";

s = s.format({
    "name": "Mick"
});

console.log("Result: ", s);

if (s.isEMail()) {

    console.log(s, "is an E-Mail address.");
}

if ((new Date).isLeapYear()) {

    console.log(String.format(
        "This year is leap year, so that there is ${days} days of Feb. in this years.",
        {
            "days": (new Date).getDaysInMonth(1)
        }
    ));

} else {

    console.log("This year isn't leap year.");
}

console.log("A random string: ", String.random(16));

console.log("A random hex string: ", String.random(16, "0123456789abcdef"));

console.log("Today is", (new Date).getSimpleDate());

console.log("Next day is", (new Date).getNextDay().getSimpleDate());

console.log("Next month is", (new Date).getNextMonth().getSimpleDate());

if (new RegExp(RegExp.escape("~!")).exec("~!")) {

    console.log("Regular Expression escaped successfully.");
}

let x: number[] = [1, 2, 3, 4, 25, 4, 3, 2, 1, 43, 54, 22, 33];

x.remove(1);

console.log(x);

x.removeByIndexes([1, 3, 6]);

console.log(x);

console.debug("Debug test 1");

console.isDebug = true;

console.debug("Debug test 2");

console.isDebug = false;

console.debug("Debug test 3");
