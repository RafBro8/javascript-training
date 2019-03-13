
var rafAge = 2018 - 35; //once you create a variable with 'var' next time you use it, don't need to use 'var' anymore
var year = 2018;
rafAge = year - 35;
var lukeAge = year - 36;
var compAges = rafAge > lukeAge;
console.log(rafAge);
console.log(compAges);

//typeof operator - specifies type
console.log(typeof rafAge); //number type
console.log(typeof compAges); //boolean type
console.log(typeof "type of this is?"); //String type
var x;
console.log(typeof x); //undefined type


var now = 2018;
var yearRaf = 1983;
var fullAge = 21;

var isFullAge = now - yearRaf >= fullAge;   //"-" is executed first before ">=" and then "=" is executed last
console.log(isFullAge);

var ageRaf = now - yearRaf;
var ageLukas = 36;
var average = (ageRaf + ageLukas) / 2;    //Grouping "( )" takes precedence over all other Operators
console.log(average);

var x, y;

// x = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
x = y = (3 + 5) * 4 - 6; // y is now 26
console.log(x, y); // 26, 26

//Most Operators work Left to Right
//Assignment Operator works Right to Left ---> Left Value = Right Value,  so x = y = 26 goes 26 to y, y to x


//More Operators
x = x * 2; // x *= 2; shorter version
x = x + 10; // x += 10;
x += 1;  // can use x++ if only adding 1