
var index = 0;
var videoSrc = ["src: #video0", "src: #video1", "src: #video2","src: #video3"];
var videos = ["#video0", "#video1", "#video2","#video3"];
var audios = ["#audio0", "#audio1", "#audio2","#audio3"];

function playVideo(){
  document.querySelector('a-videosphere').setAttribute('material', videoSrc[index]);
  var videoNow = document.querySelector('a-videosphere').getAttribute('src');
  document.querySelector(videoNow.substring(NaN,videoNow.length)).play();
  playAudio();
}

function playAudio(){
    var audioEl = document.querySelector("#voice");
    audioEl.setAttribute("src", audios[index]);

    var audio = audioEl.components.sound;
    audio.playSound();
    // stop = audio.stopSound();

}

function pauseAudio(){
    var audioEl = document.querySelector("#voice");
    //audioEl.setAttribute("src", audios[index]);
    
    var audio = audioEl.components.sound;
    //console.log(audio);
    audio.stopSound();

}


function pauseVideo(){
  var videoTextNow = document.querySelector('a-videosphere').getAttribute('src');

  var video = document.querySelector(videoTextNow.substring(NaN,videoTextNow.length));
  video.pause();
}


function start(i){
  var visible = document.getElementById("videoStuff").getAttribute('visible');
  if (visible){return;}
  document.querySelector("#voice").components.sound.pause();
  document.querySelector("#sound").components.sound.pause();
  pauseVideo();
  pauseAudio();
  index = i;
  document.getElementById("videoStuff").setAttribute('visible','true');
  document.getElementById("mainStuff").setAttribute('visible','false');
  playVideo();
  playAudio();
}

function exit(){
  var visible = document.getElementById("mainStuff").getAttribute('visible');
  if (visible){return;}
  index = 0;
  pauseVideo();
  pauseAudio();
  document.querySelector("#sound").play();
  document.getElementById("videoStuff").setAttribute('visible','false');
  document.getElementById("mainStuff").setAttribute('visible','true');
  document.querySelector('a-videosphere').setAttribute('material', "src: #video0;");
  document.querySelector("#sound").components.sound.play();
  pauseVideo();
}

function changeScene(){
  var visible = document.getElementById("videoStuff").getAttribute('visible');
  if (!visible){return;}
  pauseVideo();
  pauseAudio();
  index = (index+1)%videos.length;
  playVideo();
  playAudio();
}

AFRAME.registerComponent('arrow-key-rotation', {
  schema: {
    enabled: {default: true},
    dx: {default: 2.0},
    dy: {default: 2.0},
  },
  init: function () {
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.directionX = 0;
    this.directionY = 0;
  },
  play: function () {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
  },
  pause: function () {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);          
  },
  onKeyDown: function (evt) {
    switch (evt.keyCode) {
      case 37: this.directionX = 1; break;
      case 38: this.directionY = 1; break;
      case 39: this.directionX = -1; break;
      case 40: this.directionY = -1; break;
    }
  },
  onKeyUp: function (evt) {
    switch (evt.keyCode) {
      case 37: this.directionX = 0; break;
      case 38: this.directionY = 0; break;
      case 39: this.directionX = 0; break;
      case 40: this.directionY = 0; break;
    }          
  },
  tick: function (t, dt) {
    if (!this.data.enabled) { return; }
    var rotation = this.el.getAttribute('rotation');
    if (!rotation) { return; }
    if (this.directionX || this.directionY) {
      rotation.x += this.data.dx * this.directionY;
      rotation.y += this.data.dy * this.directionX;
      this.el.setAttribute('rotation', rotation);
    }
  }
});