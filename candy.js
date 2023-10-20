var c = Number(prompt("How many coupons? "));

//candybar price//
var b = 10;

//Gumball price//
var g = 3;

//Total candybars//
var totB = 0;

//Total gumballs//
var totG = 0;

//Remaining coupons//
var remC = 0;

 
if (c > b) {
	totB = Math.floor (c / b);
   
	remC = c % b;

} else {
	totG = Math.floor (c / g);	
	remC = c % g;
}

if (remC > g) {
	totG = remC / g;
	remC = remC % g;
}

console.log("You now have " + totB, "candy bars");
console.log("You now have " + totG, "gumballs");
console.log("You now have " + remC, "coupons left");
