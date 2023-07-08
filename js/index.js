//! Question-number-1 |================---->
// var num=Number(window.prompt('enter number'));
// document.getElementById("enter-number").innerHTML = typeof num+" => "+num;
// console.log(typeof num,"=>",num);
//! Question-number-2 |================---->
// var num = Number(window.prompt('Input: '));
// if(num % 3 === 0 & num  % 4 === 0){
// console.log('yes');
// document.getElementById("enter-number").innerHTML = true;
// }
// else{
// console.log('no');
// document.getElementById("enter-number").innerHTML = false;
// } 
//! Question-number-3 |================---->
// var num=Number(window.prompt("Enter an integer: "));
// var num2=Number(window.prompt("Enter an integer: "));
// if (num>num2){  
// console.log(num);
// document.getElementById("enter-number").innerHTML = num;
// }
// else if (num2>num){
// console.log(num2);
// document.getElementById("enter-number").innerHTML = num2;
// }
//! Question-number-4 |================---->
// num = Number(window.prompt("Enter a number: "))
// if (num > 0){
// console.log("The number is positive");}
// else if (num < 0){
// console.log("The number is negative");}
//! Question-number-5 |================---->
// var num=Number(window.prompt("Enter an integer: "));
// var num2=Number(window.prompt("Enter an integer: "));
// var num3=Number(window.prompt("Enter an integer: "));
// if (num>num2&&num>num3){  
// console.log("max element = " + num);
// }
// else if (num2>num&&num2>num3){
// console.log("max element = " + num2);
// }
// else if (num3>num&&num3>num2){
// console.log("max element =" + num3);
// }
// if (num<num2&&num<num3){  
// console.log("min element = " + num);
// }
// else if (num2<num&&num2<num3){
// console.log("min element = " + num2);
// }
// else if (num3<num&&num3<num2){
// console.log("min element = " + num3);
// }
//! Question-number-6 |================---->
// var num = Number(window.window.prompt("Input:"));
// if( num % 2 == 0){
// console.log(' even');
// document.getElementById("enter-number").innerHTML = 'even';
// }
// else{
// console.log('odd');
// document.getElementById("enter-number").innerHTML = 'odd';
// }
//! Question-number-8 |================---->
// var num = window.prompt('entr:');
// if( num =='a'){
// console.log('Consonant');
// document.getElementById("enter-number").innerHTML = 'Consonant';
// }
// else if (num == 'e'){
// console.log('Consonant');
// document.getElementById("enter-number").innerHTML = 'Consonant';
//  }
// else if (num == 'I'){
// console.log('Consonant');
// document.getElementById("enter-number").innerHTML = 'Consonant';
//  }
// else if (num == 'o'){
// console.log('Consonant');
// document.getElementById("enter-number").innerHTML = 'Consonant';
// }
// else if (num == 'u'){
// console.log('Consonant');
// document.getElementById("enter-number").innerHTML = 'Consonant';
// }
// else{
// console.log('vowel');
// document.getElementById("enter-number").innerHTML = 'vowel';
// }
//! Question-number-9 |================---->
// var num = Number(window.prompt("Input:"));
// for(var x=1;x <= num ;x++){
// console.log(x);
// }
//! Question-number-10 |================---->
// function printTable(){
// var number = Number(window.prompt("Enter an integer: "));
// for (var i = 1; i <= 12; i++) {
// var result = number * i;
// console.log(result);
//  }
// }
// printTable();
//! Question-number-11 |================---->
// var num = Number(window.prompt("Input:")); 
// for(var i = 2 ; i < num ; i++){
// console.log(-2&i);
// }
//! Question-number-12 |================---->
// var base = Number(window.prompt("Enter the base number: "));
// var exponent = Number(window.prompt("Enter the exponent: "));
// var result =base  ** exponent
// console.log(result);
//! Question-number-13 |================---->
// var subjectMarks = Number(window.prompt("Enter marks for subject: "));
// var subjectMarks2 = Number(window.prompt("Enter marks for subject: "));
// var subjectMarks3 = Number(window.prompt("Enter marks for subject: "));
// var subjectMarks4 = Number(window.prompt("Enter marks for subject: "));
// var subjectMarks5 = Number(window.prompt("Enter marks for subject: "));
// var subject = subjectMarks + subjectMarks2 + subjectMarks3 + subjectMarks4 + subjectMarks5
// var totalMarks = 0;
// totalMarks += subject;
// var averageMarks = totalMarks / 5;
// var percentage = totalMarks / 500 * 100;
// console.log("Total marks = " + totalMarks);
// console.log("Average Marks = " + averageMarks);
// console.log("Percentage = " + percentage);
//! Question-number-14 |================---->
// var monthNumber = Number(window.prompt("Enter the month number: "));
// var daysInMonth;
// if (monthNumber === 1|| monthNumber === 3|| monthNumber === 5|| monthNumber === 7||monthNumber === 8|| monthNumber === 10|| monthNumber === 12){
// daysInMonth = 31;
// console.log("Days in Month: " + daysInMonth);
// document.getElementById('enter-number').innerHTML = "Days in Month: " + daysInMonth;
// }
// else if(monthNumber === 4|| monthNumber === 6|| monthNumber === 9|| monthNumber === 11){
// daysInMonth = 30;
// console.log("Days in Month: " + daysInMonth);
// document.getElementById('enter-number').innerHTML = "Days in Month: " + daysInMonth;
// }
// else if(monthNumber === 2){
// daysInMonth = 28;
// console.log("Days in Month: " + daysInMonth);
// document.getElementById('enter-number').innerHTML = "Days in Month: " + daysInMonth;
// }
// else{
// document.getElementById('enter-number').innerHTML = "Invalid month number";
// console.log("Invalid month number");
// }
//! Question-number-15  |================---->
// var physicsMarks=Number(window.prompt('Enter marks for Physics: '));
// var chemistryMarks=Number(window.prompt('Enter marks for Chemistry:'));
// var biologyMarks=Number(window.prompt('Enter marks for Biology: '));
// var mathematicsMarks=Number(window.prompt('Enter marks for Mathematics: '));
// var computerMarks=Number(window.prompt('Enter marks for Computer:'));
// var totalMarks = physicsMarks + chemistryMarks + biologyMarks + mathematicsMarks + computerMarks;
// var percentage=(totalMarks /500)*100;
// var grade;

// if (percentage >= 90){
// grade = "Grade A";
// } 
// else if (percentage >= 80){
// grade = "Grade B";
// }
// else if (percentage >= 70){
// grade = "Grade C";
// } 
// else if (percentage >= 60){
// grade = "Grade D";
// } 
// else if (percentage >= 40){
// grade = "Grade E";
// } 
// else if (percentage < 40){
// grade = "Grade F";
// } 
// console.log("percentage: " + percentage);
// console.log("Grade: " + grade);
// document.getElementById('enter-number').innerHTML = "percentage: " + percentage + " Grade: " + grade ;
//? =========================| Using switch case |=============================
//! Question-number-16  |================---->
// var monthNumber = Number(window.prompt("Enter the month number: "));
// switch(monthNumber){
// case 1 :   // January - 31 -days
// console.log("January");
// console.log("31 / days");
// break;
// case 2 :   // February - 28 -days
// console.log("February");
// console.log("28 / days");
// break;
// case 3 :   // March - 31 -days
// console.log("March");
// console.log("31 / days");
// break;
// case 4 :   // June - 30 -days
// console.log("April");
// console.log("30 / days");
// break;
// case 5 :   // May - 31 -days
// console.log("May");
// console.log("31 / days");
// break;
// case 6 :   // June - 30 -days
// console.log("June");
// console.log("30 / days");
// break;
// case 7 :   // July - 31 -days
// console.log("July");
// console.log("31 / days");
// break;
// case 8 :   // October - 31 -days
// console.log("August");
// console.log("31 / days");
// break;
// case 9 :   // September - 30 -days
// console.log("September");
// console.log("30 / days");
// break;
// case 10 :   // October - 31 -days
// console.log("October");
// console.log("31 / days");
// break;
// case 11 :   // November - 30 -days
// console.log("November");
// console.log("30 / days");
// break;
// case 12 :   // December - 31 -days
// console.log("December");
// console.log("31 / days");
// break;
// default:   // Invalid month number
// console.log("Invalid month number");
// }
//! Question-number-17  |================---->
// var char = window.prompt('Enter any character');
// switch(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
// case 1:
// console.log('vowel');
// document.getElementById("enter-number").innerHTML = 'vowel';
// break
// default:
// console.log('consonant');
// document.getElementById("enter-number").innerHTML = 'consonant';
// }
//! Question-number-18  |================---->
// var num=Number(window.prompt("Enter an integer: "));
// var num2=Number(window.prompt("Enter an integer: "));
// switch(num == num2){ 
//     case num<num2 : 
// console.log(num);
// document.getElementById("enter-number").innerHTML = num;
// break
// case num2<num :
//     console.log(num2);
// document.getElementById("enter-number").innerHTML = num2;
// default:
// }
//! Question-number-19  |================---->
// var num = Number(window.window.prompt("Input:"));
// switch( num % 2 == 0){
// case true:
// console.log(' even');
// document.getElementById("enter-number").innerHTML = 'even';
// break;
// case false:
// console.log('odd');
// document.getElementById("enter-number").innerHTML = 'odd';
// }
//! Question-number-20  |================---->
// var num = Number(window.prompt("Enter a number: "))
// if (num > 0){
// console.log("The number is positive");}
// else if (num < 0){
// console.log("The number is negative");}
// else{
// console.log("The number is zero");}
//! Question-number-21  |================---->
// var num1 = parseFloat(prompt('Enter the first number:'));
// var operator = prompt('Enter the operator (+, -, *, /):');
// var num2 = parseFloat(prompt('Enter the second number:'));
// switch (operator) {
// case '+':
// console.log(num1 + num2)
// break
// case '-':
// console.log(num1 - num2)
// break
// case '*':
// console.log(num1 * num2)
// break
// case '/':
// console.log(num1 / num2)
// break
// default:
// console.log("Invalid operator")
// }
//! =========================| Questions answered |=============================
