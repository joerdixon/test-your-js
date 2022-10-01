/* USER INPUT/OUTPUT EXPECTED:
    Start button to start game. / Change screen to first question and start timer
    View Highscores link to view highscores / Change html pages and pull localStorage
    Selecting a answer to a question. / Feedback on wrong or right and next question served
    username and submittal for a saved highscore / take them back to the starting screen.

PSEUDOCODE----------------------------------

A user clicks on the link to this website

        They are presented with a "start" button and basic information about the game.

        When they click "view high scores", they will be taken to another page within the website that shows them thier previous highscores saved in local storage. If they do not have any scores they will see a message informing them of this.

When they click "Start":

        The content of the elements will change to include a question and 4 possible answers beneath.

        The game timer will begin counting down.

        if the timer hits zero, they will lose and be shown a "You lost" screen.


When they select an answer:

        The feedback section will be updated to reflect the correctness of their answer.

        There is a delay of 1-2 seconds for them to read the feedback

        The feedback section will be cleared.

        They will be served a new question with a new set of possible answers.

When the timer reaches 0:

        The player will recieve a notification that they ran out of time.

        They will be presented with a try again button which, when clicked, will take them back to the start screen.

When they complete the quiz:

        The time remaining on the timer will become their score for the round.

        They shown their score.

        They will be prompted for a username to save their score under which will be commited to local storage along with their score.

        Once they save thier highscore they will be returned to the start screen incase they want to play again.





*/