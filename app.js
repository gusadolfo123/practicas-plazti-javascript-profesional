import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const buttonPlay = document.querySelector('.button-play');
buttonPlay.onclick = () => player.togglePlay();

const buttonSound = document.querySelector('.button-sound');
buttonSound.onclick = () => player.toggleSound();
