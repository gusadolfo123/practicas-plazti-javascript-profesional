import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()] });

const buttonPlay = document.querySelector('.button-play');
buttonPlay.onclick = () => player.togglePlay();

const buttonSound = document.querySelector('.button-sound');
buttonSound.onclick = () => player.toggleSound();

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').catch(error => console.log(error));
}
