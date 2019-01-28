/***************************************************
 * Variables and Data types
 */
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 24;
var fullAge = true;

console.log(fullAge);

var job;
console.log(job);
job = 'teacher';
console.log(job);

var $3years =3;
var johnMark = 'John and Mark';
var if = 12;

/***************************************************
 * Variables and Data types
 */
/*
var firstName = 'Jesus';
var age = 22;

console.log(firstName + ', ' + age);

var job, isMarried;
job = 'Developer';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

//VAriable mutation
age = 'twenty two';
job = 'developer';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(lastName);

/***************************************************
 * Basic Operators
 */
/*
var year, jesusYear, markYear;
now = 2018;
ageJesus = 22;
ageMark = 24;

jesusYear = now - ageJesus;
markYear = now - ageMark;

console.log(jesusYear);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);
console.log(now - 2);

//Logical operators
var markOlder = ageMark > ageJesus;
console.log(markOlder);

//typeof operators

console.log (typeof markOlder);
console.log(typeof ageJesus);
console.log(typeof 'Mark is older than Jesus');
var x;
console.log(typeof x);


/***************************************************
* Operator precedence
 */
/*
var now = 2019;
var yearJesus = 1996;
var fullAge = 18;

var isFullAge = now - yearJesus >= fullAge;
console.log(isFullAge);

//Grouping
var ageJesus = now - yearJesus;
var ageMark = 40;
var average = (ageJesus + ageMark) / 2;
console.log(average);

//Multiple assignments

var x, y;

x = y = (3 + 5) * 4 - 6; //8 * 4>> 32 - 6>> 26
console.log(x, y);

//More operators
x *= 2;

console.log(x);

x += 10;
console.log(x);
x--;
console.log(x);

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
*/
/*
var johnMass, markMass, johnHeight, markHeight;

johnMass = 65;
johnHeight = 1.7;
johnBmi = johnMass / ( johnHeight * johnHeight);
console.log(johnBmi);

markMass = 83;
markHeight = 1.85;
markBmi = markMass / ( markHeight * markHeight);
console.log(markBmi);

isMarkheavier = markBmi > johnBmi;

console.log("Is Mark's BMI higher than John's? " + isMarkheavier);

/*****************************
* if/else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married :(');
}else{
    console.log(firstName + ' is not married x)')
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married :(');
}else{
    console.log(firstName + ' is not married x)')
}

var johnMass, markMass, johnHeight, markHeight;

johnMass = 65;
johnHeight = 1.7;
johnBmi = johnMass / ( johnHeight * johnHeight);
console.log(johnBmi);

markMass = 83;
markHeight = 1.85;
markBmi = markMass / ( markHeight * markHeight);
console.log(markBmi);

//isMarkheavier = markBmi > johnBmi;
//console.log("Is Mark's BMI higher than John's? " + isMarkheavier);

if(markBmi > johnBmi) {
    console.log("Mark's Bmi is higher than John's")
}else{ console.log("John's Bmi is higher than Mark's")}

/*****************************
* Boolean Logic
*/
/*
var firstName = 'Jesus';
var age = 22;

if (age < 13) {
    console.log(firstName + " is a kid");
}else if//Between 13 and 20// >=13 // <20
    (age >= 13 && age < 20) {
        console.log(firstName + " is a teen");
    }else if//Between 13 and 20// >=13 // <20
    (age >= 20 && age < 30) {
        console.log(firstName + " is a young man");
    }else{
    console.log(firstName + " is a man");
}

/*****************************
* The Ternary operator and Switch statements
*/
/*
var firstName = 'Jesus';
var age = 22;

//Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer X)') : console.log(firstName + ' drinks juice :(');

var drink = age >= 18? "beer" : "juice";
console.log(drink);

//Switch statement

firstName = 'juan'
var job = 'Developer';
switch(job) {
    case 'Developer' :
        console.log(firstName + ' creates web applications.');
        break;
    case 'Driver' :
        console.log(firstName + ' drives an Uber.');
        break;
    case 'Teacher' :
        console.log(firstName + ' teaches kids how to code.');
        break;
    default:
        console.log(firstName + ' works in construction.');
}

switch (true) {
    case age < 13 :
        console.log(firstName + " is a kid");
    break;
    case age >= 13 && age < 20 :
        console.log(firstName + " is a teen");
    break;
    case age >= 20 && age < 30 :
        console.log(firstName + " is a young man");
    break;
    default :
        console.log(firstName + " is a man");
}

/*
var firstName = 'Jesus';
var age = 22;

if (age < 13) {
    console.log(firstName + " is a kid");
}else if//Between 13 and 20// >=13 // <20
    (age >= 13 && age < 20) {
        console.log(firstName + " is a teen");
    }else if//Between 13 and 20// >=13 // <20
    (age >= 20 && age < 30) {
        console.log(firstName + " is a young man");
    }else{
    console.log(firstName + " is a man");
}
*/

/*****************************
* Trhuthy and Falsy values and equality operators
*/

// fasly values: undefined, null, 0, '', NaN
//truthy values: Not Falsy values
/*
var height;

height = 23;

if (height || height === 0) {
    console.log('variable is defined');
} else{
    console.log('variable has not been defined');
}

//equiality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
}

/*****************************
* Truthy and Falsy values and equality operators
*/

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/*
var john = 'John';
var mike = 'Mike';
var mary = 'Mary';

var johnAverage = ((120 + 120 + 110) / 3);
console.log (john + ' ' + johnAverage);
var mikeAverage = ((105 + 121 + 120) / 3);
console.log (mike + ' ' + mikeAverage);
var maryAverage = ((100 + 134 + 105) / 3);
console.log (mary + ' ' + maryAverage);

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    console.log(john + ' wins');
}else if(mikeAverage > johnAverage && mikeAverage > maryAverage) {
    console.log(mike + ' wins');
}else if(maryAverage > johnAverage && maryAverage > mikeAverage){
    console.log(mary + ' wins');
}
else {
    console.log('Its a tie');
}

/*****************************
* Functions
*/
/*
function calculateAge (birthYear) {
    return 2018 - birthYear;
}

var ageJesus = calculateAge(1996);
var ageJohn = calculateAge(1946);
var ageMike = calculateAge(1980);
console.log(ageJesus, ageJohn, ageMike);

/Function Declaration
function yearUntilRetirement (year, firstName) {
    var age = calculateAge(year);
    var retirement = 35 - age;
    if( retirement > 0){
    console.log(firstName + ' retires in ' + retirement + ' years');
    }else{
        console.log(firstName + ' is already retired')
    }
}

yearUntilRetirement(1996, 'Jesus');
yearUntilRetirement(1993, 'Mike');
yearUntilRetirement(1980, 'Jane');
*/
/*****************************
* Functions Statements and Expressions
*/

//Function Expression
/*
var whatDoYoudo  = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives people in uber';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
};

console.log(whatDoYoudo('singer', 'John'));
*/
/*****************************
* Functions Statements and Expressions
*/
/*
//initialize array 
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1987, 1995);

//mutate array data
console.log(names.length);
names[1] = 'Juan';
names[names.length] = 'Maria';
console.log(names);

//different daat type

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');

john.pop();
john.pop();
john.shift();

console.log(john);

console.log(john.indexOf(12));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

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

GOOD LUCK 😀
*/

var tipCalculator;
var restaurantBills;
var finalBills;


restaurantBills = [124, 48, 268];

tipCalculator = function(billAmount) {
    if (billAmount < 50) {
        percent = 0.2;
    } else if ( billAmount >= 50 && billAmount <= 200) {
        percent = .15;
    } else { percent = .1};

    return percent * billAmount 
};

var tips = [tipCalculator(restaurantBills[0]),
            tipCalculator(restaurantBills[1]),
            tipCalculator(restaurantBills[2])];

finalBills = [ restaurantBills[0] + tips[0],
            restaurantBills[1] + tips[1],
            restaurantBills[2] + tips[2]
];

console.table(finalBills);



