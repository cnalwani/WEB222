/***************************************************************
*WEB222 - Assignment01
*I declare that this assignment is my own work in aaccordance with seneca Academic Policy. No part of 
*this assignment has been copied manually or electronically from any other source (including web sites) 
*or distributed to other students.
*
*Name: CHIRAG NANDLAL ALWANI   Student Id: 153444179  Date: 25 May 2018 
*
*****************************************************************/

/*****************************
*Task1
*****************************/
var name = "Chirag Alwani"; 

var program = "Computer programmer Diploma";

var course = "OOP,DCF,WEB and DBS";

var job = "have";

console.log("My name is " + name + " and I am in " + program + " program. I am taking " + course + " courses in this semester and I " + job + " a part time job now.");

/*****************************
*Task2
*****************************/
var Cyear = 2018;

var age = prompt("Please enter your age:");

console.log("You were born in the year of " + (Cyear - age));

var gyear = prompt("Enter the number of years you expect to study in the college");

var parsed  = parseInt(gyear);

console.log("You will graduate from seneca college in the year of " + (Cyear + parsed));

/*****************************
*Task3
*****************************/
var temperature = prompt("Enter Celsius Temperature :");

var fahrenheit = (temperature * 9/5) + 32; //Converting to Fahrenheit

console.log(temperature+ " °C is " +fahrenheit+ " °F");

var celsius = (fahrenheit - 32) * 5/9;  //Converting to Celsius

console.log(fahrenheit+ " °F is " +temperature+ " °C ");
 

/*****************************
*Task4
*****************************/

for(var i = 1; i <=10; i++)
  {
    if(i%2==0)
      {
        console.log(i + " is even");
      }
    else
      {
        console.log(i + " is odd")
      }
  }

/*****************************
*Task5
*****************************/

function largerNum(No1,No2)
{
    var max;
    if(No1 > No2) 
    {
        max = No1;
    }
    else if(No1 < No2)
    {
        max = No2;
    }
    
    return max;
}
var x=18;
var y=14;
var greater = largerNum(x,y);

console.log("The MAXIMUM NUMBER OF " + x + " AND " + y + " IS " + greater);

var greater;
var greaterNum = function(No1,No2)
{
    if(No1 > No2)
    {
        greater = No1;
    }
    else
    {
        greater = No2;
    }
    
    return greater;

      
}
var a=10,b=20;
var large = greaterNum(a,b);
console.log("The Larger number of " + a + " and " + b + " is " + large);


/*****************************
*Task6
*****************************/
function Evaluator()
{
    var sum = 0;    
    for(var i = 0; i < arguments.length; i++) 
    {
       sum = sum + arguments[i];         
    }
    if(sum >= 50)
    {
        console.log("Average greater than or equal to 50 : true " +sum);
        
    }
    else
    {
         console.log("Average is above or less than 50 : false " +sum );
    }    
}

Evaluator(20,30,4,5);
Evaluator(3,4,5,6,7,8,9);
Evaluator(10,20,30,40,50);

/*****************************
*Task7
*****************************/
var Grader = function(No_score)
{
    var grades;
    if(No_score > 80 )
    {
        grades = 'Grade A';    
    }
    else if(No_score > 70)
    {
        grades = 'Grade B';
    }
    else if(No_score > 60)
    {
        grades = 'Grade C';   
    }
    else if(No_score > 50)
    {
        grades  = 'Grade D';      
    }
    else
    {
        grades = 'F';          
    }
    return grades;
}
console.log(Grader(75));
console.log(Grader(65));
console.log(Grader(85));
/*****************************
*Task8
*****************************/

function showMultiple(num,numMultiples)
{
    for(var i=1;i<=numMultiples;i++)
     {
  
        console.log(num+ " x " +i+ " = " +num*i); 
       
     }
     console.log("---------------------------")
           
}
showMultiple(5,4);
showMultiple(6,4);
showMultiple(7,4);



