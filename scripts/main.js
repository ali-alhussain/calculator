let buttons = document.getElementsByClassName("buttons");
let buttonId = "btn0";
let buttonsInput;
let btntext;
let input = "0";
let body = document.getElementById("abody");
let modeTracker = 0;
let screen = document.getElementById("display");
let solution = 0;

//returns the id of the button that was clicked.
function getId() {
  buttonId = event.target.getAttribute("id");

  getInput();
}

//returns innertext of the button that was clicked.
function getInput() {
  buttonsInput = document.getElementById(buttonId);

  if (screen.textContent === solution.toString()) {
    if (buttonsInput.textContent.match(/\D/)) {
      input = solution.toString() + buttonsInput.textContent;
    } else {
      input = buttonsInput.textContent;
    }
  } else if (input === "0") {
    input = buttonsInput.textContent;
  } else {
    input = input + buttonsInput.textContent;
  }
  displayToScreen();
}

//displays calculation to screen
function displayToScreen() {
  screen.textContent = `${input}`;
}

//clears screen to 0 w/ clear btn.
function clearInput() {
  input = "0";
  displayToScreen();
}

//reports answer of calculation to screen - linked to html button
function equals() {
  let screen = document.getElementById("display");
  let answer = eval(input).toFixed(2);
  let answerSplit = answer.toString().split(".");

  if (input.match(/\/0/)) {
    screen.textContent = "ERROR. !/0";
  } else if (answerSplit[1] === "00") {
    solution = parseInt(answerSplit[0]);
    screen.textContent = `${solution}`;
  } else {
    solution = answer;
    screen.textContent = `${solution}`;
  }
}
