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

function add(num1, num2){
    // var num1 = parseInt(prompt("Enter the first number : "));
    // var num2 = parseInt(prompt("Enter the second number :"));
    
    var sum = num1 + num2;
    // return sum;
    document.write("Sum of those two number is = " + sum + "<br>");
}

add(5,6);
add(7,9);
add(15,10);


//Addition function code start here--