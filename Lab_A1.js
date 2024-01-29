
/*
1.	Write a function called sandwich calculator. This should accept one value: bread
2.	The function should return the total number of possible sandwiches based on the amount of breads available. I need 2 breads to make one sandwich, so if there are 10 breads, it should return 5. Test your function with console.log.
3.	Extend your function so it accepts two values, bread and cheese.
4.	It takes two breads and one cheese to make a sandwich. The function should return the total number of possible sandwiches, so if there are breads, but only 1 cheese, it should return 1.*/

let sndwhclc = (bread, cheese) => {

    let total_Sndwches;
    if (bread / 2 >= cheese) {
        return total_Sndwches= cheese;
    }
    if ((bread >= 2) && (cheese === 1)) {
        return total_Sndwches = 1;
    }
    if (bread / 2 <= cheese) {
        return total_Sndwches = bread / 2;
    }
}

console.log("Total Sandwiches : " + sndwhclc(12, 20));


// Problem 2:
// Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
// Sample object:
var student = {
    name: "David Rayy",
    sclass: "V",
    rollno: 34
};

console.log(student);

// Problem 3:
// Write a JavaScript program to delete the rollno
// property from the following object. Also print the objrect before or after deleting the property. Go to the editor
// Sample object:

delete student.rollno;
console.log(student);




/*Problem 1:
Write program to print the kth digit from last. E.g. input 23617
 and k=4 output 3. 
 */

 let dgtfndr = (nuum, m ) => {
    var Digit;
    let kk = "" + nuum;
    for (let i = 0; i < kk.length; i++) {
        if (kk[i] == (m - 1)) {
            Digit = "" + kk[i];

        }
    }
    return parseInt(Digit);
}

console.log(dgtfndr(659657, 54534));

/* Problem 2:
Write program to find sum of all digits. Input 23617 output 2+3+6+1+8=20
(Hint: convert string to array and then use reduce function)
 */

var k = "6238"; 
let arry = []; 
for (let ks of k) {
    arry.push(parseInt(ks));

console.log(arry);

var result = arry.reduce((prv, currnt) => {
    return prv + currnt;
})
console.log(`total: ${result}`); 

/* Problem 3:
Write program to find sum of even digits. Input 23617 output 2+6=8.
(Hint: Convert string to array and use map function)
 */

var n = "1545456";
let arry2 = [];

for (let ns of n) {
    arry2.push(parseInt(ns));
}

let sum = 0;


arry2.map((num) => {
  
    if (num % 2 == 0) {
        sum = sum + num;
    }
})

console.log(arry2);
console.log(`Sum=${sum}`);

/* Problem 4:
Write a JavaScript that calculates the squares and cubes of the numbers from 0 to 10.
 */

var sqsandqbs = () => {
    let n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let squares = n.map((s) => {
        return k ** 2;
    })

    let cubes = n.map((c) => {
        return c ** 3;

    })

    var obj = {
        allNumbers: num,
        Squares: squares,
        Cubes: cubes
    }

    return obj;
}

console.log(sqsandqbs());

/* Problem 5:
Develop and demonstrate JavaScript script that uses functions 
for the following problems: 
1.	Parameter: A string 
2.	Output: The position in the string of the left-most vowel 
3.	Parameter: A number  
4.	Output: The number with its digits in the reverse order
 */

let vowel = (val) => {
    let vals = "";

    vals = val;
    vals = vals.toLocaleLowerCase(); 
    let pstn
    for (let i = 0; i < vals.length; i++) {

        if (vals[i] === 'a' || vals[i] === 'e' || vals[i] === 'i' || vals[i] === 'o' || vals[i] == 'u') {

            pstn = i;
            break;

        }
    }
    return pstn;

}
console.log("Postion of the Left most vowel ::" + vowelPositioner(''));


// Task 2 :    Reversing the numbers

let nmbrrr = (digits) => {
    let numbers = "" + digits; 
    var arrr = []; 
    for (let element of numbers) {
        arrr.push(element);
    }
    let arr2 = arrr.reverse().join('');
    return parseInt(arr2);



}


console.log(nmbrrr(564));




/* 
Problem 6:
Write a JavaScript program where the program takes a random integer
 between 1 to 10, the user is then prompted to input a guess number.
  If the user input matches with guess number, 
  the program will display a message "You WIN" 
  otherwise display a message "Not matched".
 */

const l= require('prompt sync');
const p = ps();
var random= () => {
    var randomNumber = Math.floor((Math.random() * 10 + 1));
    console.log(randomNumber);
    var guessNumber = prompt("Guess The Number!");
    if (guessNumber == randomNumber) {
        console.log("You WIN");
    }
    else {
        console.log("Try Again")
    }

}
random(5);


/* Problem 7:
Write a JavaScript program to check whether 10 appears in first
 or last position of a given array of integers. 
 The array length must be greater or equal to 2.
 */
let numberChecker = (arryr) => {
    if (arryr.length >= 2) {

        return arryr[0] === 10 || arryr[arryr.length - 1] === 10;
    }
    else {
        console.log('The size of an Array is less than 2');
    }
}

console.log(numberChecker([10, 6, 5, 5));



/* Problem 8:
Write a JavaScript function that returns a passed
string with letters in alphabetical order.
Example string: 'comsats'
Expected Output: 'acmost'
 */

let aOrder = (st) => {

    let arrays = [];
    for (let i = 0; i < st.length; i++) {
        arrays.push(st[i]); }
    let str = "";
    str = str + arrays.sort().join('');
    return str;
}}

console.log(cOrder('Laptop'));
