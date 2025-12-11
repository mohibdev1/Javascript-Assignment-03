// Chp 9 


var city = prompt("Chp 9-11 : Q1  Enter your city");
if (city === "Karachi") {
    alert("Welcome to the city of lights");
} else {
    alert("Bye");
}

// Q2
var gender = prompt(" Q2:  Enter your gender");
if (gender === "Male") {
    alert("Hello Sir");
} else if (gender === "Female") {
    alert("Hello Ma'am");
} else {
    alert("Invalid gender");
}

// Q3 - Traffic signal
var signalColor = prompt(" Q3:  Enter signal color");

if (signalColor === "Red") {
    alert("Must Stop");
} else if (signalColor === "Yellow") {
    alert("Ready to move");
} else if (signalColor === "Green") {
    alert("Move now");
} else {
    alert("Invalid signal color");
}




// Q4
var fuel = +prompt ("Q4:  Enter remaining fuel in litres:");
 if (fuel < 0.25) {
    alert ("Please refill the fuel in your car");
 }
else {
    alert ("Fuel level is OK");
}

// Q5
// a
 var a = 4;
if (++a === 5){
alert(" Q5:a  given condition for variable a is true");
}
// b:
var b = 82;
if (b++ === 83){
alert("Q5:b given condition for variable b is true");
}
// c:
var c = 12;
if (c++ === 13) {
alert(" Q5:c condition 1 is true");
}
if (c === 13){
alert(" Q5:c condition 2 is true");
}
if (++c < 14){
alert("Q5:c condition 3 is true");
}
if(c === 14){
alert("Q5:c condition 4 is true");
}

// d:
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("Q5:d  The cost equals");
}

// e:
 if (true){
alert(" Q5:e  True");
}
if (false){
alert("False");
}

// f:
if("car" < "cat"){
alert("Q5:f car is smaller than cat");
}


// Q6
document.write("<h2>Chp#9 to 11 Q6</h2>");

var sub1 = +prompt("Q6:  Enter marks of Subject 1:");
var sub2 = +prompt("Q6:  Enter marks of Subject 2:");
var sub3 = +prompt("Q6:  Enter marks of Subject 3:");

var totalMarks = +prompt("Q6:  Enter Total Marks:");

var obtained = sub1 + sub2 + sub3;
var percentage =  (obtained / totalMarks) *100;

var grade;
var remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}
else {
    grade = "Fail";
    remarks = "Sorry";
}
document.write("<h1>Marks Sheet</h1>");
document.write("<br>Total marks : " + totalMarks);
document.write("<br>Marks obtained : " + obtained);
document.write("<br>Percentage : " + percentage.toFixed(0) + "%");
document.write("<br>Grade : " + grade);
document.write("<br>Remarks : " + remarks);

// Q7

var secretnumber =7;
var guess = parseInt(prompt("Q7:  Guess the number:"));
if(guess===secretnumber){
    alert ("Bingo! Correct answer");
} else if(guess + 1 ===secretnumber){
    alert("Close enough to the correct answer");
} else {
    alert("Wrong guess!");
}
 
//   Q8
var number = +prompt("Q8:  Enter a number");
if(number % 3 ===0){
    alert("The number is divisible by 3");
} else {
    alert("the number is not divisible by 3");
}

// Q9
var num = +prompt("Q9:  Enter a number");

if (num % 2 === 0) {
    alert("The number is EVEN");
} else {
    alert("The number is ODD");
}

// Q10
var temperature = +prompt("Q10:  Enter a temperature");
if(temperature > 40) {
    alert("It is too hot outside");
} else if(temperature>30) {
    alert("The Weather today is Normal");
} else if (temperature>20) {
    alert("Today's Weather is cool");
} else if (temperature>10) {
    alert("OMG! Today's weather is so Cool.");
} else {
       alert("Temperature is very low");
}

// Q11 
var num1 = +prompt("Q11:  Enter first number");
var num2 = +prompt("Q11:  Enter second number");
var operation =prompt("Q11:  Enter operation (+, - , * , / , % )");

if (operation ==="+") {
    alert("Result :" + (num1+num2)) ;
}
 if (operation ==="-") {
    alert("Result :" + (num1-num2)) ;
}
if (operation ==="*") {
    alert("Result :" + (num1*num2)) ;
}
if (operation ==="/") {
    alert("Result :" + (num1/num2)) ;
}
if (operation ==="%") {
    alert("Result :" + (num1%num2)) ;
}


// Chap: 12 to 13
 
// Q1
var char = prompt("Chp:12 to 13 Q1:  Enter a character");
 // Check if it is a number
if (char >= "0" && char <= "9") {
    alert("It is a NUMBER");
}
// Check if it is an uppercase letter (A–Z)
  else if (char >= "A" && char <= "Z") {
    alert("It is an UPPERCASE letter");
}
// Check if it is a lowercase letter (a–z)
else if (char >= "a" && char <= "z") {
    alert("It is a LOWERCASE letter");
}
// Anything else
else {
    alert("Invalid input");
}
  
// Q2
var num1 = +prompt("Q2:  Enter first integer");
var num2 = +prompt("Q2:  Enter second integer");

if (num1>num2) {
    alert("The larger number is: " + num1);
}
else if (num2>num1) {
    alert ("The larger number is: " + num2);
}
else {
    alert ("Both numbers are EQUAL");
}

// Q3
var num = +prompt("Q3:  Enter a number");
if (num > 0) {
    alert("The number is POSITIVE");
}
else if (num < 0) {
    alert("The number is NEGATIVE");
}
else {
    alert("The number is ZERO");
}
//  Q4
var char = prompt("Q4:  Enter a single character");

// Convert to lowercase so A and a both work
char = char.toLowerCase();

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    alert(true);   // It is a vowel
} else {
    alert(false);  // Not a vowel
}
 
// Q5
var correctPassword = "abc123";   // a. store correct password

var userPassword = prompt("Q5:  Enter your password");   // b. ask user

// c.i Check if user entered nothing
if (userPassword === "" || userPassword === null) {
    alert("Please enter your password");
}

// c.ii Check if passwords match
else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
}

// Otherwise incorrect
else {
    alert("Incorrect password");
}

// Q6

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";

}

// Q7
var time = +prompt("Q7:  Enter time in 24-hour format (e.g., 1900 for 7pm)");

if (time >= 0 && time < 1200) {
    alert("Good Morning!");
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!");
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening!");
}
else if (time >= 2100 && time <= 2359) {
    alert("Good Night!");
}
else {
    alert("Invalid time format");
}