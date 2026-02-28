// 1. Declare and initialize an empty multidimensional array. (Array of arrays) is ko explain karo

let arr=[[1,2,3,4],["a","b","c","d"],[undefined]];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:


let num=[
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]


// 3. Write a program to print numeric counting from 1 to 10.

for (let i=1 ; i<=10 ; i++){
     document.writeln(`${i}  <br>`)
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

let number=+prompt("enter a number to show its multiplication table");
let lenght=+prompt("Enter length of multiplication table");


for (let i=1 ; i<=lenght ; i++){
  document.writeln(`${number} x ${i}=${i*number} <br>`)
}

// 5. Write a program to print items of the following array
// using for loop:
//  fruits = [“apple”, “banana”, “mango”, “orange”,
//  “strawberry”]


let fruits=["apple","banana","mango","orange","strawberry"]


for (let i=0 ; i <fruits.length ; i++){

document.writeln(`${fruits[i]} <br> `)

// document.writeln(`Element at index ${i} is ${fruits[i]} <br>`);

}


for (let i=0 ; i <fruits.length ; i++){

// document.writeln(`${fruits[i]} <br> `)

document.writeln(`Element at index ${i} is ${fruits[i]} <br>`);

}



