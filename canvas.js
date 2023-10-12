console.log('Working?');
var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.innerHeight = window.innerHeight;

var c = canvas.getContext('2d');
c.fillRect(100, 100, 100, 100);