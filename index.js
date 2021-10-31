// Operators Branching and Loops 

// Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

/*var num1=5;
var num2=13;
var num3=5;
var num4=21;
var num5=48;

var sum = num1+ num2+ num3+ num4+ num5;
console.log(sum);*/

// Write a program to take a number input from user and determine whether the number is odd or even.

/*var rs= require('readline-sync');
var num =rs.question("Enter a number:");

if(num%2===0){
	console.log(num+" is a even number");
}
else {
	console.log(num+" is a odd number");
}*/

//Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

/*var num1=129;
var num2=251;

var maxi= Math.max(num1,num2);
var mini= Math.min(num1,num2);

console.log("Minimum number is "+mini);
console.log("Maximum number is "+maxi);*/

// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

var num1=8; 
var num2=23;
var num3=17;

if(num1>num2) {
	if(num1>num3) {
		console.log(num1+" is maximum");
	}
	else {
		console.log(num3+" is maximum");
	}
}
else {
	if(num2>num3) {
		console.log(num2+" is maximum");
	}
	else {
		console.log(num3+" is maximum");
	}
}