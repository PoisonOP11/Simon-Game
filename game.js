var btnColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var clickedPattern = [];


// Clicking on buttons Functions
$(".btn").click(function (){

 var userChosenColor = $(this).attr("id");

clickedPattern.push(userChosenColor) 


playSound(userChosenColor);

animatePress(userChosenColor);

checkAnswer(clickedPattern.length-1)
})

//patterns

var started = false;
 
var level = 0;

//key to start
$(document).keypress(function (){

  if (!started){
    $("#level-tile").text("Level" + level)
    nextSequence();
    started = true;
  }
  
  })

  //Sequence and pattern of the game
function nextSequence(){
var randomNumber= Math.floor(Math.random() * 4 ) ;
var randomChosenColour = btnColors[randomNumber];
    
clickedPattern = [];


 //Building Game Pattern By Randomizing Numbers and assigning colors to them
 gamePattern.push(randomChosenColour);

 //Animation
 $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);    

  playSound(randomChosenColour);
  

  level++;

    $("#level-title").text("Level "  + level);
  
    
  
}

//Sounds
function playSound(name){

  
var audio = new Audio("sounds/" + name + ".mp3");
audio.play();


    
}


// animation
function animatePress(currentColor){



    $("#" + currentColor).addClass("pressed");

    
    setTimeout(function ( ){
    $("#" + currentColor).removeClass("pressed")
},100)


}


//check the answer what to do when user is correct and wrong
function checkAnswer(currentLevel){

  if(gamePattern[currentLevel] === clickedPattern[currentLevel]){
    console.log("Success");
  if(clickedPattern.length === gamePattern.length){
    setTimeout(function (){
      nextSequence();},200
    ) ;
  }
  
  } else {
    console.log("Wrong");

    var wrong = new Audio("sounds/" + "wrong.mp3" );
    wrong.play();

    
    
    
     $("body").addClass("game-over");

    


   setTimeout(function (){
      $("body").removeClass("game-over");
   },200);

   $("h1").text("Game Over, Press Any Key to Restart")
   
startOver();
   
  }


  
}

//Reset The Game
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}


