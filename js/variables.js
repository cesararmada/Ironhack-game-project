var playership1 = "./img/spaceship_sprite.png";
var playership2 = "./img/spaceship_sprite_move.png";
var playership3 = "./img/spaceship_sprite_boost.png";
var enemyRound = "./img/enemyround.png";
var background1 = "./img/background.png";
var gasPlanetSrc = "./img/gas_planet.png"
var blackHoleSrc = "./img/Black_Hole.png"
var ufoSrc = "./img/ufo.png"
var nebulaSrc = "./img/nebula.png"
var greenUfoSrc = "./img/greenufo.png"
var explosionSrc = "./img/explosion.jpg"
var asteroidsSrc = "./img/asteroid-belt.png"
var bluePlanetSrc = "./img/blueplanet.png"
var startImgSrc = "./img/iniciospace.png"
var gameOverImgSrc = "./img/gameover.png"
var canvasWidth = 1200;
var canvasHeight = 700;
var mouseX = 0.0;
var mouseY = 0.0;
var base = 10.00;
var enemies = [];
var fixedEnemies = [];
var bulletArr = [];
var objArray = [];
var num = 0;
var numy = 0;
var score = 0;
var hit_delay = 0;
var gameOver = false;
var gameStart = false;
var keys = {
  w: false,
  space: false
};
this.game = 0;
main = this;