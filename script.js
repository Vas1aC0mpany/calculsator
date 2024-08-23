const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const result = document.getElementById("result");
const resultbtn = document.getElementById("resultbtn");
const plusbtn = document.getElementById("plusbtn");
const minusbtn = document.getElementById("minusbtn");
const xbtn = document.getElementById("xbtn");
const kbtn = document.getElementById("kbtn");
let action = "";

kbtn.onclick = function(){
    action = "k";
}

xbtn.onclick = function(){
    action = "*";
}

plusbtn.onclick = function(){
    action = "+";
}

minusbtn.onclick = function(){
    action = "-";
}

function printResult(res){
    if(res < 0){
        result.style.color = "red";
    }
    else {
        result.style.color = "green";
    }
    result.textContent = res;
}

resultbtn.addEventListener("click", ()=>{  
    if(action == "+"){
        const sum = Number(input1.value) + Number(input2.value);
        printResult(sum)
    }
    
    else if(action == "-"){
        const sum = Number(input1.value) - Number(input2.value);
        printResult(sum)
    }

    else if(action == "*"){
        const sum = Number(input1.value) * Number(input2.value);
        printResult(sum)
    }

    else if(action == "k"){
        const sum = Number(input1.value);
        const sumRes = Math.sqrt(sum);
        printResult(sum)
    }
    
})