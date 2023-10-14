var canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.beginPath();
c.moveTo(20, 20);
c.lineTo(20, 100);
c.lineTo(100, 100);
c.lineTo(20, 20);
c.stroke();


