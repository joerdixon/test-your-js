// DOM SELECTORS
var gameArea = document.querySelector(".gamearea");
var highScores = document.getElementById("viewhighscores");
// Countdown timer in seconds.
var timeRemaining = document.getElementById("timer");
// Quiz Container
var quizArea = document.getElementById("quizarea");
var currentQuestion = document.getElementById("question");
// Answer Options Container
var answerOptions = document.getElementById("answeroptions");
var ansOne = document.getElementById("ansOne");
var ansTwo = document.getElementById("ansTwo");
var ansThree = document.getElementById("ansThree");
var ansFour = document.getElementById("ansFour");
// Next Question Button
var nextQuestion = document.getElementById("nextquestion");
// Feedback Section
var feedBack = document.getElementById("feedback");
// High Scores
var highScores = [];
if (localStorage.getItem("highScores") !== null) {
    highScores = JSON.parse(localStorage.getItem(highScores));
}

// GLOBAL VARIABLES

// Stores the correct answer for any given question.
var correct;
// Stores the player score.
var score = 0;
// Stores the question that the player is on.
var qNum = 0;
// Initializes the timer at 60 seconds
var secondsLeft = 30;
// QUESTION SET
var questions = [
// Question 1
["What does '==' not compare?", ["Strings", "Variables", "Data Types", "Arrays"], 3],
// Question 2
["What method would you use to append a value to the back of an array?", [".shift()", ".pop()", ".append()", ".push()"], 4],
// Question 3
["this_question_is_written_in_?", ["Camel Case", "Snake Case", "Under Case", "Chain Case"], 2],
// Question 4
["An API _________...", ["Acts as a medium between seperate programs.", "Stores data in a name-pair value.", "Is a type of function that speed up your program.", "Returns a random number within a range you specify."], 1],
]

// FUNCTIONS-------------------------------------------------------------------

// Sets new question and updates answers.
function newQuestion(questionNum) {
    // CATCHES IF THE GAME IS OVER.
    if (questionNum >= questions.length) {
        secondsLeft = 0;
        feedBack.textContent = "DONE!!! Your score was " + score;
        showEndScreen(score);
        return;
    }
    currentQuestion.textContent = questions[questionNum][0];
    ansOne.textContent = questions[questionNum][1][0];
    ansTwo.textContent = questions[questionNum][1][1];
    ansThree.textContent = questions[questionNum][1][2];
    ansFour.textContent = questions[questionNum][1][3];
    correct = questions[questionNum][2];
    nextQuestion.setAttribute("style", "display: none");
    feedBack.textContent = "";
    answerOptions.setAttribute("style", "display: flex;")
}

// Checks the answer based on button clicked.
function checkAnswer(answerValue) {
    answerOptions.setAttribute("style", "display: none;")
    if (answerValue == questions[qNum][2]) {
        score += 1;
        feedBack.textContent = "CORRECT";
    } else {
        feedBack.textContent = "INCORRECT"
        secondsLeft -= 5;
    }
    nextQuestion.setAttribute("style", "display: block")
}

// TIMER
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeRemaining.textContent = secondsLeft;
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      feedBack.textContent = "TIMES UP"
      answerOptions.setAttribute("style", "display: none;")
      showEndScreen(score);
      // Calls function to create and append image
        } else if (secondsLeft === -1) {
            timeRemaining.textContent = "";
            clearInterval(timerInterval);
        }
  }, 1000);
}

// Post Game High Score
function showEndScreen(score) {
    // Clears the screen
    currentQuestion.remove();
    feedBack.remove();
    nextQuestion.remove();
    // Create 
    var scoreStatement = document.createElement("h1");
    var scoreName = document.createElement("input")
    var scoreSubmit = document.createElement("input")
    // Style + Content
    scoreStatement.textContent = "Your score was: " + score;
    scoreStatement.setAttribute("style", "text-align: center;");
    scoreName.placeholder = "Name";
    scoreName.setAttribute("style", "width: 30%; margin: 6vh auto; border-radius: 20px; text-align: center;")
    scoreName.setAttribute("maxlength", "12")
    scoreSubmit.textContent = "Save Score";
    scoreSubmit.setAttribute("type", "submit")
    scoreSubmit.setAttribute("style", "background-color: pink; width: 15%; height: 5vh; margin: 5vh auto; border-radius: 20px;")
    score
    // Append
    gameArea.appendChild(scoreStatement);
    gameArea.appendChild(scoreName);
    gameArea.appendChild(scoreSubmit);
    // Add event listener
    scoreSubmit.addEventListener("click", function() {
        highScores.push("Name: " + scoreName.value + " ||  Score: " + score);
        storeScores();
    } )
}

function storeScores() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.href = "leaderboard.html";
}


// EVENT LISTENERS

// Next Question Button
nextQuestion.addEventListener("click", function() {
    qNum += 1;
    newQuestion(qNum);
}
)
// Ans1
ansOne.addEventListener("click", function() {
    checkAnswer(1);
})
// Ans2
ansTwo.addEventListener("click", function() {
    checkAnswer(2);
})
// Ans3
ansThree.addEventListener("click", function() {
    checkAnswer(3);
})
// Ans4
ansFour.addEventListener("click", function() {
    checkAnswer(4);
})

// When they submit their highscore

// MAIN ----------------------------------------------------------------------------------

// call the game
newQuestion(qNum);
setTime();

/*
// FUNCTIONAL
TODO: Give option to save scores at the end of the game
TODO: Add a system where the player gets 1 point for every 5 seconds left on the clock.
// COSMETIC
TODO: Add  "-5" animation for when they lose time.
TODO: Add hover effects for menu buttons and answer options.
TODO: Make timer seconds change color based on how much time they have left

/ 

// question format [question as string, [ans1, ans2, ans3, ans4], ansindex]
// question[0] = question
// question[1] = possible answers
// question[2] = index of the correct answer within the possible answers array.
// ie
// question[1][question[2]] is the correct answer.

// PSEUDOCODE-----------------------------------------------------------------

/* 
WHEN WE LOAD IN (PLAYER HAS HIT THE START GAME BUTTON)

        Start the timer from 60sec
        Load a new question (newQuestion)
        hide next question button.

        GAMEPLAY LOOP:

        present answers as buttons with values.
        
        when a player clicks a button
        
            if that buttons value matches the correct answer.

                "CORRECT"
                score += 1
                show next question button

            if the value does not match.

                "INCORRECT"
                timer -= 10seconds
                show next question button

        when a player hits the next question button

        loop

        if there are no more questions remaining (questionNum > questions.length)

        Show the players final score and invite them to save their score.


*/