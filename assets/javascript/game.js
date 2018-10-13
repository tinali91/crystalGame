//global variables
var targetNumber;
var randomNum;
var score = 0;
var wins = 0;
var losses = 0;

//updates wins and loss count
function winLossCount () {
    $("#wins").text(wins);
    $("#losses").text(losses);
}

//function that will reset score and crystal values with each new game
function newGame() {
    //reset score to 0
    score = 0;
    $("#your-score").text(score);

    //random number to guess
    targetNumber = Math.floor(Math.random() * 101) + 19;
    console.log(targetNumber);
    $("#number-to-guess").text(targetNumber);

    //reassign random numbers to crystals
    for (var i = 0; i < 4; i++) {
        randomNum = Math.floor(Math.random() * 12) + 1;

        //creating crystals
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "https://images.unsplash.com/photo-1522777183857-cb4be6839fbe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=14ca26c8669b00b28265ce15cfe22118&auto=format&fit=crop&w=724&q=80");
        imageCrystal.attr("data-crystalvalue", randomNum);
        $("#crystals").append(imageCrystal);
    }

    winLossCount();
}


newGame();
winLossCount();

//converting values to integers and adding to score with each click
$("#crystals").on("click", "img", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    console.log(this);
    crystalValue = parseInt(crystalValue);
    score += crystalValue;
    console.log(score);
    $("#your-score").text(score);

    //compares score to number to guess for wins and loss
    if (score === targetNumber) {
        alert("You win!");
        wins++;
        $("#crystals").empty();
        newGame();
    } else if (score > targetNumber) {
        alert("You lose :(");
        losses++;
        $("#crystals").empty();
        newGame();
    }
})


