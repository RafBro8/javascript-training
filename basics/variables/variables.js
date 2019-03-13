var firstName = "Rafal";
var lastName = "Roman";
var age = 35;
var single = true;
var noMo; //undefined
noMo = 'Mo';
 console.log(firstName, lastName, age, single, noMo);

/*
JS Has 5 Primitive Data Types (Non-Object Data Types):
Number - decimals, integers
String
Boolean
Undefined
Null
 */

//Type Coercion - JS automatically converts types to other types as needed
var job, isGood;
job = "Dev";
isGood = true;
 console.log(job, isGood);


//Variable Mutation - change variable values to different values
age = "thirty five";
job = 'manager';
alert(age + '' + '' + job);
var lastName = prompt('last name?');
 console.log(firstName + ' ' + lastName);

/* *********************************
CODING CHALLENGE 1

Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
 */

var markMass = 80;
var markHeight = 1.80;

var johnMass = 60;
var johnHeight = 1.80;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

var isMarkBMIHigher = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher than John\'s? BMI is' + ' ' + isMarkBMIHigher);
console.log(markBMI);
console.log(johnBMI);
