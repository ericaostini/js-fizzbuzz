const wrapper = document.getElementById("wrapper");
const container = document.getElementById("container");
for(let i = 1; i <= 100; i++){
    console.log(i);
    if (i % 3 === 0 && i % 5 !== 0){
        boxCol = "fizz";
        text = "fizz";
    } else if (i % 5 === 0 && i % 3 !== 0){
        boxCol = "buzz";
        text = "buzz";
    } else if(i % 3 === 0 && i % 5 === 0){
        boxCol = "fizzBuzz";
        text = "fizzBuzz";
    } else {
        boxCol = "null";
        text = i;
    }
    const box = document.createElement("div");
    box.className = `square ${boxCol} d-flex align-content-center justify-content-center`;
    box.innerHTML = `
    <p> ${text} </p>
    `;
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

