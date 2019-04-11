//why doesn't my timer work?
$(document).ready(function () {
  //add timer?

  var timeInSecs;
  var ticker;

  function startTimer(secs) {
    timeInSecs = parseInt(secs) - 1;
    ticker = setInterval(tick, 1000); // every second
  }

  function tick() {
    var secs = timeInSecs;
    if (secs > 0) {
      timeInSecs--;
    }

    else {
      clearInterval(ticker); window.alert("Sorry, time is up! Review score at bottom of screen") // stop counting at zero
      // startTimer;  // remove forward slashes in front of startTimer to repeat if required
    }

    document.getElementById("counter").innerHTML = "00:" + secs;
    
  }
  
  startTimer(60); 
  $("#imagePlace1, #imagePlace2, #imagePlace3, #imagePlace4, #imagePlace5").hide();
  $("#imagePlace1").show();

  // Display the first question
  displayCurrentQuestion();
  $(this).find(".quizMessage").hide();

  // On clicking next, display the next question--do I need another function here to add the image function displayImage() {
  //$("#image-holder").html("<img src=PICK AN IMAGE); for loop?
   
  //
  $(this).find(".nextButton").on("click", function () {
    
    if (!quizOver) {

      value = $("input[type='radio']:checked").val();

      if (value == undefined) {
        $(document).find(".quizMessage").text("Please select an answer");
        $(document).find(".quizMessage").show();
      } else {

        $(document).find(".quizMessage").hide();

        if (value == questions[currentQuestion].correctAnswer) {
          correctAnswers++;
        }

        currentQuestion++;
        if (currentQuestion < questions.length) {
          displayCurrentQuestion();
          $("#imagePlace1, #imagePlace2, #imagePlace3, #imagePlace4, #imagePlace5").hide();
          $(`#imagePlace${currentQuestion + 1}`).show();
        } else {
          displayScore();
          //                    $(document).find(".nextButton").toggle();
          //                    $(document).find(".playAgainButton").toggle();

          $(document).find(".nextButton").text("Play Again?");
          quizOver = true;
        }
      }
    } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
      quizOver = false;
      $(document).find(".nextButton").text("Next Question");
      resetQuiz();
      displayCurrentQuestion();
      hideScore();
    }
  });

});

// current question AND the choices
function displayCurrentQuestion() {

  //console.log("In display current Question");

  var question = questions[currentQuestion].question;
  var questionClass = $(document).find(".quizContainer > .question");
  var choiceList = $(document).find(".quizContainer > .choiceList");
  var numChoices = questions[currentQuestion].choices.length;

  // Set the questionClass text to the current question
  $(questionClass).text(question);

  // Remove all current <li> elements (if any)
  $(choiceList).find("li").remove();

  var choice;
  for (i = 0; i < numChoices; i++) {
    choice = questions[currentQuestion].choices[i];
    $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
  }
}

function resetQuiz() {
  currentQuestion = 0;
  correctAnswers = 0;
  hideScore();
}

function displayScore() {
  $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
  $(document).find(".quizContainer > .result").show();
}

function hideScore() {
  $(document).find(".result").hide();
}
//add questions and answers

var questions = [{
  question: "Bite the bullet",
  choices: [
    "During battle, if anesthesia could not be administered, surgeons made patients bite down on a bullet to get their mind off the pain",
    "During WW1, in order to not be heard by the enemy, soldiers would bite on a bullet to keep from making a sound",
    "Pre 18th century soldiers would bite down on their bullets before they loaded their muskets in order to load properly"],
  correctAnswer: 0
}, {
  question: "Caught red handed",
  choices: [
    "Painters that created a poor canvas for their client and tried to cover it up were considered frauds and labeled as a red handed painer or 'caught red handed'",
    "In law, if someone butchered an animal that didn’t belong to him, he had to be caught with the animal’s blood on his hands to be convicted",
    "During the 17th century, criminals who stole from vendors would have their hand 'chopped off' and rendered as 'caught red handed' "],
  correctAnswer: 1
}, {
  question: "Give the cold shoulder",
  choices: [
    "In medieval England, after a feast, the host would let his guests know it was time to leave by giving them a cold piece of meat from the shoulder of beef, mutton, or pork",
    "Eskimos often bathe in frigid open waters. Eskimos that forgot their towel would be made fun of, in return, they give those people their cold shoulder to look at as a form of displeasure",
    "Prior to 20th century, children were often sent outside to sleep in the cold when they were naughty, hence, they were given the 'cold shoulder'"],
  correctAnswer: 0
}, {
  question: "Go the whole nine yards",
  choices: [
    "On pirate ships, the distance a prisoner walks from the cells to the end of the plank was considered the whole nine yards",
    "In the game Cricket, if a player hits the ball through 2 wickets consecutively it is said they went the whole nine yards",
    "World War II Fighter pilots received a 9 yard chain of ammunition. When a pilot used all of his ammunition on one target, he gave it the whole 9 yards"],
  correctAnswer: 2
}, {
  question: "More than you can shake a stick at",
  choices: [
    "In Africa, shells and sticks were used as currency. If a produce vendor had a great crop other vendors would say they had more than they could shake a stick at",
    "Polyneseans built their homes with sticks, mud and palms. After a hurricane would blow through, the massive amounts of debris left behind was enough to build their villages; they would often say it was more than you can shake a stick at",
    "Farmers controlled their sheep by shaking their staffs to indicate where the animals should go. When farmers had more sheep than they could control, it was said they had more than you can shake a stick at"],
  correctAnswer: 2
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;