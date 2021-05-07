class Food {
        constructor(){
     this.foodStock = 0
     this.image = loadImage("images/Milk.png")
     this.lastFed = ""

        }
    getFoodStock(){
     var stock = database.ref('Food')
    stock.on("value",function(data){
    foodS = data.val()
    this.foodStock = foodS
    } )
    
    }
    
    updateFoodStock(x){
    database.ref('/').update({
    Food: x ,
    FeedTime: hour()
    }) 

    
    }

    deductFoodStock(){


    }

    display(){
   

    
    
    if(foodS!==0){
        console.log("hello")
        var x=80,y=100;
    for(var i=0;i<foodS;i++){
        if(i%10==0){
            x=80;
            y=y+50
        }
        imageMode(CENTER)
        console.log("hello")
        image(this.image,x,y,50,50)
        x=x+30;
    }


    }
    }
}

