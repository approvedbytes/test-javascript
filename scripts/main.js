//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/
var num = 10;
var num2 = 10.0;
console.log("The value of num is "+num);
var myImage = document.querySelector('img');
console.log(num2==num);
console.log(num2===num);

var colors = new Array();

//colors[0]="blue";
colors[1]="red";
colors[2]="green";
console.log(colors);

var num = 5;
switch(num)
{
   case 5:
      console.log("num is equal to 5");
      break;
   case 10:
      console.log("num is equal to 10");
      break;
   default:
      console.log("num is: "+ num);
}

var numObject = [10, 15, 20];

function changeArray(_numObject)
{
  _numObject = new Array('turtle', 'chicken', 'kangaroo');
  console.log("_numObject[0] is " + _numObject[0]);
}
changeArray(numObject);
console.log("numObject[0] is " + numObject[0]); 


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}


