// Functions

// Given a and b, your function should return the value of ab
/*Example:
Input: power(2,3) ––> Output: 8*/

/*var a,b;
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
}*/

// Given length of a regular hexagon, your function should return area of the hexagon.
/*Example:
Input: areaOfHexagon(10) ––> Output: 259.80*/

var len;
var rs=require("readline-sync");

len = rs.question("Enter length of hexagon:");
area(len);

function area(side)	{
	var result=3/2*1.732050807568877*side*side;
	console.log(`${result.toFixed(2)}`); 
}