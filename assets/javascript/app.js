// click events 
$(document).on('click', '#start-over', function (b) {
    game.reset();
});

$(document).on('click', '.answer-button', function (b) {
    game.clicked(b);
});

$(document).on('click', '#start', function (b) {
    $('#smart').prepend('<text>Time: <text id="timer1">200</text></text><br />');
    game.loadQuestion();
});



function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        var output = [];
        var answers;

        for (var i = 0; i < questions.length; i++) {

            answers = [];

            for (letter in questions[i].answers) {

                answers.push(
                    '<label>'
                    + '<input type= "radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]

                    + '<label>'
                );
            }
        }
        output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'

        );
    }

    quizContainer.innerHTML = output.join('');
}


function showResults(questions, quizContainer, resultsContainer) {

    var answerContainers = quizContainer.querySelectorAll('.answers');

    var userAnswer = '';
    var numCorrect = 0;

    for (var i = 0; i < questions.length; i++) {

        if (userAnswer === questions[i].correctAnswer) {
            numCorrect++;

            answerContainers[i].style.color = 'blue';

        }
        else {

            answerContainers[i].style.color = 'green';
        }

    }

    resultsContainer.innerHTML = numCorrect + 'out of' + questions.length;
}

showQuestions(questions, quizContainer);


submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
}


// questions 

var myQuestions = [
    {
        question: "When was Apple founded ? ",
        answers: {
            a: "April 1, 1976",
            b: "June 7, 1980",
            c: "August 5, 1995",
            d: "January 1, 1985"
        },
        correctAnswer: 'a'
    }, {
        question: "What does IBM stand for?",
        answers: {
            a: "International Blue Mechanics",
            b: "Indigo Blue Mate",
            c: "International Business Machines",
            d: "Intact Buying Modules"
        },
        correctAnswer: 'c'
    }, {
        question: "Who created the first computer program??",
        answers: {
            a: "Ada Lovelace",
            b: "Charles Babbage",
            c: "Lord Byron",
            d: "Grace Hopper"
        },
        correctAnswer: 'a'
    }, {
        question: "What does HTML stand for?",
        answers: {
            a: "Hello There Mary Lou",
            b: "Hypertext Markup Language",
            c: "Hidden Text Machine Language",
            d: "Hurdle Tender Meetup Loft"
        },
        correctAnswer: 'b'
    }, {
        question: "What is the use of JavaScript?",
        answers: {
            a: "Client scripting language",
            b: "Meal delivery service",
            c: "Editing photos",
            d: "Software encryption"
        },
        correctAnswer: 'a'
    }, {
        question: "Who fouded Microsoft?",
        answers: {
            a: "Bill Gates and Paul Allen",
            b: "Steve Jobs",
            c: "Daniel Cesar",
            d: "Hieronymous Bosch"
        },
        correctAnswer: 'a'
    }];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);






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