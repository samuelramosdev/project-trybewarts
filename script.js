const loginButton = document.querySelector("#login-button");
const loginEmail = document.querySelector("#login-input");
const passwordInput = document.querySelector("#password-input");
const checkboxContainer = document.querySelector("#checkbox-container");
const ratingField = document.querySelector("#label-rate");
const agreementCheckbox = document.querySelector("#agreement");
const submitButton = document.querySelector("#submit-btn");
const counter = document.querySelector("#counter");
const textArea = document.querySelector("textarea");
const evaluationForm = document.querySelector("#evaluation-form");
const nameInput = document.querySelector("#input-name");
const lastnameInput = document.querySelector("#input-lastname");
const emailInput = document.querySelector("#input-email");
const houseInput = document.querySelector("#house");
const chosenFamily = document.querySelector("input[name='family']:checked");
const subs = document.querySelectorAll("input[name='subs']:checked");

console.log(chosenFamily);

const validatePassword = () => {
  const capturedPassword = passwordInput.value;
  const capturedEmail = loginEmail.value;
  if (capturedPassword === "123456" && capturedEmail === "tryber@teste.com") {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.");
  }
};

const createCheckboxField = () => {
  const values = [
    "Higher Order Functions",
    "Jest",
    "Promises",
    "React",
    "SQL",
    "Python",
  ];
  for (value in values) {
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.className = "checkbox-label";
    label.innerHTML = values[value];
    input.type = "checkbox";
    input.name = "lessons";
    input.className = "subject";
    input.value = values[value];
    checkboxContainer.appendChild(label);
    label.appendChild(input);
  }
};

const createRatingField = () => {
  for (let index = 1; index <= 10; index += 1) {
    const input = document.createElement("input");
    input.type = "radio";
    input.value = index;
    input.name = "rate";
    ratingField.appendChild(input);
  }
};

const enableButton = () => {
  if (agreementCheckbox.checked) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "");
  }
};

const createCounter = () => {
  const inserted = textArea.value.length;
  counter.innerText = `${500 - inserted}/500`;
};

const processName = () => {
  const p = document.createElement("p");
  p.innerHTML = `Nome: ${nameInput.value} ${lastnameInput.value}`;
  evaluationForm.appendChild(p);
};

const processEmail = () => {
  const p = document.createElement("p");
  p.innerHTML = `Email: ${emailInput.value}`;
  evaluationForm.appendChild(p);
};

const processHouse = () => {
  const p = document.createElement("p");
  p.innerHTML = `House: ${houseInput.value}`;
  evaluationForm.appendChild(p);
};

const processFamily = () => {
  const p = document.createElement("p");
  p.innerHTML = `Família: ${chosenFamily.value}`;
  evaluationForm.appendChild(p);
};

const processSubs = () => {
  const p = document.createElement("p");
  let subsArray = [];
  let listInString = "";

  for (let index = 0; index < subs.length; index += 1) {
    subsArray.push(subs[index].value);
  }

  listInString = subsArray.join(", ");

  p.innerHTML = `Matérias: ${listInString}`;
  evaluationForm.appendChild(p);
};

const processFormContent = () => {
  evaluationForm.innerHTML = "";
  processName();
  processEmail();
  processHouse();
  processFamily();
  processSubs();
};

createRatingField();
createCheckboxField();
textArea.addEventListener("keyup", createCounter);
loginButton.addEventListener("click", validatePassword);
agreementCheckbox.addEventListener("click", enableButton);
submitButton.addEventListener("click", processFormContent);
