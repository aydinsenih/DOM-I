const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");
let secondTensCounter = 0;
let secondOnesCounter = 0;
let msHundredsCounter = 0;
let msTensCounter = 0;

document.querySelector("body").style.flexDirection = "column"

let counter = setInterval(() => increment(), 10);
let btn = document.createElement("button");
btn.innerHTML = "Reset"
btn.id = "reset-btn"
btn.style.display = "none";
document.querySelector("body").appendChild(btn);
document.getElementById("reset-btn").addEventListener("click", reset);


function increment() {
    msTensCounter += 1;
    if(msTensCounter > 9){
        msTensCounter = 0;
        msHundredsCounter += 1;
        if(msHundredsCounter > 9){
            msHundredsCounter = 0;
            secondOnesCounter += 1;
            if(secondOnesCounter > 9){
                secondOnesCounter = 0;
                secondTensCounter += 1;
            }
            if(secondTensCounter === 1){
                clearInterval(counter);
                document.querySelector(".digits").setAttribute("style","color:red");
                btn.style.display = "flex";
                
            }
        }
    }
    update();
}

function update(){
    secondTens.textContent = secondTensCounter;
    secondOnes.textContent = secondOnesCounter;
    msHundreds.textContent = msHundredsCounter;
    msTens.textContent = msTensCounter;
}

function reset(){
    secondTensCounter = 0;
    secondOnesCounter = 0;
    msHundredsCounter = 0;
    msTensCounter = 0;
    document.querySelector(".digits").setAttribute("style","color:black");
    btn.style.display = "none"
    counter = setInterval(() => increment(), 10);
}