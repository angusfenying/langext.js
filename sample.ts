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
