var timeRemaining = 25;
var intervalId;
var correctAnswer;
var userAnswer;
var numCorrect = 0;
var numWrong = 0;
var numUnanswered = 0;



// // click events 


$("#start-game").click(startTimer);

// click events 


function startTimer() {
    $("#timer1").text("Time Remaining: " + timeRemaining);
    setInterval(decrement, 1000);
    $("#start-game").hide();
    displayQuestions();

}

function decrement() {
    timeRemaining--;
    $("#timer1").text("Time Remaining" + timeRemaining);
    if (timeRemaining === 0) {
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(intervalId);
    keepScore();
}


function keepScore() {
    for (var i = 0; i < quizQuestions.length; i++) {
        correctAnswer = quizQuestions[i].correct;
        console.log(correctAnswer);
        console.log(userAnswer);
        if (userAnswer === correctAnswer) {
            numCorrect++;
        } else if (userAnswer === "") {
            numUnanswered++;
        } else if (userAnswer !== correctAnswer) {
            numWrong++;
        }


    }
    showResults(numCorrect, numWrong, numUnanswered);
}


function showResults(numWrong, numCorrect, numUnanswered) {

    $("#resultBox").show();
    $("#questions").empty();
    $("#timer1").empty();
    $("#timer1").hide();
    $("#correctAnswers").text("Correct Answers: " + numCorrect);
    $("#wrongAnswers").text("Wrong Answers: " + numWrong);
    $("#noAnswer").text("Questions you Skipped: " + numUnanswered);
}

function displayQuestion() {
    var questionContainer = $("#questions");
    var answerChoices = $(".form-check");

    for (var i = 0; i < quizQuestions.length; i++) {

        var choice1 = quizQuestions[i].answers[0];
        var choice1 = quizQuestions[i].answers[1];
        var choice1 = quizQuestions[i].answers[2];

        questionContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + choice1 + '</label></div>');
        questionContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + choice2 + '</label></div>');
        questionContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + choice3 + '</label></div>');
    }

    var endOfQuizButton = '<button type="button" id="quizEnd" type="submit">FINISH!</button>'
    questionContainer.append(quizEndButton);
    $("#quizEnd").on("click", stopTimer);
}



// questions 

var quizQuestions = [
    {
        question: "When was Apple founded ? ",
        answers: ["April 1, 1976", "June 7, 1980", "August 5, 1995", "January 1, 1985"],
        correctAnswer: "April 1, 1976"
    },
    {
        question: "What does IBM stand for?",
        answers: ["International Blue Mechanics", "Indigo Blue Mate", "International Business Machines", , "Intact Buying Modules"],
        correctAnswer: "International Business Machines"
    },

    {
        question: "Who created the first computer program??",
        answers: ["Ada Lovelace", "Charles Babbage", "Lord Byron", "Grace Hopper"],
        correctAnswer: "Ada Lovelace"
    }, {
        question: "What does HTML stand for?",
        answers: ["Hello There Mary Lou", "Hypertext Markup Language", "Hidden Text Machine Language", "Hurdle Tender Meetup Loft"],
        correctAnswer: "Hypertext Markup Language"
    },

    {
        question: "What is the use of JavaScript?",
        answers: ["Client scripting language", "Meal delivery service", "Editing photos", "Software encryption"],
        correctAnswer: "Client scripting language"
    }, {
        question: "Who fouded Microsoft?",
        answers: ["Bill Gates and Paul Allen", "Steve Jobs", "Daniel Cesar", "Hieronymous Bosch"],
        correctAnswer: "Bill Gates and Paul Allen"
    }
]



// run the timer

// var c = 200;

// function timer01() {
//     c = c - 1;
//     if (c < 200) {
//         timer1.innerHTML = c;
//     }
//     if (c < 1) {
//         window.clearInterval(update);
//     }
// }

//update = setInterval("timer01()", 1000); 





