// Functions

// Given a and b, your function should return the value of ab
/*Example:
Input: power(2,3) ––> Output: 8*/

var a,b;
var rs= require("readline-sync");

a = rs.question("Enter value of a: ");
b = rs.question("Enter value of b: ");
//result=a**b;
power(a,b);

function power(base,exp)	{
	var i;
	var result=base;
	for(i=1; i<exp; i++)	{
		result = result*base;
	}
	console.log(result);
}

