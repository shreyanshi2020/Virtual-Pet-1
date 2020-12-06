var dog
var happyDog
var database
var foodS
var foodStock
var dogImg
var happyImg

function preload()
{
  dogImg = loadImage("images/dogImg.png")
  happyImg = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,300,150,150);
 dog.addImage(dogImg)
 dog.scale = 0.15


 foodStock = database.ref('food')
 foodStock.on("value",readStock)
}


function draw() {  
  background("Purple")

  if(keyWentDown(UP_ARROW)){
    console.log("hi")
    writeStock(foodS);
    dog.addImage(happyImg);
  }
drawSprites();
}
function readStock(data){
  foodS = data.val();

}
function writeStock(x){
  
  database.ref('/').update({
    food:x
  })
}
  //add styles here





