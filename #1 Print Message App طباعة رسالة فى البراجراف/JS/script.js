let log = console.log;
let inputEle = document.getElementById("input");
let buttonEle = document.getElementById("btn");
let msgEle =document.getElementById("msg");

// Event
buttonEle.onclick = function(){

    let inputValue = inputEle.value;
    if(inputValue ==""){
        alert("Insert your text");
        
    }else{
        msgEle.innerHTML+=inputValue;
        inputEle.value = ""
    }
}
