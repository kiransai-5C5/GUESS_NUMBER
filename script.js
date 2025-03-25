let box=document.getElementById("box");
let take=document.getElementById("take");
let attempt=document.getElementById("attempt");
let btn1=document.getElementById("btn1");
let inputs=document.getElementById("input");

let min=0;
let max=100;
const random=Math.floor(Math.random()*(max-min+1))+min;
let count=0;

btn1.addEventListener("click",()=>{
    let ins = inputs.value.trim();
    let guess = parseInt(ins, 10);
    
    if(isNaN(guess) || ins === ""){
        box.innerHTML=`<span> enter a valid number </span>`;
    }
    else{
        attempt.innerHTML=`Attempts:${count}`;
        count++;
        if(guess>random){
            box.innerHTML=`<span>your number is greater than the number.</span>`;
        }else if(guess<random){
            box.innerHTML=`<span>your number is smaller than the number.</span>`;
        }else{
            box.innerHTML=`<span>🎉 Correct! The number was ${random}.</span>`;
            btn1.disabled = true;
        }
    }
    
});