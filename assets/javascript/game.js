
$(document).ready(function () {
    //variable to store the number the user has to match
    var numToMatch;

    //variables to store the wins, losses, and user score
    var winsCount = 0;
    var lossesCount = 0;
    var score = 0;

    var crystalOneValue;
    var crystalTwoValue;
    var crystalThreeValue;
    var crystalFourValue;

    var currentScore = 0;

    $("#title").html("<h1>The Crystal Collector</h1>")

    resetGame();

    //displays wins and losses 
    var winsElement = $("#wins");
    winsElement.html("Wins:" + winsCount);
    var lossesElement = $("#losses");
    lossesElement.html("Losses:" + lossesCount);


    function resetGame() {

        crystalOneValue = (Math.floor(Math.random() * (11) + 1));
        crystalTwoValue = (Math.floor(Math.random() * (11) + 1));
        crystalThreeValue = (Math.floor(Math.random() * (11) + 1));
        crystalFourValue = (Math.floor(Math.random() * (11) + 1));

        numToMatch = (Math.floor(Math.random() * (40) + 20));
        $("#computerNumber").html(numToMatch);
        console.log(numToMatch);
    }




    //click handlers to increase the score with the value of the crystal clicked

    $("#crystalOneImage").on("click", function () {
        console.log(crystalOneValue);
        score = score + crystalOneValue;
        $("#userScore").html(score);

       if(score === numToMatch) {
            winsCount++;
            resetGame();
        } else if (score > numToMatch) {
            lossesCount++;
            resetGame();
        }
        

    });

    $("#crystalTwoImage").on("click", function () {
        console.log(crystalTwoValue)
        score += crystalTwoValue;
        $("#userScore").html(score);

        if(score === numToMatch) {
            winsCount++;
        } else if (score > numToMatch) {
            lossesCount++;
        }
    });

    $("#crystalThreeImage").on("click", function () {
        console.log(crystalThreeValue)
        score += crystalThreeValue;
        $("#userScore").html(score);

        if(score === numToMatch) {
            winsCount++;
        } else if (score > numToMatch) {
            lossesCount++;
        }
    });

    $("#crystalFourImage").on("click", function () {
        console.log(crystalFourValue)
        score += crystalFourValue;
        $("#userScore").html(score);

        if(score === numToMatch) {
            winsCount++;
        } else if (score > numToMatch) {
            lossesCount++;
        }
    });

    console.log(score);

});





















