import Player from '@vimeo/player';
import _ from 'lodash';

const LS_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let time = localStorage.getItem(LS_TIME) || 0;

player.setCurrentTime(time);

const saveTime = data => {
  localStorage.setItem(LS_TIME, data.seconds);
};

player.on(
  'timeupdate',
  _.throttle(data => saveTime(data), 1000)
);
