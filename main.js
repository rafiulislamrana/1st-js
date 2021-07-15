//Word count code start here--

// var firstName = prompt("Enter Your First Name : ")
// var lastName = prompt("Enter Your Last Name : ")

// document.write("Hey " + firstName + " " + lastName + "<br/>")
// var totalWord = (firstName + lastName)
// var count = totalWord.length
// document.write ()
// document.write ("Total words in your name is : " + count)

//Word count code end here--


//F to C code start here--

// var faren = parseFloat(prompt("Enter the Temperature in F : "));
// var calcius, calcius1, calcius2;
// calcius = (faren - 32) * (5 / 9) ;
// document.write(calcius) 

//F to C code start here--


//Calculator code start here--
 
// var num1 = parseInt(prompt("Enter the First Number : "));
// var num2 = parseInt(prompt("Enter the Second Number : "));

// var sum, sub, increment;

// sum = num1 + num2;
// sub = num1 - num2;
// increment = ( ++num1 + (" , ") + ++num2 );

// document.write(("The sum of two numbers is : ") + sum + ("<br/>"));
// document.write(("The sub of two numbers is : ") + sub + ("<br/>"));
// document.write(("One increasment value of two numbers is : ") + increment + ("<br/>"));

//Calculator code end here--



//Grade defining code start here--

// var marks = parseFloat(prompt("Enter your marks : "));
// var sub = prompt("Enter the subject name : ")

// if (marks>100 || marks<0)
// document.write("Invalid Number. Please enter a valid marks.")

// else if (marks>=80)
// document.write("You got A+ in " + sub);

// else if(marks<=79 && marks>=70)
// document.write("You got A in " + sub)

// else if(marks<=69 && marks>=60)
// document.write("You got A- in " + sub)

// else if(marks<=59 && marks>=50)
// document.write("You got B in " + sub)

// else if(marks<=49 && marks>=40)
// document.write("You got C in " + sub)

// else if(marks<=39 && marks>=33)
// document.write("You got D in " + sub)

// else
// document.write("You have failed in " + sub)

//Grade defining code end here--



//finding the large num code start here--

// var num1 = parseFloat(prompt("Enter the first number: "))
// var num2 = parseFloat(prompt("Enter the second number: "))
// var num3 = parseFloat(prompt("Enter the third number: "))

// if (num1>num2 && num1>num3)
// document.write(num1 + " is the large number.")

// else if (num2>num1 && num2>num3)
// document.write(num2 + " is the large number.")

// else
// document.write(num3 + " is the large number.")

//finding the large num code end here--



//Finding vowel with if else code start here--

// var charecter = prompt("Enter the Alphabet : ")

// if (charecter == "a" || charecter== "e" || charecter == "i" || charecter == "o" || charecter == "u")
// document.write(charecter + " is vowel")

// else
// document.write(charecter + " is consonant")

//Finding vowel with if else code end here--



//Finding vowel with switch code start here--

// var charecter = prompt("Enter the Alphabet : ")
// switch(charecter){
//     case "a":
//         document.write(charecter + " is Vowel")
//         break;
//     case "e":
//         document.write(charecter + " is Vowel")
//         break;
//     case "i":
//         document.write(charecter + " is Vowel")
//         break;  
//     case "o":
//          document.write(charecter + " is Vowel")
//         break;
//     case "u":
//         document.write(charecter + " is Vowel")
//         break;
//     default:
//         document.write(charecter + " is Consonat");

// }

//Finding vowel with switch code end here--



//Print 1 to 10 with for loop code start here--

// var x = 1;
// for (x ; x<=10 ; x++) {
//     document.write(("<br/>") + x + ("<br/>"))
// }

//Print 1 to 10 with for loop code end here--



//Sum of numbers with for loop code start here--

// var lowerValue = parseInt(prompt("Enter the first number : "));
// var higherValue = parseInt(prompt("Enter the last number : "));
// var sum = (0);

// for (lowerValue ; lowerValue<=higherValue ; lowerValue++){
//     sum = sum + lowerValue
// }

// document.write(sum)

//Sum of numbers with for loop code start here--



//Sum of numbers with while loop code start here--

// var firstNumber = parseInt(prompt("Enter the first number : "));
// var secondNumber = parseInt(prompt("Enter the second number : "));
// var sum = (0);

// while (firstNumber<=secondNumber){
//     sum = sum + firstNumber
//     firstNumber = firstNumber + 1
// }

// document.write(sum)

//Sum of numbers with while loop code end here--



//Sum of numbers which can be divided by 3 & 5 with while loop code start here--

// var firstNumber = parseInt(prompt("Enter the first number : "));
// var lastNumber = parseInt(prompt("Enter the last number : "));

// var sum = (0);

// while (firstNumber<=lastNumber){
    
//     if(firstNumber%3 == 0 && firstNumber%5==0){
//         sum = sum + firstNumber
//     }

//     firstNumber = firstNumber + 1
    
// }
// document.write((" ") + sum)

//Sum of numbers which can be divided by 3 & 5 with while loop code end here--



//syntex of for, while & do while loop code start here--

// for (intial value; condition; update);
// for (var i = 1; i<=10; i++){
//     document.write(" " + i);
// }
// document.write("<br/>");

// var i = 1;
// while(i<=10){
//     document.write(" " + i);
//     i++;
// }
// document.write("<br/>");

// var i = 1;
// do{
//     document.write(" " + i);
//     i++;
// }while(i<=10);

//syntex of for, while & do while loop code end here--



//finding the positive negative or zero by if else code start here--

// var number = parseInt(prompt("Enter the number : "))

// if (number>0){
//     document.write("positive");
// }
// else if (number<0){
//     document.write("negative");
// }
// else{
//     document.write("zero");
// }

//finding the positive negative or zero by if else code end here--




//finding the positive negative or zero by ternary operator code start here--

// var number = parseInt(prompt("Enter the number : "))

// var result = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero"
// document.write(result)


//finding the positive negative or zero by ternary operator code end here--



//finding the larger number by ternary operator code start here--

// var num1 = parseInt(prompt("Enter the first number : "))
// var num2 = parseInt(prompt("Enter the second number : "))
// var num3 = parseInt(prompt("Enter the third number : "))

// var large = num1>num2 && num1>num3 ? "Large number is " + num1 : num2>num1 && num2>num3 ?  "Large number is " + num2 : "Large number is " + num3;

// document.write(large);


//finding the larger number by ternary operator code end here--



//continue loop code start here--

// for (var i=0 ; i<=Infinity ; i++){
//     var num1 = parseInt(prompt("Enter the first number : "));
//     var num2 = parseInt(prompt("Enter the second number : "));

//     var sum = num1 + num2;

//     console.log("The sum of two number is : " + sum);
// }

//continue loop code end here--



//Addition function code start here--

// function add(num1, num2){
//     // var num1 = parseInt(prompt("Enter the first number : "));
//     // var num2 = parseInt(prompt("Enter the second number :"));
    
//     var sum = num1 + num2;
//     // return sum;
//     document.write("Sum of those two number is = " + sum + "<br>");
// }

// add(5,6);
// add(7,9);
// add(15,10);


//Addition function code start here--


//Addition function code using return start here--

// function addition(num1 , num2){
//     var num1 = parseInt(prompt("Enter the first number : "));
//     var num2 = parseInt(prompt("Enter the second number : "));
//     var sum = num1 + num2;
//     return sum;
// }

// document.write("Sum of numbers : " + addition());


//Addition function code using return end here--



//Addition function code using return in for loop infinity start here--
// for (var i=1; i<=Infinity; i++){
//     function addition(num1 , num2){
//         var num1 = parseInt(prompt("Enter the first number : "));
//         var num2 = parseInt(prompt("Enter the second number : "));
//         var sum = num1 + num2;
//         return sum;
//     }
    
//     console.log("Sum of numbers : " + addition());
// }
//Addition function code using return in for loop infinity end here--



//Addition function code start here--
// function add(x,y){
//     var sum = x + y;
//     return sum;
// }

// document.write("SUM is : " + add(parseInt(prompt("First number : ")), parseInt(prompt("Second Number : "))));

//Addition function code end here--




//Calculator +,-,*,/ function code start here--

// function addition(x,y){
//     var sum = x + y;
//     document.write("Addition of two number is : " + sum);
// }

// function substract(x,y){
//     var sub = x - y;
//     document.write("Subtraction of two number is : " + sub);
// }

// function multiply(x,y){
//     var multiply = x * y;
//     document.write("Multipication of two number is : " + multiply);
// }

// function division(x,y){
//     var division = x / y;
//     document.write("Division of two number is : " + division);
// }

// var x = parseInt(prompt("Enter the first number : "));
// var y = parseInt(prompt("Enter the second number : "));

// var operator = prompt("Enter the operator : ");

// if(operator=="+"){
//     document.write(addition(x,y));
// }
// else if(operator=="-"){
//     document.write(substract(x,y));
// }
// else if(operator=="*"){
//     document.write(multiply(x,y));
// }
// else if(operator=="/"){
//     document.write(division(x,y));
// }
// else{
//     document.write("Invalid Operator. Please choose operator betweent +,-,* or /. <br> Thanks for using our calculator. ");
// }

//Calculator +,-,*,/ function code end here--



//Calculator +,-,*,/ function code start here--

// function addition(x,y){
//     var sum = x + y;
//     return  document.write("Addition of two number is : " + sum).value;
// }

// function substract(x,y){
//     var sub = x - y;
//    return document.write("Subtraction of two number is : " + sub).value;
// }

// function multiply(x,y){
//     var multiply = x * y;
//     return document.write("Multipication of two number is : " + multiply).value;
// }

// function division(x,y){
//     var division = x / y;
//     return  document.write("Division of two number is : " + division).value;
// }


// var x = parseInt(prompt("Enter the first number : "));
// var y = parseInt(prompt("Enter the second number : "));

// var operator = prompt("Enter the operator : ");

    
// if(operator=="+"){
//     document.write(addition(x,y));
// }
// else if(operator=="-"){
//     document.write(substract(x,y));
// }
// else if(operator=="*"){
//     document.write(multiply(x,y));
// }
// else if(operator=="/"){
//     document.write(division(x,y));
// }
// else{
//     document.write("Invalid Operator. Please choose operator betweent +,-,* or /. <br> Thanks for using our calculator. ");
// }

//Calculator +,-,*,/ function code end here--




//array will loop code start here--

// var nums = new Array();
// var times = parseInt(prompt("How many numbers you wanna add & sum : "));

// for (var i=0 ; i<times ; i++){
//     nums[i] = parseInt(prompt("Enter all those numbers : "));
// }

// var sum = 0;

// for(var i=0 ; i<times ; i++){
//     sum = sum + nums[i]
// }

// console.log("The sum of those number is : " + sum);
//array will loop code end here--




//Finding the prime number code start here--

// var num = parseInt(prompt("Enter the number : "));

// if(num==2){
//     document.write("<br>" + num + " is a prime number") 
// }
// else if(num==3){
//     document.write("<br>" + num + " is a prime number")
// }
// else if(num==5){
//     document.write("<br>" + num + " is a prime number")
// }
// else if(num%2==0 || num%3==0 || num%5==0){
//     document.write("<br>" + num + " is not a prime number")
// }
// else{
//     document.write("<br>" + num + " is a prime number")
// }

//Finding the prime number code end here--




//Count the number code end here--
// var num = new Array();
// num = parseInt(prompt("Enter the number : "))
// document.write(num.length)
//Count the number code end here--



// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199



//Print and sum all value is array code start here--

// var value = new Array();
// var count = parseInt(prompt("How many values you want to store to sum : "))
// for(var i=0 ; i<count ; i++){
//     value[i] = parseInt(prompt("Enter those " + count + " values one by one :"))
// }

// document.write(value);
// var sum = 0;

// for (var i=0 ; i<count ; i++){
//     sum = sum + value[i];
// }
// document.write("<br> Sum is : " + sum + "<br>");
// document.write(" End <br>")


//Print and sum all value is array code end here--




//Guessing game code start here--

var times = parseInt(prompt("How many times you want to play : "))
var totalWin = 0;
var totalLost = 0;

for(var i=1 ; i<=times ; i++){
    var guessNumber = parseInt(prompt("Enter a random number 1 to 5 : "));

    var randomNumber = Math.floor(Math.random()* 5 )  + 1;

    if(guessNumber==randomNumber){
        console.log("CONGRATULATIONS! You WON.")
        totalWin = totalWin + 1;
    }
    else{
        console.log("SORRY! You are lost. The random number was : " + randomNumber);
        totalLost = totalLost + 1;
    }
}

document.write("You played total " + times + " game <br>");
document.write("You have won : " + totalWin + " times <br>");
document.write("You have lost : " + totalLost + " times");


//Guessing game code end here--