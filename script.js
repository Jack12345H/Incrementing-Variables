// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
var displayEl = document.getElementById("display");
var plus1Btn = document.getElementById("plus1");
var plus10Btn = document.getElementById("plus10");
var plus50Btn = document.getElementById("plus50");

var minus1Btn = document.getElementById("minus1");
var minus10Btn = document.getElementById("minus10");
var minus50Btn = document.getElementById("minus50");

var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
let counter = 0;
plus1Btn.addEventListener("click", add1);
plus10Btn.addEventListener("click", add10);
plus50Btn.addEventListener("click", add50);

minus1Btn.addEventListener("click", sub1);
minus10Btn.addEventListener("click", sub10);
minus50Btn.addEventListener("click", sub50);

function add1() {
  counter = counter + 1;
  console.log(counter);
  displayEl.innerHTML = counter;
}

function add10() {
  counter = counter + 10;
  console.log(counter);
  displayEl.innerHTML = counter;
}

function add50() {
  counter = counter + 50;
  console.log(counter);
  displayEl.innerHTML = counter;
}

function sub1() {
  counter -= 1;
  displayEl.innerHTML = counter;
}

function sub10() {
  counter -= 10;
  displayEl.innerHTML = counter;
}

function sub50() {
  counter -= 50;
  displayEl.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
stringInEl.addEventListener("change", updateStory);
var story = "once upon a time, ";

function updateStory() {
  var newWord = stringInEl.value;

  stringInEl.value = ""; // clears the input

  story += newWord + " ";

  stringOutEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.

var rand1Btn = document.getElementById("rand1");
var rand2Btn = document.getElementById("rand2");
var rand3Btn = document.getElementById("rand3");
var rand4Btn = document.getElementById("rand4");

var rand1OutEl = document.getElementById("rand1-out");
var rand2OutEl = document.getElementById("rand2-out");
var rand3OutEl = document.getElementById("rand3-out");
var rand4OutEl = document.getElementById("rand4-out");
var rand1in = document.getElementById("randin1");
var rand2in = document.getElementById("randin2");

rand1Btn.addEventListener("click", showRand1);
rand2Btn.addEventListener("click", showRand2);
rand3Btn.addEventListener("click", showRand3);
rand4Btn.addEventListener("click", showRand4);

function showRand1() {
  var rand = Math.random();
  rand = rand.toFixed(3);
  rand1OutEl.innerHTML = rand;
}

function showRand2() {
  var rand2 = Math.random() * 100;
  rand2 = rand2.toFixed(0);
  rand2OutEl.innerHTML = rand2;
}

function showRand3() {
  var rand3 = Math.random() * 10;
  rand3 -= 5;
  rand3 = rand3.toFixed(3);
  rand3OutEl.innerHTML = rand3;
}

function showRand4() {
  var rand4 = Math.random() * rand2in.value + rand1in.value;

  rand4OutEl.innerHTML = rand4;
}

// Random size buttons
var randomSize = document
  .getElementById("random-size")
  .addEventListener("click", changeSize);

function changeSize() {
  changeSize = Math.floor(Math.random() * 25 + 5);
  document.getElementById("button").style.fontSize = changeSize + "px";
}

//random color
var randomColor = document
  .getElementById("random-rgb")
  .addEventListener("click", changeColor);

function changeColor() {
  let r = Math.random() * 255 + 0;
  let g = Math.random() * 255 + 0;
  let b = Math.random() * 255 + 0;

  document.getElementById("HTML").style.background = `rgb(${r}, ${g}, ${b})`; // `rgb(100,22,33)`
}

var resetButton = document
  .getElementById("reset")
  .addEventListener("click", resetPage);

let body = document.getElementById("button");

function resetPage() {
  document.getElementById("HTML").style.background = "#9ae4c8";
  document.getElementById("button").style.fontSize = "16px";
  document.getElementById("HTML").style.fontSize = "16px";
  rand1OutEl.innerHTML = "----------";
  rand2OutEl.innerHTML = "----------";
  rand3OutEl.innerHTML = "----------";
  rand4OutEl.innerHTML = "----------";
  stringOutEl.innerHTML = "Once upon a time,";
  displayEl.innerHTML = "0";
}
