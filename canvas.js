var canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//foliage
c.beginPath();
c.moveTo(600, 100);
c.lineTo(500, 200);
c.lineTo(550, 200);
c.lineTo(450, 350);
c.lineTo(500, 350);

c.lineTo(400, 550);
c.lineTo(800, 550);

c.lineTo(700, 350);
c.lineTo(750, 350);
c.lineTo(650, 200);
c.lineTo(700, 200);
c.closePath();
c.stroke();
c.fillStyle = "green";
c.fill();

// trunk
c.beginPath();
c.rect(575,550, 50, 75); 
c.stroke();
c.fillStyle = "brown"
c.fill();

//star
c.beginPath();
c.moveTo(600, 115);
c.lineTo(575, 85);
c.lineTo(625, 85);
c.closePath();
c.strokeStyle = "yellow";
c.stroke();
c.fillStyle = "yellow";
c.fill();

c.beginPath();
c.moveTo(600, 75);
c.lineTo(575, 100);
c.lineTo(625, 100);
c.closePath();
c.stroke();
c.fillStyle = "yellow";
c.fill();

//strings
c.beginPath();
c.moveTo(550, 200);
c.quadraticCurveTo(600, 300, 700, 275);
c.lineWidth = 5;
c.stroke();

c.beginPath();
c.moveTo(500, 350);
c.quadraticCurveTo(600, 500, 750, 450);
c.lineWidth = 5;
c.stroke();

//ornaments
c.beginPath();
c.arc(575, 350, 10, 0, 2 * Math.PI);
c.stroke();
c.fillStyle = "red";
c.fill();

c.beginPath();
c.arc(680, 260, 10, 0, 2 * Math.PI);
c.stroke();
c.fillStyle = "red";
c.fill();

c.beginPath();
c.arc(575, 200, 10, 0, 2 * Math.PI);
c.stroke();
c.fillStyle = "red";
c.fill();

c.beginPath();
c.arc(500, 500, 10, 0, 2 * Math.PI);
c.stroke();
c.fillStyle = "red";
c.fill();

c.beginPath();
c.arc(720, 485, 10, 0, 2 * Math.PI);
c.stroke();
c.fillStyle = "red";
c.fill();

//hill
c.beginPath();
c.moveTo(300, 900);
c.bezierCurveTo(300, 500, 900, 500, 900, 900);
c.strokeStyle = "black";
c.lineWidth = 2;
c.stroke();
c.fillStyle = "white";
c.fill();
