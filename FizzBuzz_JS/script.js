

function fizzBuzz(){
  //For loop to count up to 100
  for(var i=1; i <= 100; i++){
    //If number is divisible by 5 and 3
    if(i%5 === 0 && i%3 === 0){
      document.write("FizzBuzz <br>");
    }
    //If number is divisible by 3
    else if(i%3 === 0){
      document.write("Fizz <br>");
    }
    //If number is divisible by 5 and not by 3
    else if(i%5 === 0 && i%3 != 0){
      document.write("Buzz <br>");
    }
    else{
    //Prints the number if none of the conditions are met
      document.write(i + "<br>");
    }

  }
  return null;
}

fizzBuzz();
