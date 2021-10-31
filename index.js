// Operators Branching and Loops 

// Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

var num1=5;
var num2=13;
var num3=5;
var num4=21;
var num5=48;

var sum = num1+ num2+ num3+ num4+ num5;
console.log(sum);

// Write a program to take a number input from user and determine whether the number is odd or even.

var rs= require('readline-sync');
var num =rs.question("Enter a number:");

if(num%2===0){
	console.log(num+" is a even number");
}
else {
	console.log(num+" is a odd number");
}
