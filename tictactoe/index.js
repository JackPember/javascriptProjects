//Create the player, gameBoard, and displayController factories/modules
//Put all the proper functions into each factory/module for better code organization
//gameBoard will store the board array, and have a function to render the board to the appropriate html elements
//gameBoard will also have a function to check for row, diagonal, and column victories, and if so, will properly end the game.


const Player = (name, marker) => {
    const getMarker = () => marker;
    const getName = () => name;
    const setName = (newName) => name = newName;
    return {getMarker, getName, setName};
}

const gameBoard = (()=> {
    let player1 = Player("Player1","X");
    let player2 = Player("Player2","O");
    let currentPlayer = player1;
    let board = ["", "", "", "", "", "", "", "", ""];

    const renderBoard = () => {
        const displayBoard = document.querySelector(".board");
        const boardChildren = displayBoard.childNodes;
        for (const cell of boardChildren) {
            cell.textContent = board[Number(cell.id)];
        }
    }

    const startGame = () => { 
        const startBtn = document.querySelector("#start-game");
        startBtn.addEventListener("click", () => {
            const player1Name = document.querySelector("#player1").value;
            const player2Name = document.querySelector("#player2").value;
            player1.setName(player1Name);
            player2.setName(player2Name);
        });
    }

    const checkRows = () => {
        if (board.at(0) === currentPlayer.getMarker() && board.at(1) === currentPlayer.getMarker() && board.at(2) === currentPlayer.getMarker()){
            return true;
        }
        if (board.at(3) === currentPlayer.getMarker() && board.at(4) === currentPlayer.getMarker() && board.at(5) === currentPlayer.getMarker()){
            return true;
        }
        if (board.at(6) === currentPlayer.getMarker() && board.at(7) === currentPlayer.getMarker() && board.at(8) === currentPlayer.getMarker()){
            return true;
        }
        return false;
    }

    const checkCols = () => {
        if (board.at(0) === currentPlayer.getMarker() && board.at(3) === currentPlayer.getMarker() && board.at(6) === currentPlayer.getMarker()){
            return true;
        }
        if (board.at(1) === currentPlayer.getMarker() && board.at(4) === currentPlayer.getMarker() && board.at(7) === currentPlayer.getMarker()){
            return true;
        }
        if (board.at(2) === currentPlayer.getMarker()  && board.at(5) === currentPlayer.getMarker() && board.at(8) === currentPlayer.getMarker()){
            return true;
        }
        return false
    }

    const checkDiags = () => {
        if (board.at(0) === currentPlayer.getMarker() && board.at(4) === currentPlayer.getMarker() && board.at(8) === currentPlayer.getMarker()){
            return true;
        }
        if (board.at(2) === currentPlayer.getMarker() && board.at(4) === currentPlayer.getMarker() && board.at(6) === currentPlayer.getMarker()){
            return true;
        }
        return false;
    }

    const checkWinner = () => {
        rows = checkRows();
        cols = checkCols();
        diags = checkDiags();
        if (rows === true || cols === true || diags === true){
            renderBoard();
            const result = document.querySelector(".result")
            const message = document.createElement("p");
            message.textContent = `${currentPlayer.getName()} is the winner!`;
            result.appendChild(message);
            const resetButton = document.createElement("button");
            resetButton.textContent = "Reset Game";
            resetButton.addEventListener("click", resetGame);
            result.appendChild(resetButton);
        } else if (board.every((val) => val !== "")) {
            renderBoard();
            const result = document.querySelector(".result")
            const message = document.createElement("p");
            message.textContent = "It's a draw! Game over!";
            result.appendChild(message);
            const resetButton = document.createElement("button");
            resetButton.textContent = "Reset Game";
            resetButton.addEventListener("click", resetGame);
            result.appendChild(resetButton);
        } else {
            renderBoard();
            switchCurrentPlayer();
        }
    }

    const resetGame = () => {
        board = board.map((val)=> val = "");
        renderBoard();
        const result = document.querySelector(".result");
        while (result.hasChildNodes()) {
            result.removeChild(result.firstChild);
        }
        const player1Name = document.querySelector("#player1");
        const player2Name = document.querySelector("#player2");
        player1Name.value = "";
        player2Name.value = "";
        player1.setName("Player1");
        player2.setName("Player2");
        currentPlayer = player1;
    }

    const switchCurrentPlayer = () => currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;

    const setupGame = () => {
        const displayBoard = document.querySelector(".board");
        const boardChildren = displayBoard.childNodes;
        for (const cell of boardChildren) {
            cell.addEventListener("click", () => {
                if (board[Number(cell.id)] === ""){
                    board[Number(cell.id)] = currentPlayer.getMarker();
                }
                checkWinner();
            });
        }
    }

    return {setupGame, startGame};
})();



const game = () => {
    gameBoard.startGame();
    gameBoard.setupGame();  
};

game();