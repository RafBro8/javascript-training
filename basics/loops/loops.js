//FOR LOOP

// var i = 0 is the Counter, i < 10 is the Condition, i++ is the Iteration
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// i = 0, 0 < 10 true so log i to console, i++ iterate
// i = 1, 1 < 10 true so log i to console and iterate to next i++
//...
// i = 9, 9 < 10 true so log i to console and i++ iterate
// i = 10, 10 < 10 FALSE so exit the loop!

for (var y = 1; y<= 20; y+=2) {
    console.log(y);
}

var johnn = ['John', 'Wayne', 1905, 'Cowboy', true];
// console.log(john[0]);
// console.log(john[1]);
// console.log(john[2]);
// console.log(john[3]);

for (var i = 0; i < johnn.length; i++) {
    console.log(johnn[i]); // will display all values in Array from 0 to 4, from 'John' to true
                          // counter variable i needed to list all values in order from 0 to 4
}

//While Loop only has Condition
var i = 0;
while(i < johnn.length) {
    console.log(johnn[i]);
    i++
}


// Continue and Break statements

var clint = ['Clint', 'Eastwood', 1940, 'Cowboy', true];
for (var e = 0; e < clint.length; e++) {
    if (typeof clint[e] !== 'string') continue;       // == is Strict Different Operator, !== is NOT
    console.log(clint[e]);
}

for (var e = 0; e < clint.length; e++) {
    if (typeof clint[e] !== 'string') break;
    console.log(clint[e]);
}

//Looping backwards
var lee = ['Lee', 'Van Cleef', 1940, 'Cowboy', true];
for (var k = lee.length - 1; k >= 0; k--) {
    console.log(lee[k]);
}


/*****************************
 * CODING CHALLENGE 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50,
15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips,
   and 2) an array containing final paid amounts (bill + tip).
   HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
*/

var john = {
    fullName: 'John Weynz',
    bills: [124, 48, 268, 180, 42],
    tipCalculator: function () {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++) {

            var percentage;
            var bill = this.bills[i];  //create variable instead of passing same this.bills[i] value in multiple places in if/else

            if (bill < 50) {
                percentage = 0.2;
            }
            else if (bill >= 50 && bill < 200) {        //bills at position [i] in the array
                percentage = 0.15;
            } else {
                percentage = 0.10
            }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
};

// john.tipCalculator();
// console.log(john);
// Object
// bills:(5) [124, 48, 268, 180, 42]
// finalValues:(5) [142.6, 57.6, 294.8, 207, 50.4]
// fullName:"John Weynz"
// tipCalculator:ƒ ()
// tips:(5) [18.599999999999998, 9.600000000000001, 26.8, 27, 8.4]
// __proto__:Object


/*
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100,
10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips.
    HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0).
After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/

var marky = {
    fullName: 'Marky Mark',
    bills: [77, 375, 110, 45],
    tipCalculator: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i <= this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = 0.20;
            } else if (bill >= 100 && bill < 300) {
                percentage = 0.10;
            } else {
                percentage = 0.25;
            }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
};

// marky.tipCalculator();
// console.log(marky);
// Object
// {fullName: "Marky Mark", bills: Array(4), tipCalculator: ƒ, tips: Array(5), finalValues: Array(5)}
// bills:(4) [77, 375, 110, 45]
// finalValues:(5) [92.4, 468.75, 121, 54, NaN]
// fullName:"Marky Mark"
// tipCalculator:ƒ ()
// tips:(5) [15.4, 93.75, 11, 9, NaN]
// __proto__:Object


function calcAverage(tips) {    //pass in tips[]
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];

        // ex: [2,6,4] -> 0/2/8/12
    }
    return sum / tips.length;
}

john.calcAverage();
marky.calcAverage();
console.log(john, marky);








