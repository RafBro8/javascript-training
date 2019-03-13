//IF / ELSE

var firstName = 'Rafal';
var civilStatus = 'married';

if (civilStatus === 'single') {
    console.log("=============> firstName: ", firstName + ' is married'); // false so this block is not executed
} else {
    console.log("=============> firstName: ", firstName + ' will hopefully get married very soon to great girl!'); // true so this block will be executed
}

var isMarried = true;   // this var is already a Boolean so no need for isMarried === true

if (isMarried ) {
    console.log("=============> firstName: ", firstName + ' is married'); // true, so this block will be executed
} else {
    console.log("=============> firstName: ", firstName + ' will hopefully get married very soon to great girl!');
}


var markMass = 80;
var markHeight = 1.80;

var johnMass = 60;
var johnHeight = 1.80;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
    console.log("=============> x: ", 'Mark\'s BMI is higher than John\'s');
} else {
    console.log("=============> x: ", 'John\'s BMI is higher than Mark\'s')
}

//BOOLEAN LOGIC

var firstName = 'Rafal';
var age = 20;

if (age < 14) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {      //AND (&&) => true of ALL are true, OR (||) true if ONE is true, NOT (!) => inverts true/false value => if true change to false
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
        console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}

//TERNARY OPERATOR

var firstName = 'Rafal';
var age = 21;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
//condition age >= 18, if block is ?, else block is :

var drink = age >= 18 ? 'beer' : 'juice';   //'beer'
console.log(drink);

var firstName = 'Rafal';
var age = 35;

age <= 35 ? console.log(firstName + ' not married yet') : console.log(firstName + 'hopefully married');

//if / else for comparison...

if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

//SWITCH STATEMENT

var job = 'millionaire';

switch (job) {
    case 'developer':
        console.log(firstName + ' creates software apps');
        break;
    case 'actor':
        console.log(firstName + ' racecar driver ');
        break;
    case 'millionaire':
        console.log(firstName + ' does not work, he is rich');
        break;
    default: console.log(firstName + ' has a dream job');
}

// var firstName = 'Rafal';
// var age = 20;
//
// if (age < 14) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {      //AND (&&) => true of ALL are true, OR (||) true if ONE is true, NOT (!) => inverts true/false value => if true change to false
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
// } else {
//     console.log(firstName + ' is a man.');
// }

//Convert if / else to Switch

age = 18;

switch (true) {                          //make Switch work like if / else statement with ranges
    case age < 14:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default: console.log(firstName + ' is a man.');
}

//TRUTHY / FALSY VALUES

// Truthy/Falsy values are evaluated in if / else conditions
// Falsy values in JavaScript: undefined, null, 0, '', NaN
// Truthy values in JavaScript: NOT Falsy values

var height;
height = 0;

if (height || height === 0) {
    console.log("Variable is defined");
} else {
    console.log('Variable has NOT been defined');
}

// EQUALITY OPERATORS

 //value === something => strict comparison
// value == something => type coercion (values don't have to match)

height = 23;

if (height == '23') {
    console.log('The == operator does type coercion!');  // Type Coercion - JavaScript converts the String of '23' and then says it is same as 23 the number
}
//************************************************
// CODING CHALLENGE 2

// John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
//
// 1. Calculate the average score for each team
// 2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
//
// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points.
//     Like before, log the average winner to the console. HINT: you will need the && operator to take the decision.
//     If you can't solve this one, just watch the solution, it's no problem :)

// 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;

console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}


if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}