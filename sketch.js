var ball;
var database;
var databaseref;
var position;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database=firebase.database();
    //console.log(database)
 ballposition=database.ref('ball/position')
//.ref()is used to refer to the data base location;

ballposition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }

    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1)
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
    database.ref('ball/position').set({
        x:ball.x+x,
        y:ball.y+y
    })
}

function readPosition(data){
//this function reads the x and y position of the ball from the database
position=data.val();
//val function reads the value from the data base
console.log(position.x);
console.log(position.y);
ball.x=position.x;
ball.y=position.y;
}

function showError(){
console.log("error in writing  to the data base")

}











  