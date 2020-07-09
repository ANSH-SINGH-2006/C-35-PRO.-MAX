var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var ww;
var count=0
    
function preload() {
  img=loadImage("images/im.gif")
  d=loadImage("images/bgg.jpg")
}

function setup(){
  canvas = createCanvas(1200,800);
 // ww=createSprite(800,520,400,400)
  
  //game = new Game();
  //game.getState();
  //game.start();
  
  
 
  //firebase.analytics();

  database = firebase.database();
  console.log(database);

  
  form = new Form()
      form.display();
    
}

function draw(){
  background(d)
  image(img,500,400);


  //form = new Form()
      //form.display();

      player = new Player();
      player.getCount();
    
      //img=new Image(500,520)
      //img.display();
      
}
