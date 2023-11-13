const playerFunction = function (symbolX, symbolO) {
    return {
            playerX: symbolX,
            playerO: symbolO,
        };
    
    };
// global - Factory function that returns object
let Players = playerFunction("X", "O");

gameObj = {
    board: ["", "", "", "", "", "", "", "", ""],
    };

    let gameBoardFlow = (function () {
        let board = document.querySelectorAll(".row");
        let objValue = gameObj.board; 
    
    function privateRenderBoard () {
            for (let i = 0; i < objValue.length; i++) {
                board[i].textContent = objValue[i];
            };
            console.log("privateRenderBoard was called");
        };

    return {
        render() { //ES6 Shorthand
        privateRenderBoard();
       }

    };

    })();

gameBoardFlow.render();

let gameController = (function () {
    let activePlayer = Players.playerX;
    let rows = document.querySelectorAll(".row");
    rows.forEach((cell, index) => {
    cell.addEventListener('click', () => {

     if (cell.textContent === "") {
        cell.textContent = `${activePlayer}`
        gameObj.board[index] =`${activePlayer}`
        console.log(gameObj);

        gameBoardFlow.render();

        if (activePlayer === Players.playerX) {
            activePlayer = Players.playerO
        } else if (activePlayer === Players.playerO) {
            activePlayer = Players.playerX
        };
    
        // Ternary equivalent: activePlayer = (activePlayer === Players.playerX) ? Players.playerO : Players.playerX;

     };

     console.log(activePlayer);
     console.log(gameObj.board)
     
     gameWinner();
     
     });
})})();

function gameWinner() {
    let winOption1 = gameObj.board.slice(0,3);
    let winOption2 = gameObj.board.slice(3,6);
    let winOption3 = gameObj.board.slice(6);
    let winOption4 = [gameObj.board[0],gameObj.board[3], gameObj.board[6]]
    let winOption5 = [gameObj.board[1],gameObj.board[4], gameObj.board[7]]
    let winOption6 = [gameObj.board[2],gameObj.board[5], gameObj.board[8]]
    let winOption7 = [gameObj.board[0],gameObj.board[4], gameObj.board[8]]
    let winOption8 = [gameObj.board[2],gameObj.board[4], gameObj.board[6]]

let winnerArray = [winOption1, winOption2, winOption3, winOption4, winOption5, winOption6, winOption7, winOption8]


    let winnerFound = 
    allEqual(winOption1) ||
    allEqual(winOption2) ||
    allEqual(winOption3) ||
    allEqual(winOption4) ||
    allEqual(winOption5) ||
    allEqual(winOption6) ||
    allEqual(winOption7) ||
    allEqual(winOption8); 

function allEqual(arr) {
            return arr.every(element => element === arr[0] && element !== "");
    }

let gameObjAllStrings = gameObj.board.every(element => element != "");
console.log(gameObjAllStrings);

if (winnerFound === true && Players.playerX === "X") {
    console.log(`Player ${Players.playerX} You Won!`);
    
} else if (winnerFound === true && Players.playerO === "O") {
    console.log(`Player ${Players.playerO} You Won!`);

} else if (winnerFound !== true && gameObjAllStrings === true) {
    console.log(`It's a Tie!`);
};

};


