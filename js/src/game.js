var canvasWidth = 1200;
var canvasHeight = 700;
var mouseX = 0.0;
var mouseY = 0.0;
var base = 10.00;

var player = {
  x: (canvasWidth * 0.5),
  y: (canvasHeight * 0.5),

  angle: 0.0,
  // radius: 0,

  tick: function () {
    this.angle = Math.atan2(mouseY - this.y, mouseX - this.x);
  },

  render: function () {

    ctx.translate(this.x, this.y);
    ctx.rotate((this.angle) + (87 * Math.PI / 180));
    this.img = new Image();
    this.img.src = "/Users/cesar/code/Ironhack/project-1-Game/Traveller/img/spaceship_sprite.png";
    ctx.drawImage(this.img, -35, -35, 70, 70);
    ctx.rotate((-this.angle) - (87 * Math.PI / 180));
    ctx.translate(-this.x, -this.y);
  }
};



function loop() {
  background.tick()
  bullet.tick();
  player.tick();
  background.render()
  bullet.render();
  player.render();
  requestAnimationFrame(loop);
}


var background = {
  x: 0,
  y: 0,
  dx: 0.0,
  dy: 0.0,
  radius: 5.0,

  tick: function () {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x > 12000) {
      this.x = 12000
    }
    if (this.x < -12000) {
      this.x = -12000
    }
    if (this.y > 7000) {
      this.y = 7000
    }
    if (this.y < -7000) {
      this.y = -7000
    }

  },

  render: function () {

    var background = new Image()
    background.src = "/Users/cesar/code/Ironhack/project-1-Game/Traveller/img/background.png"
    ctx.drawImage(background, this.x, this.y, 1200, 700);

    for (var i = 0; i < 11; i++) {
      for (var j = 0; j < 11; j++) {

        ctx.drawImage(background, this.x - canvasWidth * i, this.y - canvasHeight * j, 1200, 700);
        ctx.drawImage(background, this.x - canvasWidth * i, this.y + canvasHeight * j, 1200, 700);
        ctx.drawImage(background, this.x + canvasWidth * i, this.y - canvasHeight * j, 1200, 700);
        ctx.drawImage(background, this.x + canvasWidth * i, this.y + canvasHeight * j, 1200, 700);
      }
    }

  }
};
var bullet = {
  x: (canvasWidth * 0.5) | 0,
  y: (canvasHeight * 0.5) | 0,
  dx: 0.0,
  dy: 0.0,
  radius: 5.0,
  
  tick: function() {
    this.x += this.dx;
    this.y += this.dy;
    
    // if (this.x + this.radius < 0.0
    // ||	this.x - this.radius > canvasWidth
    // ||	this.y + this.radius < 0.0
    // || 	this.y - this.radius > canvasHeight)
    // {
    //   this.dx = 0.0;
    //   this.dy = 0.0;
    // }
  },
  
  render: function() {
    ctx.fillStyle = "darkcyan";
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0.0,2.0*Math.PI,false);
    ctx.fill();
    ctx.stroke();
  }
};
function move() {
  var x = mouseX - player.x;
  var y = mouseY - player.y;
  var l = Math.sqrt(x * x + y * y);
  x = x / l;
  y = y / l;
  background.dx = -(x * base);
  background.dy = -(y * base);
}

function accelerate() {
  base = 20.00;
}

function decelerate() {
  base = 10.00;
}

function stop() {
  var x = mouseX - player.x;
  var y = mouseY - player.y;
  var l = Math.sqrt(x * x + y * y);
  x = x / l;
  y = y / l;
  setTimeout(function () {
    background.dx = -(x * 8);
    background.dy = -(y * 8);
  }, 200);
  setTimeout(function () {
    background.dx = -(x * 7);
    background.dy = -(y * 7);
  }, 400);
  setTimeout(function () {
    background.dx = -(x * 6);
    background.dy = -(y * 6);
  }, 600);
  setTimeout(function () {
    background.dx = -(x * 5);
    background.dy = -(y * 5);
  }, 800);
  setTimeout(function () {
    background.dx = -(x * 4);
    background.dy = -(y * 4);
  }, 1000);
  setTimeout(function () {
    background.dx = -(x * 3);
    background.dy = -(y * 3);
  }, 1200);
  setTimeout(function () {
    background.dx = -(x * 2);
    background.dy = -(y * 2);
  }, 1400);
  setTimeout(function () {
    background.dx = -(x * 1);
    background.dy = -(y * 1);
  }, 1600);
  setTimeout(function () {
    background.dx =0;
    background.dy = 0;
  }, 1800);
  
}
document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 87:
      move();
      break;
    case 32:
      accelerate();
      break;

  }
};
document.onkeyup = function (e) {
  switch (e.keyCode) {
    case 87:
      stop();
      break;
    case 32:
      decelerate();
      break;

  }
};

window.onmousemove = function (e) {
  mouseX = e.clientX - bounds.left;
  mouseY = e.clientY - bounds.top;
}

window.onload = function () {
  canvas = document.getElementById("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  bounds = canvas.getBoundingClientRect();
  ctx = canvas.getContext("2d");
  loop();
}

window.onmousedown = function(e) {
  var x = mouseX - player.x;
  var y = mouseY - player.y;
  var l = Math.sqrt(x * x + y * y);
  x = x / l;
  y = y / l;
  bullet.x = player.x;
  bullet.y = player.y;
  bullet.dx = x * 10.0;
  bullet.dy = y * 10.0;
}
