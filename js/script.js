const wrapper = document.getElementById("wrapper");
const container = document.getElementById("container");
for(let i = 1; i <= 100; i++){
    console.log(i);
    if (i % 3 === 0){
        boxCol = "fizz";
    } else if (i % 5 === 0){
        boxCol = "buzz";
    } else if(i % 3 === 0 && i % 5 === 0){
        boxCol = "fizzBuzz";
    } else {
        boxCol = "null";
    }
    const box = document.createElement("div");
    box.classList.add("square");
    container.append(box);
    console.log(box);
}


    

// if (i % 3 === 0){
//     box.classList.add("fizz");
// } else if (i % 5 === 0){
//     box.classList.add("buzz");
// } else if (i % 3 === 0 && i % 5 === 0){
//     box.classList.add("fizzBuzz");
// } else{
//     box.classList.add("null");
// }

