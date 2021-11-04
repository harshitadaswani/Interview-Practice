// Write a program to input 2 numbers and display the sum of the numbers to the console.

/*Input Number 1: 20
Input Number 2: 40
Sum : 60*/

/*var a,b,sum;
var rs= require('readline-sync');

a=rs.question("Enter value of number 1: ");
b=rs.question("Enter value of number 2: ");
n1= Number(a);
n2= Number(b);
sum= n1+n2;

console.log(sum);*/

// Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

/*Input: P=100, R=6%, T=2
Output: 12*/

var p,r,t,si;
var rs=require('readline-sync');

p=rs.question("Enter principal amount: ");
r=rs.question("Enter rate of interest: ");
n=rs.question("Enter time period: ");

p=Number(p);
r=Number(r);
n=Number(n);
si=(p*r*n)/100;

console.log(si);