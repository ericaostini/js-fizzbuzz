const wrapper = document.getElementById("wrapper");
const container = document.createElement("div");
container.className = `container d-flex flex-wrap justify-content-center p-6`;
wrapper.append(container);

// per 100 blocchi display fizz se divisibile per 3, buzz se divisibile per 5, fizzBuzz se divisibile sia per 3 che per 5 e il numero se non è divisibile per i due numeri 

for(let i = 1; i <= 100; i++){
    console.log(i);
    let boxCol, text;
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
    box.className = `square ${boxCol} d-flex align-items-center justify-content-center m-4`;
    box.innerHTML = `
    <p class = "fw-bolder"> ${text} </p>
    `;
    container.append(box);
    console.log(box);
}