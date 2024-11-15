
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
