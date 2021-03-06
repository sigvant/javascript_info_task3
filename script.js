// let name = "Ilya";

// alert( `hello ${1}` ); // ?

// alert( `hello ${"name"}` ); // ?

// alert( `hello ${name}` ); // ?

// let result = prompt("What is your age?", ["Your age should be here"])

// alert(`You are ${result} years old!`)

// let isBoss = confirm("you the boss?")

// alert(isBoss)

// let yourName = prompt("What is your name?", "Lowercase name only, please")

// alert(yourName)

// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++; // ?

// console.log(a,b,c,d)

// let a = 2;

// let x = 1 + (a *= 2);

// console.log(a,x)

//minhas respostas:

// "" + 1 + 0 // 1
// "" - 1 + 0 // 0
// true + false // true
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // '9px'
// "$" + 4 + 5 // $45
// "4" - 2 // 2
// "4px" - 2 // -1
// "  -9  " + 5 // -4
// "  -9  " - 5 // -13
// null + 1 // 1
// undefined + 1 // undefined
// " \t \n" - 2 // -1

// //respostas corretas:

// "" + 1 + 0 // 10
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // '9px'
// "$" + 4 + 5 // $45
// "4" - 2 // 2
// "4px" - 2 // NaN
// "  -9  " + 5 // " -9 5"
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2 // -2

// #########################################################################

// "" + 1 + 0 = "10" // (1) Adding 1 to "" converts 1 to a string, then zero is converted again later.
// "" - 1 + 0 = -1 // (2) Subtraction convers "" to number (which is zero)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5" // (3) Same as rule 1.
// "  -9  " - 5 = -14 // (4) subtraction convers " -9 " to a number (-9)
// null + 1 = 1 // (5) null is zero after numeric conversion
// undefined + 1 = NaN // (6) undefined is NaN after numeric conversion
// " \t \n" - 2 = -2 // (7) escape characters or space characters are considered space

// 1.The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
// 2.The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
// 3.The addition with a string appends the number 5 to the string.
// 4.The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
// 5.null becomes 0 after the numeric conversion.
// 6.undefined becomes NaN after the numeric conversion.
// 7.Space characters, are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.

let a = prompt("First Number?", 1);
let b = prompt("Second Number?", 2);

alert(+a + +b); //12 (should be 3)

//because it is a string when prompted. using + before converts to number as short hand rule
//can also be done with Number(a) + Number(b)
