const container = document.getElementById("container");

for(let i = 1; i <= 100; i++){
    console.log(i);
    if (i % 3 === 0){
        boxColor = "fizz";
    } else if (i % 5 === 0){
        boxColor = "buzz";
    } else if (i % 3 === 0 && i % 5 === 0){
        boxColor = "fizzBuzz";
    } else{
        boxColor = "null";
    }
}