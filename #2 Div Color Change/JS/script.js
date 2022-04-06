let log = console.log;

// get all element into js
let btn = document.querySelector(".btn");
let divEl =  document.querySelector(".myDiv");
let color = ["red","blue","green"];
let i = 0;
btn.onclick = function(){
    
        divEl.style.backgroundColor = color[i];
        i++;
        if(i===3){
            i=0;
        }
        
   
}