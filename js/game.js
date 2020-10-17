class Game{
    constructor(){
        this.gg=createElement('h1');
    }

    getState(){
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value",(data)=>{
            gameState=data.val();
        })
        


    }

    update(state){

        database.ref('/').update({
            gameState:state

        })

    }

    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await database.ref('playerCount').once("value");

            if(playerCountRef.exists()){

                playerCount=playerCountRef.val();
                player.getCount();
            }
            
            form=new Form();
            form.display();
        }

        car1=createSprite(10,300);
        car1.scale = 0.35;
        car1.addImage("car1",car1_img);
        car2=createSprite(10,500);
        car2.scale = 0.35;
        car2.addImage("car2",car2_img);
        car3=createSprite(10,700);
        car3.scale = 0.35;
        car3.addImage("car3",car3_img);
        car4=createSprite(10,900);
        car4.scale = 0.35;
        car4.addImage("car4",car4_img);

        cars=[car1,car2,car3,car4];
    }
    play(){

        form.hide();
        //textSize(30);
        //text("GAME START",120,100);
        Player.getPlayerInfo();
        Player.getCarsAtEnd();

        if(allPlayers!==undefined){
            //var display_position=130;

            background("#c68767");
            image(track,0,150,displayWidth*4, displayHeight+60);

                var index=0;
                var x;
                var y=100;


            for(var plr in allPlayers){

                index=index+1;

                y=y+200;

                x=(displayWidth-1400)+allPlayers[plr].distance;
                
                cars[index-1].x=x;
                cars[index-1].y=y;

                if(index===player.index){
                    stroke(10);
                    fill("red");
                    ellipse(x,y,60,60);
                    cars[index-1].shapeColor="red";
                    camera.position.x=cars[index-1].x;
                    camera.position.y=displayHeight/2;
                }


               // if(plr==="player"+player.index)
                //fill("red");
                //else
                //fill("black");

               // display_position+=30;
                //textSize(15);
                //text(allPlayers[plr].name+" : "+allPlayers[plr].distance,120,display_position)

                
            }
        }

        if(keyDown("RIGHT_ARROW")&&player.index!==null){

            player.distance+=50;
            //player.x=player.distance
            player.update();
        }

if(player.distance>5700){
    gameState=2;
    Player.rank+=1;
    Player.updateCarsAtEnd(Player.rank);
   // game.update(2);
   
}

        drawSprites();
    }

end(){

    
    console.log("Your Rank Is: "+Player.rank);
    background(ddd);
    this.gg.html("Your Rank Is "+Player.rank);
    this.gg.position(800,30);
    

    //game.update(2);
    drawSprites();
    
}

}