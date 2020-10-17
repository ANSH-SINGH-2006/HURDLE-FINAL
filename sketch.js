//var ball;
var database;
var gameState=0;
var playerCount;
var form,player,game;
var allPlayers;
var distance=0;

var car1,car2,car3,car4,cars;
var car1_img, car2_img, car3_img, car4_img, track;

function preload(){
    d=loadImage("js/download.jpg");
    b=loadImage("js/a.png");
    track=loadImage("js/track.jpg");
    car1_img=loadImage("js/player1.png");
    car2_img=loadImage("js/player2.png");
    car3_img=loadImage("js/player3.png");
    car4_img=loadImage("js/player4.png");
    ddd=loadImage("js/bgend.jpg");

}

function setup(){
    createCanvas(displayWidth,displayHeight);

    database=firebase.database();
    console.log(database);

    game=new Game();
    game.getState();
    game.start();
    

}




function draw(){
    background(d);
    image(b,200,0);
    if(playerCount===4){
        game.update(1);
    }

    if(gameState===1){

        clear();
        game.play();
    }

    if(gameState===2){

        game.end();
    }
}






   




