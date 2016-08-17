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
