let b = Math.floor(Math.random() * 100) + 1;
var x = 1;

do { 

var a = Number(prompt("Guess the number?"));

if (isNaN(a)) {
    console.log("Invalid entry");
} else if (a <= 0 || a > 100) {
    console.log("Invalid entry");
}
console.log (a > b ? "your guess is greater - Try again " + a : (a < b) ? "your guess is lower - Try again " + a : "Hooray! you guessed it in " + x + " turn");

x++;

} while (a != b && x < 6);

if (a != b && x == 6) {
    console.log("Sorry you lost");
} 