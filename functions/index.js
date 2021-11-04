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

/*var len;
var rs=require("readline-sync");

len = rs.question("Enter length of hexagon:");
area(len);

function area(side)	{
	var result=3/2*1.732050807568877*side*side;
	console.log(`${result.toFixed(2)}`); 
}*/

// Given a sentence, your functions should return the number of words in the sentence.
/*Example:
Input: noOfWords(We are neoGrammers) ––> Output: 3*/

/*var sent;
var rs= require('readline-sync');

sent = rs.question("Enter a sentence: ");

function wordCounter(text) {
  var text = sent.value;
  var wordCount = 0;
  for (var i = 0; i <= text.length; i++) {
    if (text.charAt(i) == ' ') {
      wordCount++;
    }
  }
	console.log(wordCount);
}*/

// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
/*Example:
Input: findMin(3,5) ––> Output: 3
Input: findMin(3,5,9,1) ––> Output: 1
(Hint: Lookup rest parameters in JavaScript)*/

/*syntax: function f(a, b, ...theArgs) {
  // ...
}

function functionname(...parameters)   //... is the rest parameter (triple dots)
{
statement;
}*/

/*function mini(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return Math.min(previous,current);
  });
}

console.log(mini(1,2,3,4,5,6));
console.log(mini(3,5));
console.log(mini(3,5,9,1));*/

// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
/*Example:
Input: findMax(3,5) ––> Output: 5
Input: findMax(3,5,9,1) ––> Output: 9
(Hint: Lookup rest parameters in JavaScript)*/

/*function maxi(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return Math.max(previous,current);
  });
}

console.log(maxi(1,2,3,4,5,6));
console.log(maxi(3,5));
console.log(maxi(3,5,9,1));*/

// Given three angles of a triangle, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

var a,b,c;
var rs=require("readline-sync");

a=rs.question("Enter angle1 of a triangle: ");
b=rs.question("Enter angle2 of a triangle: ");
c=rs.question("Enter angle3 of a triangle: ");

typeOfTriangle(a,b,c);

function typeOfTriangle(a1,a2,a3)	{
	//a1=parseInt(a, 10);
	a1=Number(a);
	//a2=parseInt(b, 10);
	a2=Number(b);
	//a3=parseInt(c, 10);
	a3=Number(c);

	if((a1+a2+a3)==180)	{
		if(a===b && a===c)	{
			console.log("Equilateral Triangle");
		}
		else if(a===b || a===c || b===c)	{
			console.log("Isoceles Triangle");
		}
		else	{
			console.log("Scalene Triangle");
		}
	}
	else	{
		console.log("Not a Triangle");
	}
}