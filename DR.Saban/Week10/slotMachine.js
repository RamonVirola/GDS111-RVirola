let credits = 1000;
const bet = 150;

while (true) {
    console.log("1. Spin");
    console.log("2. Quit");

    const choice = prompt("Enter your choice (1 or 2):");

    if (choice === "1") {
        // Spin the slot machine
        credits -= bet;

        const symbolNames = ['Apple, ', 'Orange, ', 'Grapes, ', 'Strawberry, '];

        let spin = 'You spinned: '
        let totalWinnings = 0;

        for (let i = 0; i < 4; i++) {
            const randomSymbol = Math.floor(Math.random() * 4);

            spin += symbolNames[randomSymbol];

            totalWinnings += [100, 75, 50, 25][randomSymbol];
        }

        credits += totalWinnings;

        console.log(spin + " | New Credits: " + credits + " | Winnings: " + totalWinnings);
    } else if (choice === "2") {
        console.log("Thanks for playing! Final credits: " + credits);
        break;
    } else {
        console.log("Invalid choice. Please enter 1 to spin or 2 to quit.");
    }
}