$(document).ready(function () {

    //***Global Variables******************/

    var randNum = Math.floor(Math.random() * 120 + 19);
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var crystalValues = [];

    //*** Functions ************************/

    //Returns a random number between min and max

    function getRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;;
    }

    //Resets the game

    function resetGame() {

        //set random number to match
        randNum = getRandomNum(19, 120);
        //set crystal values using an array
        crystalValues[0] = getRandomNum(1, 12);
        crystalValues[1] = getRandomNum(1, 12);
        crystalValues[2] = getRandomNum(1, 12);
        crystalValues[3] = getRandomNum(1, 12);
        //set total score
        totalScore = 0;

        //display the random number
        $("#randomNum").html(randNum);
        console.log("RandNum: " + randNum);

        //display number of wins and losses
        $("#wins").html(wins);
        $("#losses").html(losses);

        console.log("wins: " + wins + "losses: " + losses);

        //display total score
        $("#scoreDisplay").html(totalScore);
        console.log("totalscore: " + totalScore);


    }
    //create a function that returns another function that increments the score and updates wins/losses, depending on which crystal was clicked

    function getCrystalHandler(crystalKey) {
        return function () {
            // add the crystalValue to the score counter
            totalScore += crystalValues[crystalKey];
            //display new score
            $("#scoreDisplay").html(totalScore);

            //if the user's score matches the random num, increment wins
            if (totalScore === randNum) {
                wins++;
                resetGame();
            }

            //if the user's score exceeds the random number

            else if (totalScore > randNum) {
                losses++;
                resetGame();
            }

            else {
                //do nothing to allow the game to continue
            }
        }
    }

    //call resetGame function to begin
    resetGame();

    //Create on click functions for the crystals that pass the crystal's value (from the array) 
    $("#crystalOne").on("click", getCrystalHandler(0));
    $("#crystalTwo").on("click", getCrystalHandler(1));
    $("#crystalThree").on("click", getCrystalHandler(2));
    $("#crystalFour").on("click", getCrystalHandler(3));


});