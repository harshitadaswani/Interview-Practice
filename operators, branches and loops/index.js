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

/*var num1=8; 
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
}*/

// Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

/*var num1=35; 
var num2=29;
var num3=46;

if(num1<num2) {
	if(num1<num3) {
		console.log(num1+" is minimum");
	}
	else {
		console.log(num3+" is minimum");
	}
}
else {
	if(num2<num3) {
		console.log(num2+" is minimum");
	}
	else {
		console.log(num3+" is minimum");
	}
}*/

// Write program to take a month as an input from the user and find out whether the month has 31 days or not.

/*var rs = require('readline-sync');
var month= rs.question("Enter a month number:");

if(month==='1'||month==='3'||month==='5'||month==='7'||month==='8'||month==='10'||month==='12') {
	console.log("month has 31 days");
}
else if(month==='2') {
	console.log("month has either 28 or 29 days");
}
else if(month>12) {
	console.log("not a valid month number")
}
else {
	console.log("month has 30 days");
}*/

// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz". Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....

/*var i;
for(i=1;i<=100;i++)	{
	if(i%3===0 && i%5===0)	{
		console.log("FizzBuzz");
	}
	else if(i%3===0)	{
		console.log("Fizz")
	}
	else if(i%5===0)	{
		console.log("Buzz")
	}
	else	{
		console.log(i);
	}
}*/

//Print the following star pattern :-

/* 
*
* *
* * *
* * * *
* * * * *
*/

/*var i,j;
var str="";
for(i=0; i<=5; i++)	{
	for(j=0; j<i; j++)	{
		str=str+"*";
	}
	str=str+"\n";
}
console.log(str);*/

// Write a program to take a number input from user and print multiplication table 12 times for that number.

/*var num, i;
var rs = require('readline-sync');

num = rs.question("Enter a number: ");

for(i=0;i<=12;i++)	{
	var product = num*i;
	console.log(num+" * "+i+" = "+product);
}*/

// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

/*var first=0,second=1,third,i,n;
var rs= require('readline-sync');

n =rs.question("Enter a number:");

for(i=0; i<=n; i++)	{
	console.log(first);
	third= first+second;
	first =second;
	second =third;
}*/

// Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

/*var f=1,i,n;
var rs=require('readline-sync');

n=rs.question("Enter a number: ");

for(i=1; i<=n; i++)	{
	f=f*i;
}

console.log(f);*/

// Write a Program to take a number input from user and find if the number is Prime or not.

/*var i,n;
var rs=require('readline-sync');

n=rs.question("Enter a number: ");

if(n==='1')	{
	console.log("1 is neither prime nor composite");
}
else if(n==='2')	{
	console.log("prime number");
}
else{
	for(i=2; i<n; i++)	{
	if(n%i!==0)	{
		console.log("prime number");
		break;
	}
	else {
		console.log("not a prime number");
		break;
	}
}
}*/

// Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

var day;
var rs= require('readline-sync');

day= rs.question("Enter a day: ");

switch(day) {
	case 'monday':
		console.log("weekday");
		break;

	case 'tueday':
		console.log("weekday");
		break;

	case 'wednesday':
		console.log("weekday");
		break;

	case 'thursday':
		console.log("weekday");
		break;

	case 'friday':
		console.log("weekday");
		break;

	case 'saturday':
		console.log("weekend");
		break;

	case 'sunday':
		console.log("weekend");
		break;

	default:
		console.log("invalid day")
		break;
}