
//create variables
var wins = 0;
var losses = 0;
var rButton= Math.floor(Math.random()*11+1);
var sButton= Math.floor(Math.random()*11+1);
var gButton= Math.floor(Math.random()*11+1);
var eButton= Math.floor(Math.random()*11+1);
var scoreTotal = 0;

//generate the random number goal and display
var randomNumber = Math.floor(Math.random() * 101) + 19;
  $("#randomNumber").html(randomNumber);

//if the user wins- wins increase- game resets
function winner() {
  wins++; 
  $("#wins").html(wins);
  reset();
}
//if user loses- losses increase- game resets
function loser() {
  losses++;
  $("#losses").html(losses);
  reset();
}

//game reset- new random number displays- new crystal values- score is zero
function reset() {
randomNumber = Math.floor(Math.random() * 101) + 19;
  $("#randomNumber").html(randomNumber);
rButton= Math.floor(Math.random()*11+1);
sButton= Math.floor(Math.random()*11+1);
gButton= Math.floor(Math.random()*11+1);
eButton= Math.floor(Math.random()*11+1);
scoreTotal = 0;
$("#score").html(scoreTotal);
}

//score will increase with each crystal value clicked
 $("#rubyButton").on ('click', function(){
    scoreTotal = scoreTotal + rButton;
    console.log("New scoreTotal= " + scoreTotal);
    $("#score").html(scoreTotal); 

//compare score with random number and determine win/loss
        if (scoreTotal == randomNumber){
          winner();
        } else if (scoreTotal > randomNumber){
          loser();
        }   
  });  

 //repeat for other crystals
  $("#saphireButton").on ('click', function(){
    scoreTotal = scoreTotal + sButton;
    console.log("New scoreTotal= " + scoreTotal);
    $("#score").html(scoreTotal); 

        if (scoreTotal == randomNumber){
          winner();
        } else if (scoreTotal > randomNumber){
          loser();
        }   
  }); 

   $("#gemButton").on ('click', function(){
    scoreTotal = scoreTotal + gButton;
    console.log("New scoreTotal= " + scoreTotal);
    $("#score").html(scoreTotal); 

        if (scoreTotal == randomNumber){
          winner();
        } else if (scoreTotal > randomNumber){
          loser();
        }   
  });

    $("#emeraldButton").on ('click', function(){
    scoreTotal = scoreTotal + eButton;
    console.log("New scoreTotal= " + scoreTotal);
    $("#score").html(scoreTotal); 

        if (scoreTotal == randomNumber){
          winner();
        } else if (scoreTotal > randomNumber){
          loser();
        }   
  });
