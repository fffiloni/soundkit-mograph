let samplesToLoad;
const samples = [];

let anim;

function preload () {
  samplesToLoad = loadJSON('keyboard.json', makeKeyboard);
}

function makeKeyboard(samplesToLoad){
  for (let sample of samplesToLoad){
    let soundObj = {
      sample: loadSound('samples/' + sample.file),
      name: sample.file.slice(0, -4),
      pkey: sample.pkey,
      playing: false,
      ct: -1,
      anim: {
        container: document.getElementById('main'),
    		renderer: 'svg',
    		loop: false,
    		autoplay: true,
    		rendererSettings: {
    				progressiveLoad:false
    		},
    		path: sample.anim
      }
    }
    samples.push(soundObj);
  }
}

function setup() {
  noCanvas();

  for (let sobj of samples){
    sobj.len = sobj.sample.duration();
  }
}

function draw() {

  for (let sample of samples){
    sample.ct = sample.sample.currentTime();
    if (sample.ct > sample.len - 0.05 || sample.ct == -1){
      sample.sample.stop();
      sample.playing = false;
      lottie.destroy();
    }
  }

}

function stopAll() {
  for (let s of samples){
    s.sample.stop();
    s.playing = false;
    s.ct = -1;
  }
}

function keyPlay(id) {
  stopAll();
  samples[id].playing = true;
  samples[id].sample.playMode('restart');
  samples[id].sample.play();
}

function loadAnim(animData){
  anim = lottie.loadAnimation(animData);
}

function keyPressed() {
  for (let i = 0; i < samples.length; i++){
    if (keyCode === samples[i].pkey){
      lottie.destroy();
      if (samples[i].anim.path != null){
        loadAnim(samples[i].anim);
      }
      keyPlay(i);
    }
  }
}
