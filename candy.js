var c = Number(prompt("How many coupons? "));
var b = 10;
var g = 3;
var totB = 0;
var remC = 0;
var totG = 0;
var remG = 0;

 
if (c > b) {
	totB = c / b;
	remC = c % b;

} else {
	totG = c / g;	
	remG = c % g;
}

if (remC > g) {
	totG = remC / g;
	remC = remC % g;
	

	
}

console.log("You now have " + totB, "candy bars");
console.log("You now have " + totG, "gumballs");

if (remC > remG) {
console.log("You now have " + remC, "coupons left");
} else {
console.log("You now have" + remG, "coupons left");
}