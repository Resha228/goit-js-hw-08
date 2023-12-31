import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(event) {
  const currentTime = event.seconds;
  localStorage.setItem(TIME_KEY, currentTime);
}

const storedTime = localStorage.getItem(TIME_KEY);
if (storedTime) {
  player.setCurrentTime(storedTime);
}
