    ///////////////////
   //               //
  //   Conditions  //
 //               //
///////////////////

// Question-1

function maxNumber(){
    var num1 = document.getElementById("firstNumber").value;
    var num2 = document.getElementById("secondNumber").value;
    var maxAnswer = document.getElementById("maxAnswer");

    // var mathMax = Math.max(num1.value,num2.value);
    if(num1 > num2){
        maxAnswer.innerHTML = "Answer: Maximum between "+ num1 + " and " + num2 + " = " + num1;
    }
    else{
        maxAnswer.innerHTML = "Answer: Maximum between "+ num1 + " and " + num2 + " = " + num2;
    }
}    
    // console.log("Math Dot Max : ",mathMax);

// Question-2

function maxNumber3(){
    var firstNumber2 = document.getElementById("firstNumber2").value;
    var secondNumber2 = document.getElementById("secondNumber2").value;
    var thirdNumber2 = document.getElementById("thirdNumber2").value;
    var maxAnswer2 = document.getElementById("maxAnswer2");

    // var mathMax2 = Math.max(firstNumber2.value, secondNumber2.value, thirdNumber2.value);
    
    if (firstNumber2 > secondNumber2 && firstNumber2 > thirdNumber2){
        maxAnswer2.innerHTML = "Answer: Maximum between " + firstNumber2 + " , " + secondNumber2 + " and " + thirdNumber2 + " = " + firstNumber2;
    }
    else if(secondNumber2 > thirdNumber2 && secondNumber2 > firstNumber2){
        maxAnswer2.innerHTML = "Answer: Maximum between "+ firstNumber2 + " , " + secondNumber2 + " and " + thirdNumber2 + " = " + secondNumber2;
    }
    else if(thirdNumber2 > firstNumber2 && thirdNumber2 > secondNumber2){
        maxAnswer2.innerHTML = "Answer: Maximum between "+ firstNumber2 + " , " + secondNumber2 + " and " + thirdNumber2 + " = " + thirdNumber2;
    }
    }
        
// Question-3

function checkNPZ(){
    var firstNumber3 = document.getElementById("firstNumber3");
    var maxAnswer3 = document.getElementById("maxAnswer3");

    if(firstNumber3.value < 0){
        maxAnswer3.innerHTML = "Answer: Number is Negative ";
    }
    else if(firstNumber3.value > 0){
        maxAnswer3.innerHTML = "Answer: Number is Positive ";
    }
    else if(firstNumber3.value == 0){
        maxAnswer3.innerHTML = "Answer: Number is Zero ";
    }
    
    }
        
// Question-4

function check5or11(){
    var firstNumber4 = document.getElementById("firstNumber4");
    var maxAnswer4 = document.getElementById("maxAnswer4");

    if(firstNumber4.value%5==0 ||firstNumber4.value%11==0){
        maxAnswer4.innerHTML = "Answer: Yes, Number is Divisible ";
    }
    else{
        maxAnswer4.innerHTML = "Answer: Number is not Divisible";
    }
    
    }
        
// Question-5

function checkevenOrOdd(){
    var firstNumber5 = document.getElementById("firstNumber5");
    var maxAnswer5 = document.getElementById("maxAnswer5");

    if(firstNumber5.value%2==0){
        maxAnswer5.innerHTML = "Answer: Number is EVEN ";
    }
    else{
        maxAnswer5.innerHTML = "Answer: Number is ODD";
    }
    
    }

// Question-6

function checkLeapOrNot(){
    var firstNumber6 = document.getElementById("firstNumber6");
    var maxAnswer6 = document.getElementById("maxAnswer6");

    if(firstNumber6.value%4==0){
        maxAnswer6.innerHTML = "Answer: It is Leap Year";
    }
    else{
        maxAnswer6.innerHTML = "It's Not a Leap Year";
    }
    
    }

        // Question-7

    var firstNumber7 = document.getElementById("firstNumber7");
    var maxAnswer7 = document.getElementById("maxAnswer7");


    function allLetter(firstNumber7)
      { 
      var letters = /^[A-Za-z]+$/;
      if(firstNumber7.value.match(letters))
      {
        maxAnswer7.innerHTML = "It's Alphabet";
        return true;
      }
      else
      {
        maxAnswer7.innerHTML = "It's Not an Alphabet";
        return false;
      }
      }

        // Question-8

        var firstNumber8 = document.getElementById("firstNumber8");
        var maxAnswer8 = document.getElementById("maxAnswer8");
    
    
        function checkVowel(){ 
            if(firstNumber8.value == 'a' || firstNumber8.value == 'e' || firstNumber8.value == 'i' || firstNumber8.value == 'o' || firstNumber8.value == 'u'){
                maxAnswer8.innerHTML = "It's a Vowel";
            }
            else{
                maxAnswer8.innerHTML = "It's Not a Vowel";
            }
          }
    
    
    document.getElementById("submitEvent").addEventListener("click", function (eventMax) {
        eventMax.preventDefault();
    });
    document.getElementById("submitEvent2").addEventListener("click", function (eventMax) {
        eventMax.preventDefault();
    });
    document.getElementById("submitEvent3").addEventListener("click", function (eventMax) {
        eventMax.preventDefault();
    });
    document.getElementById("submitEvent4").addEventListener("click", function (eventMax) {
        eventMax.preventDefault();
    });
    document.getElementById("submitEvent5").addEventListener("click", function (eventMax) {
        eventMax.preventDefault();
    });
    document.getElementById("submitEvent6").addEventListener("click", function (eventMax) {
        eventMax.preventDefault();
    });
    document.getElementById("submitEvent7").addEventListener("click", function (eventMax) {
        eventMax.preventDefault();
    });
    document.getElementById("submitEvent8").addEventListener("click", function (eventMax) {
        eventMax.preventDefault();
    });