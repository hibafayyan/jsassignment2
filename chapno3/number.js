// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

let age=25
alert("I am " + age + " years old");
// <---------------->//


// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var N=14
alert("You have visited this site " + N +" times")
// <---------------->//


// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthYear=1947
// <---------------->//


document.writeln(`My birthyear is  ${birthYear}
   <p>Data typs of my declear variable is number</p> 
`);
// <---------------->//


// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”


var visitorsName = "fayyan";
var productTitle = "shirts";
var quantity = 10;

document.writeln (`${visitorsName} ordered ${quantity} ${productTitle} on XYZ Clothing store`)
// <---------------->//