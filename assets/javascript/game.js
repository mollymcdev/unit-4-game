
var numToMatch;

var winsCount = 0;
var lossesCount = 0;


var crystalOne = $("#crystalOneImage");
var crystalTwo = $("#crystalTwoImage");
var crystalThree = $("#crystalThreeImage");
var crystalFour = $("#crystalFourImage");

var crystalArray = [crystalOne, crystalTwo, crystalThree, crystalFour];

var userScore = $("#userScore");




$(document).ready(function () {

    $("#title").html("<h1>The Crystal Collector</h1>")
   

    resetGame();

//assigns a random number to crystal image when clicked

    $("#crystals").on("click", function() {

     for (var i = 0; i < crystalArray.length; i++) {
       
       var crystalValue = (Math.floor(Math.random() * (11) + 1));

       $("#userScore").html(crystalValue);
        
    };

    });


//game logic

    if (userScore === numToMatch) {
        winsCount++
        resetGame();
    }

    else if (userScore > numToMatch) {
        lossesCount++
        resetGame;
    }


    function resetGame() {
        winsCount=0;
        lossesCount=0;
        numToMatch = (Math.floor(Math.random() * (40) + 20));
        $("#computerNumber").html(numToMatch);
        console.log(numToMatch);
    }
    

// tracks wins and losses
var winsElement = $("#wins");
    winsElement.text("Wins: " + winsCount);
var lossesElement = $("#losses");
    lossesElement.text("Losses: " + lossesCount);

});





















