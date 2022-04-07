let log = console.log;

let myInput = document.getElementById("passInput");
let myButton  = document.getElementById("btn");

myButton.onclick = function(){
    if(myButton.getAttribute('data-text') =='show'){
        myInput.setAttribute('type','text');
        myButton.setAttribute('data-text','hide');
        myButton.innerHTML="Hide";
    }else{
        myInput.setAttribute('type','password');
        myButton.setAttribute('data-text','show');
        myButton.innerHTML="Show";
    }  
}

