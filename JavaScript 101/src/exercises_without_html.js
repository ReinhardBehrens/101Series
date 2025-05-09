/*

Disclaimer
I coded all the samples independently from the actual PDF document, so there are some
differences, so its not 100% exactly the same. So if you copy and paste (Which you should not
be doing) code from the booklet, error could exist. 

*/

console.log(`Disclaimer
I coded all the samples independently from the actual PDF document, so there are some
differences, so its not 100% exactly the same. So if you copy and paste (Which you should not
be doing) code from the booklet, error could exist.\n\n `);

let seperator =      "---------------------------------------------------------------------------";
let seperatorType2 = "***************************************************************************";
/* Exercise 1 - Declare and Log a Variable */
console.log(seperator);
console.log(`Exercise 1 - Declare and Log a Variable`);
console.log(seperator);
let nameVariable = "Reinhard";
console.log(nameVariable);
console.log(seperator);

/* Exercise 2 - Determine Data Types */
console.log(seperator);
console.log(`Exercise 2 - Determine Data Types`);
console.log(seperator);
console.log(typeof(42));
console.log(typeof('hello'));
console.log(typeof(true));
console.log(typeof(null));
console.log(typeof(undefined));
console.log(seperator);

/* Exercise 3 - Use Arithmetic Operators */
console.log(seperator);
console.log(`Exercise 3 - Use Arithmetic Operators`);
console.log(seperator);
let a=10, b=5;
console.log(a-b);
console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log(seperator);

/* Exercise 4 - Use Comparison Operators */
console.log(seperator);
console.log(`Exercise 4 - Use Comparison Operators`);
console.log(seperator);
let c=15, d=6;
if(c > d)
{
    console.log("c is greater than d");
}
else
{
    console.log('d is greated than c');
}

if(c < d)
{
    console.log("c is smaller than d");
}
else
{
    console.log("d is smaller than c");
}
if(c == d)
{
    console.log(`c == d`);
}
else
{
    console.log(`c != d`);
}
if(c === d)
{
    console.log(`c === d`);
}
else
{
    console.log(`c !== d`);
}
console.log(seperator);
/* Exercise 5 - Write an If-Else Condition */
console.log(seperator);
console.log(`Exercise 5 - Write an If-Else Condition`);
console.log(seperator);
let num = -3;
if(num > 0)
{
    console.log("Number is bigger than zero");
} 
else if(num < 0)
{
    console.log("Number is smaller than 0");
}
else if(num === 0)
{
    console.log("Number is equal to zero");
}
console.log(seperator);
/* Exercise 6 - Use a Switch Statement */
console.log(seperator);
console.log(`Exercise 6 - Use a Switch Statement`);
console.log(seperator);
let day = 3;

switch(day)
{
    case 1:
        console.log("Day is Monday");
    break;
    case 2:
        console.log("Day is Tuesday");
    break;
    case 3:
        console.log("Day is Wednesday");
    break;
    case 4:
        console.log("Day is Thursday");
    break;
    case 5:
        console.log("Day is Friday");
    break;
    case 6:
        console.log("Day is Saturday");
    break;
    case 7:
        console.log("Day is Sunday");
    break;
}
console.log(seperator);
/* Exercise 7 - Use a For Loop */
console.log(seperator);
console.log(`Exercise 7 - Use a For Loop`);
console.log(seperator);
for(let i=1; i<=5; i++)
{
    console.log(i);
}
console.log(seperator);
/* Exercise 8 - Use a While Loop */
console.log(seperator);
console.log(`Exercise 8 - Use a While Loop`);
console.log(seperator);

let i=5;
while(i>0)
{
    console.log(i);
    i--;
}
console.log(seperator);
/* Exercise 9 - Write a Function */
console.log(seperator);
console.log(`Exercise 9 - Write a Function`);
console.log(seperator);
let number = 9;

function squareNumber(number)
{
    return number*number;
}

console.log(squareNumber(number));

console.log(seperator);
/* Exercise 10 - Function with Default Parameter */
console.log(seperator);
console.log(`Exercise 10 - Function with Default Parameter`);
console.log(seperator);

function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet("Sam");   // Hello, Sam
greet();        // Hello, Guest

console.log(seperator);

console.log(seperator);
/* Exercise 11 - Array Basics */
console.log(seperator);
console.log(`Exercise 11 - Array Basics`);
console.log(seperator);

let fruits = ["Apple", "Pear", "Banana"];
console.log(fruits[1]); // Pear

console.log(seperator);

/* Exercise 12 - Add and Remove from Arrays*/
console.log(seperator);
console.log(`Exercise 12 - Add and Remove from Arrays`);
console.log(seperator);

let names = ["Barry","Larry","Sam"];

names.push("Samson");
console.log(names);

names.shift();
console.log(names);

console.log(seperator);

/* Exercise 13 - Object Basics*/
console.log(seperator);
console.log(`Exercise 13 - Object Basics`);
console.log(seperator);

const person = {
    name: "John",
    age : "36"
}

console.log(person.name);
console.log(person.age);

console.log(seperator);

/* Exercise 14 - Access Object Properties*/
console.log(seperator);
console.log(`Exercise 14 - Access Object Properties`);
console.log(seperator);

const cars = ["Toyota", "Nissan", "Datsun"];

for(let car in cars)
{
    console.log(car + ":" + cars[car]);
}

// Alternative method of iterrating through the cars array
cars.forEach((car,i)=>{ console.log(i + ":" + car);})

console.log(seperator);

/* Exercise 15 - String Length*/
console.log(seperator);
console.log(`Exercise 15 - String Length`);
console.log(seperator);

let mystring = "This is a very short string value";

console.log(mystring.length);

console.log(seperator);

/* Exercise 16 - Convert to Uppercase*/
console.log(seperator);
console.log(`Exercise 16 - Convert to Uppercase`);
console.log(seperator);

let city = "london";
console.log(city.toUpperCase());

console.log(seperator);

/* Exercise 17 - Find a Character*/
console.log(seperator);
console.log(`Exercise 17 - Find a Character`);
console.log(seperator);

let findInString = "This is a sample string";
console.log(findInString.at(3));

console.log(seperator);

/* Exercise 18 - Parse String to Number*/
console.log(seperator);
console.log(`Exercise 18 - Parse String to Number`);
console.log(seperator);
// Note you can use numberTostring = 42; and then use numberTostring.toString() to convert to a string in the opposite direction
let numberToString = "42";

console.log(typeof(numberToString));
console.log(typeof(Number(numberToString)+1));

console.log(seperator);

/* Exercise 19 - Round a Decimal Number*/
console.log(seperator);
console.log(`Exercise 19 - Round a Decimal Number`);
console.log(seperator);

let roundedNumber = 4.7;

console.log(Math.floor(roundedNumber));
console.log(Math.ceil(roundedNumber));

console.log(seperator);

/* Exercise 20 - Generate a Random Number (0–9)*/
console.log(seperator);
console.log(`Exercise 20 - Generate a Random Number (0–9)`);
console.log(seperator);

let rand = Math.floor(Math.random()*10);
console.log(rand);

console.log(seperator);

/* Exercise 21 - Use Logical Operators*/
console.log(seperator);
console.log(`Exercise 21 - Use Logical Operators`);
console.log(seperator);

let ageDefined = 43;

if(ageDefined >= 18 && ageDefined <= 65)
{
    console.log(`The ageDefined of ${ageDefined} is between 18 and 65`);
}
else{
    console.log(`The ageDefined of ${ageDefined} is NOT between 18 and 65`);
}

console.log(seperator);

/* Exercise 22 - Ternary Operator*/
console.log(seperator);
console.log(`Exercise 22 - Ternary Operator`);
console.log(seperator);

let ternaryCheck = 4;

function checkNumberEven(number)
{
    return (number % 2 === 0) ? true : false;
}

console.log(checkNumberEven(ternaryCheck));

console.log(seperator);

/* Exercise 23 - Nested If Conditions*/
console.log(seperator);
console.log(`Exercise 23 - Nested If Conditions`);
console.log(seperator);

let numberGreaterThanFive = 55;

if(numberGreaterThanFive > 0)
{
    if(numberGreaterThanFive % 5 === 0)
    {
        console.log("Number devisable by 5 and is positive");
    }
    else
    {
        console.log("Number positive and not devisable by 5");
    }
}
else if(numberGreaterThanFive < 0)
{
    if(numberGreaterThanFive % 5 === 0)
    {
        console.log("Number devisable by 5 and is negative"); 
    }
    else
    {
        console.log("Number negative and not devisable by 5");
    }
}

console.log(seperator);

/* Exercise 24 - Check for Element in Array*/
console.log(seperator);
console.log(`Exercise 24 - Check for Element in Array`);
console.log(seperator);

let checkInArray = ['Apple', 'Pear', 'Banana'];

/* Option 1 */
console.log(checkInArray.includes("Apple"));

/* Option 2 */
checkInArray.forEach((fruit,index) => {
    if(fruit === 'Apple')
    {
        console.log("Apple in array");
    }
})

console.log(seperator);

/* Exercise 25 - Basic Error Handling*/
console.log(seperator);
console.log(`Exercise 25 - Basic Error Handling`);
console.log(seperator);

try{
    let x = someUndefinedFunction();
}
catch(error)
{
    console.log(error)
}

console.log(seperator);

/* Exercise 30 - Loop through an Array with forEach*/
console.log(seperator);
console.log(`Exercise 30 - Loop through an Array with forEach`);
console.log(seperator);

let forEachArray = ["Apple","Banana","Pears"];
forEachArray.forEach((item, index)=>{
    console.log(`Index -> ${index} : Value -> ${item}`);
});

console.log(seperator);

/* Exercise 31 - Filter an array from 1-6 and print only the even numbers*/
console.log(seperator);
console.log(`Exercise 31 - Filter an array from 1-6 and print only the even numbers`);
console.log(seperator);

let numArrayToFilter = [1,2,3,4,5,6];

// Note: Returns the elements of an array that meet the condition specified in a callback function.
// This means it will check of n%2===0 then return that value of the array because it met the criteria of the callback function.
let evens = numArrayToFilter.filter(n => n%2===0);

console.log(evens);

console.log(seperator);

/* Exercise 32 - Use .map() to Transform an Array*/
console.log(seperator);
console.log(`Exercise 32 - Use .map() to Transform an Array`);
console.log(seperator);

let toUppercaseArray = ['Apple', 'Pear', 'Bannana'];

let upperCaseArray = toUppercaseArray.map((n) => n.toUpperCase());

console.log(upperCaseArray);

console.log(seperator);

/* Exercise 33 - Find an Element in an Array*/
console.log(seperator);
console.log(`Exercise 33 - Find an Element in an Array`);
console.log(seperator);

let users = [{ id: 1 }, { id: 2 }, { id: 3 }];

let userResultById = users.find(n => n.id === 1);

console.log(userResultById);

console.log(seperator);

/* Exercise 34 - Destructure an Object*/
console.log(seperator);
console.log(`Exercise 34 - Destructure an Object`);
console.log(seperator);

let personData = { name: "John", age: 30 };
let {name, age } = personData;
console.log(`Name: ${name} Age: ${age}`);
console.log(seperator);

/* Exercise 35 - Destructure an Array*/
console.log(seperator);
console.log(`Exercise 35 - Destructure an Array`);
console.log(seperator);

let arr = [10, 20, 30];

let [start,,end] = arr;

console.log(end);

console.log(seperator);

/* Exercise 36 - Use the Spread Operator*/
console.log(seperator);
console.log(`Exercise 36 - Use the Spread Operator`);
console.log(seperator);

let spreadArrayImpl = [1,2,3,4,5];
let spreadArrayNew = [8,4,5,...spreadArrayImpl];
console.log(spreadArrayNew);

let array1ForSpread = [1,2,3,4,5,6];
let array2ForSpread = [7,8,9,10,11,12];

let array3ForSpread = [...array1ForSpread,...array2ForSpread];
console.log(array3ForSpread);
console.log(seperator);

/* Exercise 37 - Merge Two Objects with Spread*/
console.log(seperator);
console.log(`Exercise 37 - Merge Two Objects with Spread`);
console.log(seperator);

let objSpread1 = {id :  1};
let objSpread2 = {id :  2};

let objResultSpread = {...objSpread1, ...objSpread2};

console.log(objResultSpread);

console.log(seperator);

/* Exercise 38 - Template Literals*/
console.log(seperator);
console.log(`Exercise 38 - Template Literals`);
console.log(seperator);

let nameStr = "Sarah";

console.log(`Hello, ${nameStr}`);

console.log(seperator);

/* Exercise 39 - Arrow Function*/
console.log(seperator);
console.log(`Exercise 39 - Arrow Function`);
console.log(seperator);

let add = (a,b) => a + b;

console.log(add(1,2));

console.log(seperator);

/* Exercise 40 - Default Parameters*/
console.log(seperator);
console.log(`Exercise 40 - Default Parameters`);
console.log(seperator);

// Note: Default paramaters always needs to be at the end of the arguments listing.
let defaultParameters = (name="Guest") => {
    console.log(`Hi, ${name}`);
};

defaultParameters();
defaultParameters('User1');

console.log(seperator);

/* Exercise 41 - Rest Parameters*/
console.log(seperator);
console.log(`Exercise 41 - Rest Parameters`);
console.log(seperator);

function restParamaters(...args)
{
    args.forEach(n => console.log(n));
}

restParamaters(1,2,3,4,5);

/* Booklet example with reduce method */
function sum(...nums){
    return nums.reduce((a,b)=> a + b);
}

console.log(seperator);

/* Exercise 42 - Object.keys(), Object.values()*/
console.log(seperator);
console.log(`Exercise 42 - Object.keys(), Object.values()`);
console.log(seperator);

let objsForReference = {id: 1, name: "John"};

console.log(Object.keys(objsForReference));
console.log(Object.values(objsForReference));

console.log(seperator);

/* Exercise 43 - Create an Element and Append*/
console.log(seperator);
console.log(`Exercise 43 - Create an Element and Append`);
console.log(seperator);

console.log(seperator);

/* Exercise 45 - Use setTimeout*/
console.log(seperator);
console.log(`Exercise 45 - Use setTimeout`);
console.log(seperator);

// setTimeout(()=>{
//     console.log("Timeout testing printed after 1second");
// },1000);

console.log(seperator);

/* Exercise 46 - Use setInterval and clearInterval*/
console.log(seperator);
console.log(`Exercise 46 - Use setInterval and clearInterval`);
console.log(seperator);

//let count = 0;

// These two functions setInterval and clearInterval works together as 
// setInterval creates a referencable inverval ID used bu clearInterval 
// to cause a Timeout and stop the setInterval function
// let intervalID = setInterval(()=>{
//     count++;
//     console.log("[IntervalID : "+intervalID + "]" + count);

//     if(count===5)
//         clearInterval(intervalID);
// },1000);

console.log(seperator);

/* Exercise 47 - Fetch API – Basic GET Request*/
console.log(seperator);
console.log(`Exercise 47 - Fetch API – Basic GET Request`);
console.log(seperator);

// Note: This exercise uses Promise that will be explained later. For now just learn the syntax.
console.log(seperatorType2);
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Data fetched successfully:', data);
    })
    .catch(error => {
      console.error('There was a problem fetching the data:', error);
    });
console.log(seperatorType2);
console.log(seperator);

/* Exercise 48 - Async/Await Fetch */
console.log(seperator);
console.log(`Exercise 48 - Async/Await Fetch`);
console.log(seperator);

//Reference: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

async function loadData() {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(`Await Example : \n${JSON.stringify(json, null, 2)}\n`);
    } catch (error) {
      console.error(error.message);
    }
  }

loadData();

console.log(seperator);

/* Exercise 49 - Handle Errors in Fetch*/
console.log(seperator);
console.log(`Exercise 49 - Handle Errors in Fetch`);
console.log(seperator);

async function getUserData(){
    try{
        let response = await fetch("badurl");
        let httpResStatus = await response.ok;
        if(!httpResStatus)
        {
            console.log(`HTTP Status Code != 200 / Returned ${response.status}` );
        }
    }catch(error){
        console.error(error);
    }
}

getUserData();

console.log(seperator);

/* Exercise 51 - Closure Example (Important to understand!!!!) */
console.log(seperator);
console.log(`Exercise 51 - Closure Example`);
console.log(seperator);

function createCounter() {
    let count = 0;
    return function() { /* Function is returned to the variable as s reference and copies the entire environment as the count variable is from its outer scope. Note, there are similarities by appearance to a class and private variables, but they are not the same. */
        return ++count;
    };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

console.log(seperator);

