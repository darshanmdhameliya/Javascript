let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let sub = document.querySelector("#sub");
let mul = document.querySelector("#mul");
let division = document.querySelector("#division");
let add = document.querySelector("#add");
let doublezero = document.querySelector("#doublezero");
let modules = document.querySelector("#modules");
let comma = document.querySelector("#comma");
let dot = document.querySelector("#dot");
let clear = document.querySelector("#clear");
let input = document.querySelector("#text");
let equls = document.querySelector("#equls");

one.addEventListener("click", () => {
  input.value += one.innerText;
});
two.addEventListener("click", () => {
  input.value += two.innerText;
});
three.addEventListener("click", () => {
  input.value += three.innerText;
});
four.addEventListener("click", () => {
  input.value += four.innerText;
});
five.addEventListener("click", () => {
  input.value += five.innerText;
});
six.addEventListener("click", () => {
  input.value += six.innerText;
});
seven.addEventListener("click", () => {
  input.value += seven.innerText;
});
eight.addEventListener("click", () => {
  input.value += eight.innerText;
});
nine.addEventListener("click", () => {
  input.value += nine.innerText;
});
zero.addEventListener("click", () => {
  input.value += zero.innerText;
});
doublezero.addEventListener("click", () => {
  input.value += doublezero.innerText;
});
dot.addEventListener("click", () => {
  input.value += dot.innerText;
});
add.addEventListener("click", () => {
  input.value += add.innerText;
});
sub.addEventListener("click", () => {
  input.value += sub.innerText;
});
mul.addEventListener("click", () => {
  input.value += mul.innerText;
});
division.addEventListener("click", () => {
  input.value += division.innerText;
});
modules.addEventListener("click", () => {
  input.value += modules.innerText;
});
comma.addEventListener("click", () => {
  input.value += comma.innerText;
});
clear.addEventListener("click", () => {
  input.value = "";
});

let op;
let previusvalue;
add.addEventListener("click", () => {
  previusvalue = input.value;
  input.value = "";
  op = "+";
});
sub.addEventListener("click", () => {
  previusvalue = input.value;
  input.value = "";
  op = "-";
});
mul.addEventListener("click", () => {
  previusvalue = input.value;
  input.value = "";
  op = "*";
});
division.addEventListener("click", () => {
  previusvalue = input.value;
  input.value = "";
  op = "/";
});
modules.addEventListener("click", () => {
  previusvalue = input.value;
  input.value = "";
  op = "%";
});

equls.addEventListener("click", () => {
  if (op === "+") {
    input.value = parseInt(previusvalue) + parseInt(input.value);
  }
  if (op === "-") {
    input.value = parseInt(previusvalue) - parseInt(input.value);
  }
  if (op === "*") {
    input.value = parseInt(previusvalue) * parseInt(input.value);
  }
  if (op === "/") {
    input.value = parseInt(previusvalue) / parseInt(input.value);
  }
  if (op === "%") {
    input.value = parseInt(previusvalue) % parseInt(input.value);
  }
});
