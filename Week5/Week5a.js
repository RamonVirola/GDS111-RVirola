// Returns a random number:
//let num1 =Math.random();
//console.log(num1);

// Returns a random interger from 1 to 11:
//let x = Math.floor(Math.random() * Maximum interger) + 1;
//console.log(x);

// Returns a random interger from 1 to 11: 7-11 game
let x = Math.floor(Math.random() * 11) + 1;
console.log("The number is: " + x);
if (x==7 || x==11){
    console.log("Congratulations, you win!");
}else{
    console.log("Sorry, you lost.");
}


