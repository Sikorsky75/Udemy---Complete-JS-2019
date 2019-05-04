/*
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
job = 'Teacher';
console.log(job);
*/

/* 
Variables mutations and type coercion\
*/

/*
var firstName = 'John';
var age = 28;

// Type coercion

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// Variable mutation

age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name');
console.log(firstName + '  ' + lastName );
*/

/*************************************
 * Basic Operators
 */

/*

 var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;


// Math operators

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//logical operators

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older tahn John');
var x;
console.log(typeof x);


*/

//  Operator precendence

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);


//Multiple assigment

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

//More operators

x *= 2;
console.log(x);
x += 10;
console.log(x);
x ++;
console.log(x);

*/

/* Coding challenge 1

var johnMass, johnHeight, markMass, markHeight, johnBmi, markBmi;
johnMass = 90;
johnHeight = 1.80;
markMass = 75;
markHeight = 1.76;

johnBmi = johnMass / (johnHeight ^= 2);
markBmi = markMass / (markHeight ^= 2);

console.log('John BMI = ' + johnBmi);
console.log('Mark BMI = ' + markBmi); 

var compareBmi = markBmi > johnBmi;

console.log('Is Mark\'s BMI higher than John\'s? The answer is: ' + compareBmi);

*/

/* 
* If / else statement


var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else{
    console.log(firstName + ' will hopefully marry son :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else{
    console.log(firstName + ' will hopefully marry son :)');
}

var johnMass, johnHeight, markMass, markHeight, johnBmi, markBmi;
johnMass = 90;
johnHeight = 1.80;
markMass = 105;
markHeight = 1.76;

johnBmi = johnMass / (johnHeight ^= 2);
markBmi = markMass / (markHeight ^= 2);

console.log('John BMI = ' + johnBmi);
console.log('Mark BMI = ' + markBmi); 

if (markBmi > johnBmi) {
    console.log('Mark\' BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
    }



// var compareBmi = markBmi > johnBmi;
// console.log('Is Mark\'s BMI higher than John\'s? The answer is: ' + compareBmi);

*/

/***************************
 * Bolean logic
 *

 var firstName = 'John';
 var age = 19;
 if (age < 16) {
     console.log(firstName + ' is a boy.');
 } else if (age >= 16 && age <= 18) { 
    console.log(firstName + ' is a teenager.'); 
 } else {
    console.log(firstName + ' is a man.');
 }

 */


 /***************************
 *Ternaty operator and Switch statement
 

var firstName = 'John';
var age = 17;

// Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch statement
var job = 'designer';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives uber in Lisbon.');
        break; 
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');

}

switch (true) {
    case age < 16:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 16 && age <= 18:
        console.log(firstName + ' is a teenager.'); 
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/


/*****************************
 * Truthy and Falsy values & equality operators
 

 var height;

 height = 23;

 if (height || height === 0) {
    console.log('Variable is definied');
 } else {
     console.log('Variable is not definied.');
 }

// Equality operators

if (height == '23') {
    console.log('The == operator does type correction');
}

*/

/***********
 * Coding challenge 2
 

var johnsTeamAverage = (188 + 120 + 103) / 3; 
var mikesTeamAverage = (119 + 94 + 123) / 3;
var marysTeamAverage = (97 + 134 + 105) /3;

console.log('John\'s team scored ' + johnsTeamAverage);
console.log('Mike\'s team scored ' + mikesTeamAverage);
console.log('Mary\'s team scored ' + marysTeamAverage);




if (johnsTeamAverage > mikesTeamAverage && johnsTeamAverage > marysTeamAverage ) {
    console.log('The winner is John\'s team with score ' + johnsTeamAverage );
    } else if (mikesTeamAverage > johnsTeamAverage && mikesTeamAverage > marysTeamAverage ) {
        console.log('The winner is Mark\'s team with score ' + mikesTeamAverage );
    } else if (marysTeamAverage > johnsTeamAverage && marysTeamAverage > mikesTeamAverage ) {
        console.log('The winner is Mary\'s team with score ' + marysTeamAverage );
    } else { console.log('There is a draw.');

}

*/


/******************
 * Functions
 

 function calculateAge(birthYear) {
     return 2018 - birthYear;
 }

 var ageJohn = calculateAge(1998);
 var ageMike = calculateAge(1948);
 var ageJane = calculateAge(1969);
 console.log(ageJohn, ageMike, ageJane);


 function yearsUntil(year, firstName) {
     var age = calculateAge(year);
     var retirement = 65 - age;

     if (retirement > 0) {
     console.log(firstName + ' retires in ' + retirement + ' years');

     } else{
         console.log(firstName + ' is already retired.');
     }
 }

 yearsUntil(1990, 'John');
 yearsUntil(1948, 'Mike');
 yearsUntil(1969, 'Jane');


 */


 /***********
  * Function statement and expressions
  

   var whatDoYouDo = function(job, firstName) {
       switch(job) {
           case 'teacher':
           return firstName +' teaches kids how to code';

           case 'driver':
           return firstName + ' drives a cab in Lisbon';

           case 'designer':
           return firstName + ' designs beautiful websites';

           default: 
           return firstName + ' does something else';
       }
   }

   console.log(whatDoYouDo('teacher', 'John'));
   console.log(whatDoYouDo('driver', 'Jane'));
   console.log(whatDoYouDo('retired', 'Mark'));

   */


   /***************
    * Arrays
    

// Initialize Array

    var names = ['John', 'Mark', 'Jane'];
    var years = new Array(1998, 1968, 1948);

    console.log(names[2]);
    console.log(names.length);

// Mutated array
    names[1] = 'Ben';
    names[names.length] = 'Mary';
    console.log(names);

// Different data

var john = ['John', 'Smith', 1998, 'designer', false];

john.push('Blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is designer';
console.log(isDesigner);

*/

/***********
 * Coding challenge 3






var bill1 = 124;
var bill2 = 48;
var bill3 = 268;


var billArray = [bill1, bill2, bill3];



function tipCalc(billValue){


     
        if (billValue < 50) {
            var finalAmount = ( billValue * 0.2);
         }

        else if (billValue >= 50 && billValue <= 200) {
            var finalAmount = (billValue * 0.15);
         }
         
        else if (billValue > 200) {
            var finalAmount = (billValue * 0.10);
           }
           return finalAmount + billValue;
}



var tipTable = [(tipCalc(bill1)), (tipCalc(bill2)), (tipCalc(bill3))];


console.log(tipTable);
console.log (billArray);

*/


/*******
 * Objects and properties
 

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily' ],
    job: 'teacher',
    isMarried: false

}

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear' ;
console.log(john[x]);
john.job = 'designer';
john['isMarried'] = true

console.log(john);

*/


/***********
 * Object and methods
 

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily' ],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2019 - this.birthYear;
    }
}
john.calcAge();
console.log(john);

*/


/*****
 * Coding chalenge 4
 * 
 

var mark = {
    name: 'Marky Mark',
    mass: 75,
    height: 1.70,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
    }
}


var john = {
    name: 'John Smith',
    mass: 90,
    height: 1.80,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}





if (mark.calcBMI() < john.calcBMI()) {
    console.log( mark.name + ' has a BMI = ' + mark.BMI + ' and ' + john.name + ' has a BMI = ' + john.BMI + '.' + '\n' +
    'John\'s BMI is greater than Mark\'s BMI' );
} else if (mark.BMI > john.BMI) {
    console.log( mark.name + ' has a BMI = ' + mark.BMI + ' and ' + john.name + ' has a BMI = ' + john.BMI + '.' + '\n' +
    'Mark\'s BMI is greater than John\'s BMI' );

} else {
    console.log('They have the same BMI');

}

*/


/*************
 * Loop and iteration
 

 for (var i = 0; i <= 20; i += 2) {
     console.log(i);
 } 


 var john = ['John', 'Smith', 1990, 'designer', false, 'Kajak'];

 for (var i = 0; i < john.length; i++ ) {
     console.log(john[i]);
 }


 var i = 0;
 while(i < john.length) {
     console.log(john[i]);
     i++;
 }




 var john = ['John', 'Smith', 1990, 'designer', false, 'Kajak'];

for (var i = 0; i < john.length; i++ ) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++ ) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}



var john = ['John', 'Smith', 1990, 'designer', false, 'Kajak'];

for (var i = john.length - 1; i >= 0; i-- ) {
        console.log(john[i]);
}

*/


/*************
 * Coding challenge 5
 * 
 


//var tipArray = [];
//var finalArray = [];


var john = {
    name: 'John',
    bills: [124, 48, 268, 180, 42],
    calcTip: function() {
        this.tips = [];
        this.final = [];

        for (var i = 0; i < this.bills.length; i++ ) {
            
            var percentage;
            var bill = this.bills[i]

            if (bill < 50) {
                percentage =  0.2;
             }
    
            else if (bill >= 50 && bill <= 200) {
                percentage =  0.15;
             }
             
            else if (bill > 200) {
                percentage =  0.10;
               }
            
          this.tips[i] = bill * percentage;
          this.final[i] = bill + bill * percentage;
        }
       
    }
}





var mark = {
    name: 'Mark',
    bills: [77, 375, 110, 45],
    calcTip: function() {
        this.tips = [];
        this.final = [];

        for (var i = 0; i < this.bills.length; i++ ) {
            
            var percentage;
            var bill = this.bills[i]

            if (bill < 100) {
                percentage =  0.2;
             }
    
            else if (bill >= 100 && bill <= 300) {
                percentage =  0.1;
             }
             
            else if (bill > 300) {
                percentage =  0.25;
               }
            
          this.tips[i] = bill * percentage;
          this.final[i] = bill + bill * percentage;
        }
       
        
    }
}

function calcAverage(tips) {

    var sum = 0;

    for (var i = 0; i < tips.length; i++ ) {
       sum = sum + tips[i];
    }
    return sum / tips.length;
}




john.calcTip();
mark.calcTip();
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(mark, john);



if (john.average > mark.average) {
    console.log(john.name + '\'s pays higher tips with average of $' + john.average);
    
} else if (mark.average > john.average) {
    console.log(mark.name + '\'s pays higher tips with average of $' + mark.average);

    }



*/