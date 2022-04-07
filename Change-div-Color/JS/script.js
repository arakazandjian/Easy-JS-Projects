let log = console.log;

// get all element into js
let btn = document.querySelector(".btn");
let divEl =  document.querySelector(".myDiv");
let color = ["red","blue","green"];
let count = 0

btn.onclick = function(){
    divEl.style.backgroundColor=color[count]; 
    count++
    if(count==3){
        count=0;
    }
}
