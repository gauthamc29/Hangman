//initial references
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

let options = {
    fruits: ["apple", "blueberry", "mandarin", "pineapple", "pomegranate", "watermelon"],
    animals: ["hedgehog", "rhinoceros", "squirrel", "panther", "walrus", "zebra"],
    countries: [
        "India",
        "Hungary",
        "Kyrgystan",
        "Zimbabwe",
        "Dominica"
    ],
}

//count
let winCount = 0;
let count = 0;
let chosenWord = "";

//display option buttons
const displayOptions = () => {
    optionsContainer.innerHTML += `<h3>Please Select an Option</h3>`
    let buttonCon = document.createElement("div");
    for (let value in options) {
        buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`
    }
    optionsContainer.appendChild(buttonCon);
}

//block all the buttons 
const blocker = () => {
    let optionsButtons = document.querySelectorAll(".options");
    let letterButtons = document.querySelectorAll(".letters");
    //disable all options
    optionsButtons.forEach((button) => {
        button.disabled = true;
    });

    //disable all letters
    letterButtons.forEach((button) => {
        button.disabled = true;
    });
    newGameContainer.classList.remove("hide");
};

//word generator
const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll(".options");
    //if optionsValue matches the button innerText then highlight the button
    optionsButtons.forEach((button) => {
        if (button.innerText.toLowercase() === optionValue) {
            button.classList.add("active");
        }
        button.disabled = true;
    });

    //initially hide letters, clear previous word
    letterContainer.classList.remove("hide");
    userInputSection.innerText = "";
    
    let optionArray = options[optionValue];
    //choose random word
    chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
    chosenWord = chosenWord.toUpperCase();
}