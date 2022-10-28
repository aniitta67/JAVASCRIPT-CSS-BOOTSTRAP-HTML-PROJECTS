let image=document.querySelector(".image");
let songname=document.querySelector(".songname");
let artist= document.querySelector(".artist");
let prev_btn=document.querySelector(".prev-btn");
let play_pause_btn=document.querySelector(".play-pause-btn");
let next_btn=document.querySelector(".next-btn");

let song_index=0;
let current_song=document.createElement('audio');
let isPlaying=false;
let len=0;

function loadSong(){
    var httpobj=new XMLHttpRequest();
  
    httpobj.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var res=JSON.parse(this.responseText);
            var musicobj=res.music;     
            len=musicobj.length;
            console.log(len);
            /* audio*/ 
            current_song.src=musicobj[song_index].audios;
            
            /* image */ 
            image.style.backgroundImage= "url(" + musicobj[song_index].image + ")";
            /*songname*/ 
            songname.textContent=musicobj[song_index].name;
            /*artist name*/ 
            artist.textContent=musicobj[song_index].artist;
           console.log(isPlaying)
            if (isPlaying){
                current_song.pause();
                isPlaying=false;
                play_pause_btn.innerHTML='<span class="material-icons md-68" onclick="loadSong()">play_circle_filled</span>'
         
                }
            else {
                current_song.play();
                play_pause_btn.innerHTML='<span class="material-icons md-68" onclick="loadSong()">pause_circle_filled</span>'
                isPlaying=true;
          
                 }
        }
    }
    httpobj.open("GET","./javascript/app.json",true);
    httpobj.send();

}

function prevSong(){
  
    if(song_index>0){
        song_index-=1;
    }
    else{
        song_index=len-1;
    }
           loadSong();
          
  }
  function nextSong(){
   
    if(song_index<len-1){
        song_index+=1;
    }
    else{
        song_index=0;
    }
           loadSong();
           
    
  }