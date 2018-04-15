var mySound;
var myMusic;
var myGameover;
var myVictory;
var myCoin;
var x = document.getElementById("myGameMusic"); //Looping music
function enableLoop() { 
    x.loop = true;
    x.load();
} 

function startGame() {
    console.log (startGame);
    myMusic = new sound("media/music/Level-Music-Ext.mp3");
    mySound = new sound("media/music/sound/Bomb+2.mp3");
    myGameover = new sound("media/music/ded.mp3");
    myVictory = new sound("media/music/Level-Clear.mp3");
    myCoin = new sound ("media/music/sound/coin.mp3");
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