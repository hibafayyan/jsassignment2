// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

let char=prompt("Enter a single character");
let ascii=char.charCodeAt(0);


if(ascii >= 48 && ascii <= 57 ){
 console.log("this is a number");
 
}else if (ascii >= 65 && ascii <= 90) {
    console.log;
    ("This is an uppercase letter");
   } else if (ascii >= 97 && ascii <= 122) {
     console.log("This is a lowercase letter");
} else {
   console.log("This is some other character");
}


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

let num1=+prompt("enter 1st number");
let num2=+prompt("enter 2nd number");

if(num1 > num2){
    document.writeln(`${num1} is greater than ${num2}`);
} else if ( num2 > num1){
     document.writeln(`${num2} is greater than ${num1}`);
}
else{
    document.writeln("both are equal")
}


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.


let uNum=+prompt("Enter number");


if(  uNum > 0){
     alert("This is a positive integer");
} else if (  uNum < 0 ){
    alert("This is a negative integer");
}

else {
    alert("This is a 0");
}


// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise