'use strict';var sketch,header=document.querySelector('.header'),container=document.querySelector('.container');document.addEventListener('DOMContentLoaded',function(){var a=new Plyr('#player');a.on('playing',function(){header.classList.add('hide'),container.classList.add('hide')}),a.on('timeupdate',function(a){var b=a.detail.plyr;2<b.currentTime&&5>b.currentTime&&(console.log('more than three, less than 5'),sketch='sketch1'),5<b.currentTime&&(console.log('more than 5'),sketch='sketch2')})});
