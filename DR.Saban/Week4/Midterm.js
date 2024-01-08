do {
var a  = Number(prompt("Make selection\n1-Load 2-Save 3-Play 4-Help 5-Quit\nWhat number do you select?"));

if (isNaN(a)) {
    console.log("Invalid entry");
} else if (a <= 0 || a > 5) {
    console.log("Invalid entry");
  
} else {
    
    const selection = ["Invalid ","Loading game","Saving game","Lets Play!","Here's your help","Game Over!"]
    console.log(selection[a])
    
}

} while (a!=5);
