//Function is like a machine that receives some input, does something with it, and then returns something else from the data that was put in (input in -> Function -> output out)

function calculateAge(birthYear) {            //Parameter birthYear is like a Variable inside a Function
    return 2018 - birthYear;
}
calculateAge(1983);             //Calling/Invoking a Function, and Passing an Argument 1983 to Parameter birthYear

var ageRaf = calculateAge(1983);  //Creating a Variable and storing the call to the Function in this Variable
var lukasAge = calculateAge(1982);
var adrianAge = calculateAge(1985);
console.log(ageRaf, lukasAge, adrianAge);



// function yearsUntilRetirement(currentAge, retirementAge) {
//     currentAge = 35;
//     retirementAge = 65;
//     return retirementAge - currentAge;
// }
// console.log(yearsUntilRetirement());

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years');
    } else {
        console.log(firstName +' RETIRED');
    }

}
yearsUntilRetirement(1983, 'Rafal');
yearsUntilRetirement(1986, 'Adrian');
yearsUntilRetirement(1940, "Bob");



function reverseString() {

    var someStr = ['2','5','8','10','12','15'];

    console.log("ORIGINAL STRING " + someStr);

    var doRev = someStr.reverse();

    console.log('REVERSED STRING ' + doRev);
}

reverseString();

function doReverseString(str) {
    return str.split("").reverse().join("");   //use split("") for Strings, reverse() for Arrays, join("") for Arrays
}
console.log(doReverseString("BRODOWICZ"));


//Function declaration
function whatDoYouDo(job, firstName) {

}

//Function expression assigned to a Variable
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids to Code';

        case 'driver':
            return firstName + ' drives racecar ';

        case 'developer':
            return firstName + ' creates software apps';

        default:
    }
};

console.log(whatDoYouDo('developer', 'Rafal'));

//Expression - JavaScript expects a value
//Statements - perform actions but do not produce any immediate results - ex: Function declaration, if/else statements

//-----------------------------------------------------------------------------------------------------------------------------------------------------

//ARRAYS - Collections of Variables or different data types

//create new Array
var names = ['Rafal', 'Adrian', 'Lukas'];
var years = new Array(1990, 1996, 1998);  //less used way of creating Arrays

console.log(names[0], years[1]);

//mutate Array data
names[1] = 'Diego';
console.log(names);


names[3] = 'Adrian';
console.log(names);


//different Data Types
var raf = ['Rafal', 'Roman', 1983, 'developer', true];

//Methods(functions) that can be applied to Arrays
raf.push('blue');  //adds this element to end of an Array raf
raf.unshift('Mister'); //adds new element to beginning of Array
raf.pop(); //removes element from the end of Array
raf.shift(); //removes 1st element from Array

console.log(raf);  //["Rafal", "Roman", 1983, "developer", true, "blue"]

console.log(raf.indexOf(1983)); //specifies position of element in an array

var isDev = raf.indexOf('developer') === -1 ? 'Raf is NOT a developer' : 'Raf is a developer';
console.log(isDev);



/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/



// REAL SOLUTION

function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);



//MY SOLUTION

// function tipCalculator(tips, paidAmount) {
//     if (paidAmount < 50) {
//         tips = 20/50;
//         return tips;
//
//     }
//     else if (paidAmount === 50) {
//         tips = 15/50;
//         return tips;
//     }
//     else if (paidAmount === 200) {
//         tips = 15/200;
//         return tips;
//     }
//     else
//         tips = 10/200;
//         return tips;
// }
//
// var tips = [20, 15, 10];
// var paidAmount = [124, 48, 268];
//
// console.log(tipCalculator(tips[0], paidAmount[0]));
// console.log(tipCalculator(tips[1], paidAmount[1]));
// console.log(tipCalculator(tips[2], paidAmount[2]));



