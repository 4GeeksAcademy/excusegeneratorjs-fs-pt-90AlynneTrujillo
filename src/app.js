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

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandom(arr) {
  let max = arr.length;
  let min = 0;
  let random = getRandomNum(min, max);
  return arr[random];
}
window.onload = function() {
  console.log("Hello Rigo from the console!");
  document.getElementById("excuse").innerHTML =
    getRandom(who) +
    " " +
    getRandom(action) +
    " " +
    getRandom(what) +
    " " +
    getRandom(when);
};
