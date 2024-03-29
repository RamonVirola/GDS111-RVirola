let startTTTBtnObj = document.getElementById("startTTT");

startTTTBtnObj.addEventListener("click", mainscript);

function mainscript() {
    let ttt = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    function displayBoard() {
        console.log(ttt[0][0] + "|" + ttt[0][0] + "|" + ttt[0][2]);
        console.log(ttt[1][0] + "|" + ttt[1][0] + "|" + ttt[1][2]);
        console.log(ttt[2][0] + "|" + ttt[2][0] + "|" + ttt[2][2]);
    }

    function instructions() {
        console.log("\n-----------------------------");
        console.log("Type the number for your move");
        console.log("|1,2,3|");
        console.log("|4,5,6|");
        console.log("|7,8,9|");
    }

    function placeChoice(choice, symbol) {
        let succeed = false;

        if (choice == 1) {
           if (ttt[0])
           
        }

        return succeed;
    }

    function someoneWon(symbol) {
        let win = false;

        // Horizontal checks
        if ((ttt[0][0] === symbol && ttt[0][1] === symbol && ttt[0][2] === symbol) ||
            (ttt[1][0] === symbol && ttt[1][1] === symbol && ttt[1][2] === symbol) ||
            (ttt[2][0] === symbol && ttt[2][1] === symbol && ttt[2][2] === symbol)) {
            win = true;
        }

        // Vertical checks
        if ((ttt[0][0] === symbol && ttt[1][0] === symbol && ttt[2][0] === symbol) ||
            (ttt[0][1] === symbol && ttt[1][1] === symbol && ttt[2][1] === symbol) ||
            (ttt[0][2] === symbol && ttt[1][2] === symbol && ttt[2][2] === symbol)) {
            win = true;
        }

        // Diagonal checks
        if ((ttt[0][0] === symbol && ttt[1][1] === symbol && ttt[2][2] === symbol) ||
            (ttt[0][2] === symbol && ttt[1][1] === symbol && ttt[2][0] === symbol)) {
            win = true;
        }

        return win ? symbol : null;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    let choice = 0;
    let winnerSymbol = null;
    let hasWon = false;

    do {
        instructions();
        // Player Moves
        choice = Number(prompt("Enter a number of your choice:"));
        placeChoice(choice, "X");
        console.log("Human's Move:");
        displayBoard();
        winnerSymbol = someoneWon("X");

        if (winnerSymbol === "X") {
            console.log("Congratulations, you win!");
            break;
        } else if (winnerSymbol === "O") {
            console.log("Sorry, you lost.");
            break;
        }
    } while (!hasWon);

    // PC Moves
    let succeed = false;

    do {
        choice = getRandomInt(9);
        succeed = placeChoice(choice, "O");
    } while (!succeed);

    console.log("PC's Move:");
    displayBoard();
    winnerSymbol = someoneWon("O");

    if (winnerSymbol === "O") {
        console.log("Sorry, you lost.");
    } else if (winnerSymbol === "X") {
        console.log("Congratulations, you win!");
    }
}