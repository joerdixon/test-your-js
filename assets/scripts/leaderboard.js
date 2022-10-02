// DOM SELECTORS
var hsList = document.querySelector("#highscores");
var clearHS = document.querySelector("button")

// Intialize High Scores
var highScores = [];

// Clear anything that is there.
hsList.textContent = "";

// Render the scores to screen. (Chronological Order)
// TODO: Add button to sort by highscore.
function renderScores() {
    if (localStorage.getItem("highScores") !== null) {
        highScores = JSON.parse(localStorage.getItem("highScores"));
            for (var i = 0; i <= highScores.length; i++) {
                var prevHS = document.createElement("li");
                prevHS.textContent = highScores[i];
                hsList.appendChild(prevHS);
            }
    } else {
        var noScores = document.createElement("li");
        noScores.textContent = "You do not have any scores saved!"
        hsList.appendChild(noScores);
    }
}


clearHS.addEventListener("click", function() {
    localStorage.removeItem("highScores")
    hsList.child.remove("li");
    renderScores();
})

renderScores();

// PSEUDOCODE FOR LEADERBOARD

// When the user loads the leaderboard.
    // Clear anything already there
    // Check to see if there are any previously stored scores
        // If not, display message that there are no scores.
        // end
    // if there are
        // JSON.parse the scores out
        // For (the number of scores in localStorage)
            // create a new list element within #highscores
            // set the text content to highScore[i]
            // Append the element to the list
        // end
