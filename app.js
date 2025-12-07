// Chp 9 
// Q4
var fuel = +prompt ("Enter remaining fuel in litres:");
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
alert("given condition for variable a is true");
}
// b:
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// c:
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// d:
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// e:
 if (true){
alert("True");
}
if (false){
alert("False");
}

// f:
if("car" < "cat"){
alert("car is smaller than cat");
}


// Q6



var sub1 = +prompt("Enter marks of Subject 1:");
var sub2 = +prompt("Enter marks of Subject 2:");
var sub3 = +prompt("Enter marks of Subject 3:");

var totalMarks = +prompt("Enter Total Marks:");

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
var secretnumber =