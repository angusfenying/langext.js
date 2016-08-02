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
