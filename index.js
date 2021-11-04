// Write a program to input 2 numbers and display the sum of the numbers to the console.

/*Input Number 1: 20
Input Number 2: 40
Sum : 60*/

var a,b,sum;
var rs= require('readline-sync');

a=rs.question("Enter value of number 1: ");
b=rs.question("Enter value of number 2: ");
n1= Number(a);
n2= Number(b);
sum= n1+n2;

console.log(sum);