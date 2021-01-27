//Create variables here
var dog,dog1
var happyDog,happyDog1
var foodS
var foodStock

function preload()
{
  //load images here
  dog1=loadImage("dogImg.png")
  happyDog1=loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog.addImage(dog1)
  happyDog.addImage(happyDog1)
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87)

  //add styles here
   
if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog)
  drawSprites();
}
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}


