
let box=document.querySelector(".box");

let pos=0;
let t=setInterval(move,500);
 function move(){
    if(pos>=150){
        clearInterval(t);
      } 
    else{
    pos+=1;
    box.style.left=pos+"px"
    console.log(pos)
    }
  
 }

