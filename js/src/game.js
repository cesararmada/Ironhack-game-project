var canvasWidth = 1200;
var canvasHeight = 700;
var mouseX = 0.0;
var mouseY = 0.0;
var acc=0;

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
    ctx.drawImage(this.img, 0, 0, 70, 70);
    ctx.rotate((-this.angle) - (87 * Math.PI / 180));
    ctx.translate(-this.x, -this.y);
  }
};



function loop() {
  background.tick()
  player.tick();
  background.render()
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

  },

  render: function () {
    
    var background = new Image()
    background.src = "/Users/cesar/code/Ironhack/project-1-Game/Traveller/img/background.png"
    ctx.drawImage(background, this.x, this.y, 1200, 700);
    for(var i=0; i<11;i++){
      for(var j=0; j<11;j++){
        // ctx.drawImage(background, this.x-canvasWidth*2, this.y, 1200, 700);
        // ctx.drawImage(background, this.x+canvasWidth*2, this.y, 1200, 700);
        // ctx.drawImage(background, this.x, this.y-canvasHeight*2, 1200, 700);
        // ctx.drawImage(background, this.x, this.y+canvasHeight*2, 1200, 700);
        ctx.drawImage(background, this.x-canvasWidth*i, this.y-canvasHeight*j, 1200, 700);
        ctx.drawImage(background, this.x-canvasWidth*i, this.y+canvasHeight*j, 1200, 700);
        ctx.drawImage(background, this.x+canvasWidth*i, this.y-canvasHeight*j, 1200, 700);
        ctx.drawImage(background, this.x+canvasWidth*i, this.y+canvasHeight*j, 1200, 700);
      }
    }
    
    
    
    
    // ctx.drawImage(background, this.x, this.y, 1200, 700);
    // ctx.drawImage(background, this.x-canvasWidth, this.y, 1200, 700);
    // ctx.drawImage(background, this.x-canvasWidth*2, this.y, 1200, 700);
    // ctx.drawImage(background, this.x+canvasWidth, this.y, 1200, 700);
    // ctx.drawImage(background, this.x+canvasWidth*2, this.y, 1200, 700);
    // ctx.drawImage(background, this.x, this.y-canvasHeight, 1200, 700);
    // ctx.drawImage(background, this.x, this.y-canvasHeight*2, 1200, 700);
    // ctx.drawImage(background, this.x, this.y+canvasHeight, 1200, 700);
    // ctx.drawImage(background, this.x, this.y+canvasHeight*2, 1200, 700);

    // ctx.drawImage(background, this.x-canvasWidth, this.y-canvasHeight, 1200, 700);
    // ctx.drawImage(background, this.x-canvasWidth*2, this.y-canvasHeight*2, 1200, 700);
    // ctx.drawImage(background, this.x-canvasWidth, this.y+canvasHeight, 1200, 700);
    // ctx.drawImage(background, this.x-canvasWidth*2, this.y+canvasHeight*2, 1200, 700);
    // ctx.drawImage(background, this.x+canvasWidth, this.y-canvasHeight, 1200, 700);
    // ctx.drawImage(background, this.x+canvasWidth*2, this.y-canvasHeight*2, 1200, 700);
    // ctx.drawImage(background, this.x+canvasWidth, this.y+canvasHeight, 1200, 700);
    // ctx.drawImage(background, this.x+canvasWidth*2, this.y+canvasHeight*2, 1200, 700);
  }
};

function move() {
  var x = mouseX - player.x;
  var y = mouseY - player.y;
  var l = Math.sqrt(x * x + y * y);
  x = x / l;
  y = y / l;
  background.dx = -(x * 10.0);
  background.dy = -(y * 10.0);
}

function stop() {
  
  background.dx = 0;
  background.dy = 0;
}
document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 87:
      move();
      break;

  }
};
document.onkeyup = function (e) {
  switch (e.keyCode) {
    case 87:
      stop();
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