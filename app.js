const generateButton = document.querySelector(".generate-btn");
const buttons = document.querySelectorAll(".button");
const submitBtn = document.querySelector(".submit-btn");

generateButton.addEventListener("click", () => {
    const randomValue = randomGenerator();
    document.querySelector(".random-pin").value = randomValue;
})

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = button.innerHTML;
        const typedItem = document.querySelector(".pin-input");
        if (isNaN(buttonValue)) {
            if (buttonValue === "B") {
                const typedItem = document.querySelector(".pin-input");
                typedItem.value = typedItem.value.slice(0, typedItem.value.length - 1);
            } else if (buttonValue === "C") {
                reset();
            }

        } else {
            typedItem.value = typedItem.value + buttonValue;
        }

    })
})

submitBtn.addEventListener("click", () => {
    const typedItemValue = document.querySelector(".pin-input").value;
    const randomGenValue = document.querySelector(".random-pin").value;
    if (typedItemValue === randomGenValue) {
        document.querySelector(".right").style.display = "block";
        document.querySelector(".wrong").style.display = "none";
    } else {
        document.querySelector(".wrong").style.display = "block";
        document.querySelector(".right").style.display = "none";
    }
})

function randomGenerator() {
    const randomNumber = Math.floor(Math.random() * 9000 + 1000);
    return randomNumber;
}

function reset() {
    document.querySelector(".pin-input").value = "";
    document.querySelector(".random-pin").value = "";
    document.querySelector(".wrong").style.display = "none";
    document.querySelector(".right").style.display = "none";
}