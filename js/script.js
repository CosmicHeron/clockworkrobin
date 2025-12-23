const clock = document.getElementById("clock");
const numbers = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
];

for (let i = 0; i < numbers.length; ++i) {
  let clockNumber = document.createElement("div");
  clockNumber.className = "number";
  clockNumber.id = `num_${String(i + 1).padStart(2, "0")}`;
  clockNumber.style = `--n: ${i + 1}`;
  clockNumber.append(numbers[i]);
  clock.appendChild(clockNumber);
}

const secondHand = document.getElementById("second");
const minuteHand = document.getElementById("minute");
const hourHand = document.getElementById("hour");

function clockUpdate() {
  const date = new Date();
  const seconds = date.getSeconds() / 60;
  const minutes = (seconds + date.getMinutes()) / 60;
  const hours = (minutes + date.getHours()) / 12;

  rotateClockHand(secondHand, seconds);
  rotateClockHand(minuteHand, minutes);
  rotateClockHand(hourHand, hours);
}

function rotateClockHand(p_hand, p_unit) {
  p_hand.style.setProperty("--rotate", p_unit * 360);
}

setInterval(clockUpdate, 1000);
