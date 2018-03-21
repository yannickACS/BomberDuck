var mySound;
var myMusic;
var x = document.getElementById("myGameMusic"); //Looping music
function enableLoop() { 
    x.loop = true;
    x.load();
} 

function startGame() {
    console.log (startGame);
    myMusic = new sound("media/music/Level-Music-Ext.mp3");
    myMusic.play();
}



function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
} 