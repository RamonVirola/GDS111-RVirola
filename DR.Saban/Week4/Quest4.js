var age = Number(prompt("What is your age?"));

if (isNaN(age)) {
    console.log("Invalid entry");
} else if (age === 0){
    console.log("Invalid entry");
} else {

    if (age < 18) {
        console.log("Minor");
} else if (age > 64) {
        console.log("Senior");
   } else {
        console.log("Neither senior nor minor");
   }
}