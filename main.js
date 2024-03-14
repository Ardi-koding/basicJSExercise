const NOW = new Date();

const DAY = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
let day = NOW.getDay();
let today = DAY[day];

let hour = String(NOW.getHours());
let minutes = String(NOW.getMinutes());
let seconds = String(NOW.getSeconds());

function formatString() {
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
}
formatString();

function time12() {
  if (hour < 12) {
    hour = "0" + hour + " AM";
  } else if (hour > 12) {
    hour = "0" + (hour - 12) + " PM";
  } else if (hour == 12) {
    hour = 0o0;
  }
}
time12();

function output() {
  let currentTime = `${hour} : ${minutes} : ${seconds}`;
  return currentTime;
}
output();

let todayDisplay = document.querySelector(".day");
let currentDisplay = document.querySelector(".time");

todayDisplay.textContent = `Today is: ${today}`;
currentDisplay.textContent = `Current Time is: ${output()}`;

// ---- Second ----
const SECOND = document.querySelector(".secondExercise");
const BUTTON = document.createElement("button");

BUTTON.style.minWidth = "75px";
BUTTON.style.height = "30px";
BUTTON.textContent = "Print Window";

BUTTON.addEventListener("click", (e) => {
  window.print();
});
SECOND.append(BUTTON);

// ---- Third -----
const TODAY = new Date();
const MONTH = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "Novemnber",
  "Desember",
];

let month = MONTH[TODAY.getMonth()];
let hari = DAY[TODAY.getDay()];
let yy = TODAY.getFullYear();

let dd = TODAY.getDate();
let mm = TODAY.getMonth();

if (dd < 10) {
  dd = `0${dd}`;
}
if (mm < 10) {
  mm = `0${mm}`;
}

const THIRD = document.querySelector(".thirdExercise");
const BUTTON2 = document.createElement("button");

THIRD.append(BUTTON2);
BUTTON2.style.minwidth = "75px";
BUTTON2.style.minheight = "30px";
BUTTON2.textContent = "Hari ini hari apa?";

BUTTON2.addEventListener("click", (e) => {
  BUTTON2.textContent = `${month}-${hari}-${yy}, ${mm}/${dd}/${yy} or ${hari}-${month}-${yy}, ${dd}/${mm}/${yy}`;
});

// ---- Fourth ----

const A = 5;
const B = 6;
const C = 7;

let s = (A + B + C) / 2;

let area = Math.sqrt(s * ((s - A) * (s - B) * (s - C)));
console.log(area);

// ---- Fifth ----

const ROTATE = () => {
  let element = document.querySelector("#rotate");
  let textNode = element.childNodes[0];
  let text = textNode.data;

  setInterval(() => {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 150);
};

ROTATE();

// ---- Sixth ----
