var dog1,dog,happyDog,database,foodStock,foodS,fedTime,lastFed,foodObj

function preload()
{
	dog1 = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(600, 600);

  database = firebase.database()

  dog = createSprite(450,300,50,50)
  dog.addImage(dog1)
  dog.scale = 0.4
  foodStock = database.ref('Food')
  foodStock.on('value',readStock)
  foodObj = new Food()
}


function draw() {  
background(46, 139, 87)

feed = createButton("Feed The Dog")
feed.position(700,95)
feed.mousePressed(feedDog)

addFood = createButton("Add Food")
addFood.position(800,95)
addFood.mousePressed(addFoods)

/*if(keyWentDown(UP_ARROW)){
  foodS = foodS-1
   writeStock(foodS)
  dog.addImage(happyDog)
  dog.scale = 0.4
  console.log(foodS)
}*/

  drawSprites();
  fill("white")
  textSize(20)
  text("Press Up Arrow To feed Milk To the Dog",35,20)
  
  fill("white")
  textSize(20)
  text("foodStock:"+foodS,100,450)
  
  fill(255,255,254)
  textSize(15)
 
  if(lastFed>=12){
   text("Last Feed :"+ lastFed%12 + "PM",400,30)

  }else if (lastFed==0){
    text("Last Feed : 12 AM",350,30)
  }else {
    text("Last Feed :" + lastFed + "AM",350,30)
  }

  fedTime = database.ref('FeedTime');
  fedTime.on("value",function(data) {
    lastFed = data.val();
  } )
    



  foodObj.display()
}

function readStock(data){
  foodS = data.val()
  console.log(foodS)
}

function writeStock(x){

database.ref('/').update({

  Food:x
})



}

function feedDog(){
dog.addImage(happyDog)

foodObj.updateFoodStock(foodS-1)

}

function addFoods(){
foodS++;
database.ref('/').update({

  Food :foodS
})

}

