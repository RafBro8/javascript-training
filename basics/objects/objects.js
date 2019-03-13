// Objects and Properties

// in Objects we define (Key, Value) pair
// {} - object literal

//creating object1
var rafal = {                //rafal is the Object
    firstName: 'Rafal',      //firstName is the KEY, 'Raf' is VALUE
    lastName: 'Roman',
    birthYear: 1983,
    friends: ['Lukas', 'Adrian', 'Diego'],
    job: 'developer',
    isMarried: false
};
console.log(rafal);
console.log(rafal.job);   //access object data using 'dot notation'
console.log(rafal['lastName']);  //access using value

var b = 'birthYear';
console.log(rafal[b]);       //access using Variable name

//mutate object data
rafal.isMarried = true;
rafal.job = 'millionaire';
console.log(rafal);


//creating object2
var item = new Object();
item.number = 1;
item.quantity = 20;
item[name] = 'computer';
item.year = 2018;

console.log(item);

//---------------------------------------------------------------------------------------------------------

//Objects and Methods


var rafalR = {                //rafal is the Object
    firstName: 'Rafal',      //firstName is the KEY, 'Raf' is VALUE
    lastName: 'Roman',
    birthYear: 1983,
    friends: ['Lukas', 'Adrian', 'Diego'],
    job: 'developer',
    isMarried: false,
    calcAge: function () {
        return 2018 - this.birthYear;   //this.birthYear points to rafalR.birthYear

        //not using 'this'
        // calcAge: function (birthYear) {
        //     return 2018 - birthYear;
    }
};

// console.log(rafalR.calcAge(1983));  //passing birthYear
console.log(rafalR.calcAge());  // this.birthYear
rafalR.age = rafalR.calcAge();


/*****************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/

//ORIGINAL SOLUTION

var john = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}


//MY SOLUTION

var mark = {
    fullName: 'Mark Whallberg',
    mass: 80,
    height: 1.68,
    markBMI: function () {
        return markMass / (markHeight * markHeight);
    }
};

var john = {
    fullName: 'John Weynz',
    mass: 100,
    height: 2.05,
    johnBMI: function () {
        return johnMass / (johnHeight * johnHeight);
    }
};

    if (mark.markBMI < john.johnBMI) {
        console.log(john.fullName + ' has the higher BMI of ' + john.johnBMI);
    } else if (john.johnBMI < mark.markBMI) {
        console.log(mark.fullName + ' has a higher BMI of ' + mark.markBMI);
    } else {
        console.log('BMI\'s of ' + mark.fullName + ' and ' + john.fullName + ' are Equal!');
    }





