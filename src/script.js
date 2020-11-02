function getTilesDOM(){
    return Array.from(document.querySelectorAll("td"))
}

const DOM = {
    tiles: getTilesDOM(),
    x: "blue", // Image here
    o: "green", // Image here
    alert: document.querySelector(".alert"),
    boardSizeInput: document.querySelector("#board-size-input"),
    toWinInput: document.querySelector("#to-win-input"),
    submitButton: document.querySelector("#submit-button"),
    board: document.querySelector("tbody"),
    };