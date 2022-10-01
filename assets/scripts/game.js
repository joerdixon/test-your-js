// DOM SELECTORS

var gameArea = document.querySelector(".gamearea");
var highScores = document.getElementById("viewhighscores");
// Countdown timer in seconds.
var timeRemaining = document.getElementById("timer");
// Quiz Container
var quizArea = document.getElementById("quizarea");
// The Question
var currentQuestion = document.getElementById("question");
// Answer Options Container
var answerOptions = document.getElementById("answeroptions");
// Answer Options
var ansOne = document.getElementById("ansOne");
var ansTwo = document.getElementById("ansTwo");
var ansThree = document.getElementById("ansThree");
var ansFour = document.getElementById("ansFour");
// Next Question Button
var nextQuestion = document.getElementById("nextquestion");
// Feedback Section
var feedBack = document.getElementById("feedback");

// GLOBAL VARIABLES

// Tells us if the player is playing.
var isPlaying = true;

// Tells us which question we are on.
var question = 0;

// Stores the correct answer for any given question.
var correct;

// Stores the player score.
var score = 0;

// QUESTION SET
var questions = [
// Question 1
["What is my name?", ["Joe", "Bob", "Jeff", "Wrong"], 1],
// Question 2
["How old am I?", [10, 12, 21, 120], 3],
// Question 3
["Dog Name?", ["a", "Bella", "b", "c"], 2],
// Question 4
["Lives in?", ["a", "b", "c", "Seattle"], 4],
]

// FUNCTIONS-------------------------------------------------------------------

// Sets new question and updates answers.
function newQuestion(questionNum) {
    currentQuestion.textContent = questions[questionNum][0];
    ansOne.textContent = questions[questionNum][1][0];
    ansTwo.textContent = questions[questionNum][1][1];
    ansThree.textContent = questions[questionNum][1][2];
    ansFour.textContent = questions[questionNum][1][3];
    correct = questions[questionNum][2];
}

// Checks the answer based on button clicked.
function checkAnswer(answerValue) {
    if (answerValue == correct) {
        score += 1;
    }
}

// EVENT LISTENERS

// Next Question Button
nextQuestion.addEventListener("click",)
// Ans1
ansOne.addEventListener("click",)
// Ans2
ansTwo.addEventListener("click",)
// Ans3
ansThree.addEventListener("click",)
// Ans4
ansFour.addEventListener("click",)




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