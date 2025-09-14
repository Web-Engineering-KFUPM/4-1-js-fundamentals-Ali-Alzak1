// ==========================
// TODO-2: Connect JS file
// ==========================
// Link the js file with index.html file.
// make a script tag inside the head tag of the index.html file.
//<script src="ADD_JS_FILE_PATH_HERE" defer></script>

console.log("%cJS Lab Connected — Start completing the TODOs!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-3: SYNTAX & VARIABLES
// ==========================

// Task 3.1 — declare & reassign
// Create let course = "CIS101"; display it usinng console.log(course), reassign to "CIS102"; display it again.
// write code here
let course = "CIS101"; 
console.log(course);
course = "CIS102";
console.log(course);

// Task 3.2 — const safety
// Create const SCHOOL = "MyCollege"; then TRY to reassign it and observe the Console error. Add a comment explaining    why  reassignment fails.
// NOTE: For now, keep the reassignment line commented so the file runs without errors.
// const SCHOOL = "MyCollege";
// SCHOOL = "OtherCollege"; // <-- Uncomment to see the error, then re-comment after testing
const SCHOOL = "MyCollege";
// In the browser i clicked inspect to see my code and it showed it with the line for the error.

// SCHOOL = "OtherCollege"; 





// ==========================
// TODO-4 ARITHMETIC & TYPES
// ==========================

// Task 4.1 — arithmetic basics
// Given let x = 8, y = 3; log x+y, x-y, x*y, x/y, x%y.
// write code here
let x = 8, y = 3;
 console.log(x+y); // output = 11
 console.log(x-y) // output = 5
 console.log(x*y); // output = 24
 console.log(x/y); // output = 2.6666666666666665
 console.log(x%y); // output = 2

// Task 4.2 — number vs string
// Display results of "2" + 3, 2 + "3", and 2 + 3. Add a short comment: why do the first two concatenate?
// write code here

console.log("2" + 3);
console.log(2 + "3");
console.log(2 + 3);
// although we switched them, the first two concatenate because one of them is a string and the other is a number so it converts the number to a string and then concatenates them.


// Read chapter 4 in zyBooks: Compound Assignment Operators



// ==========================
// TODO-5: CONDITIONALS (CORE)
// ==========================

// Task 5.1 — else-if ladder
// Write a program that checks a user's age (take age input from user).
//       Use if–else if–else statements to categorize and log:
//         - "Child" if age < 13
//         - "Young" if age is between 13 and 35
//         - "Aged" if age > 35
// write code here
let age = prompt("Enter you age please" );
if (age < 13) {
    console.log("Child");
} else if (age >= 13 && age <= 35) {
    console.log("Young");
} else if (age > 35) {
    console.log("Aged")
}



// Task 5.2 — Switch statement
// Create a variable let day = "Mon".
//       Use a switch statement to check the value of day.
//         - If it is "Mon", "Tue", "Wed", "Thu", or "Fri", log "weekday".
//         - If it is "Sat" or "Sun", log "weekend".
//         - For any other value, log "unknown".
// write code here

let day = "Mon";
switch (day) {
    case "Mon":
    case "Tue": 
    case "Wed":
    case "Thu":
    case "Fri":
        console.log("weekday");
        break;
    case "Sat":
    case "Sun":
        console.log("weekend");
        break;
    default:
        console.log("unknown");
        break;
}

// Read Chapter 4 in zyBooks: Conditional (ternary) operator

// ===============
// TODO-6: LOOPS
// ===============

// Task 6.1 — for loop sum
// TODO: Sum integers 1..10 with a for loop; display the result of total sum.
// write code here
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 6.2 — while loop
// let t = 3; while(t > 0), decrement the value t variable in each iteration and display the result.
// write code here
let t = 3;
while (t > 0) {
    console.log(t);
    t--;
    if (t === 0) {
        console.log("t is equal to 0");
    }

}

// Read Chapter 4 in zyBooks: Do-While Loop
// write code here


// =============================
// TODO-7: FUNCTIONS (DECL, RETURN, ARROW)
// =============================

// Task 7.1 — pure function + return
// Make a function add(a,b){ return a+b; } display the result of add(2,5).
// write code here
function add(a, b) {
    return a + b;
    
}

// Task 7.2 — Arrow functions
// Make an arrow function; const cube = n => n*n*n; cube(3)
// write code here


// =================================
// TODO-8: SCOPE & GLOBAL OBJECT (ESSENTIALS)
// =================================

// Task 8.1 — var vs let scope
// Declare var a = 1; let b = 2 inside a block { },  then try displaying both outside the block; observe differences.
// write code here


// ==================
// TODO-9: ARRAYS (CORE)
// ==================

// Task 9.1 — create & mutate
// TODO: let nums = [3,1,4]; then push(1), unshift(9), pop(); log final array and length.
// write code here


// End of manual — great job! Keep this file open and work task by task.
