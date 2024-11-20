/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed on", "crushed", "broke"];
let what = ["my homework", "my phone", "the car", "my laptop"];
let when = [
  "while I was sleeping",
  "while I was exercising",
  "during my lunchbreak",
  "while I was meditating"
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
window.onload = function() {
  document.getElementById("excuse").innerHTML =
    getRandom(who) +
    " " +
    getRandom(action) +
    " " +
    getRandom(what) +
    " " +
    getRandom(when);
};
