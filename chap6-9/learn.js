// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

let a = 10;

document.write("Result:<br>");
document.write("The value of a is: " + a);
document.write("<br>----------------------------------<br><br>");

// Pre-increment
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a);
document.write("<br><br>");

// Post-increment
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a);
document.write("<br><br>");

// Pre-decrement
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a);
document.write("<br><br>");

// Post-decrement
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a);


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


var c = 2;
var b=1;
var result= --c - --b + ++b + b--;

console.log("Final value of c: " + c);
console.log("Final value of b: " + b);
console.log("Final value of result: " + result);


// 3. Write a program that takes input a name from user &
// greet the user

let userName=prompt("your nice name please!").toUpperCase();
alert("Hello " + userName + "  Welcome!");

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

