const quizzes = [
  {
    question: "------------ is the father of computer.",
    answers: ["Blaise Pascal", "Herman Hollerith", "Ada Byron", "Charles Babbage"],
    correctAnswer: "Charles Babbage"
  },
  {
    question: "Tarbulating Mechine was invented by ----------- .",
    answers: ["Blaise Pascal", "Herman Hollerith", "Ada Byron", "Charles Babbage"],
    correctAnswer: "Charles Babbage"
  },
  {
    question: "A desktop computer is also known as",
    answers: ["PC", "Laptop", "Mainframe", "Palmtop"],
    correctAnswer: "PC"
  },
  {
    question: "CPU is the ----------- of computer",
    answers: ["Brain", "Ear", "Eye", "None of the above"],
    correctAnswer: "Brain"
  },
  {
    question: "----------- computer is the most powerful computer",
    answers: ["Mini", "Micro", "Super", "Mainframe"],
    correctAnswer: "Super"
  },
]

let submitBtn = document.querySelector('.btn')
let question = document.querySelector('#question')
let answerList = document.querySelector('#list')
let radioBtn = document.getElementsByTagName('input')

let totalScore = document.querySelector('#totalScore')
let score = 0;

let heading = document.querySelector('#heading')

totalScore.textContent = `Current score : ${score}`;

let index = 0;

// load data
function FetchQuizData() {

  // load question
  question.textContent = `${index + 1}. ${quizzes[index].question}`

  // load answers
  for(let answerIndex = 0; quizzes[index].answers[answerIndex]; answerIndex++) {
    answerList.innerHTML = `
      <li>
        <input type="radio" name="answer" id="a" value="${quizzes[index].answers[0]}">
        <label for="a" class="answer-label">${quizzes[index].answers[0]}</label>
      </li>
      <li>
        <input type="radio" name="answer" id="b" value="${quizzes[index].answers[1]}">
        <label for="b" class="answer-label">${quizzes[index].answers[1]}</label>
      </li>
      <li>
        <input type="radio" name="answer" id="c" value="${quizzes[index].answers[2]}">
        <label for="c" class="answer-label">${quizzes[index].answers[2]}</label>
      </li>
      <li>
        <input type="radio" name="answer" id="d" value="${quizzes[index].answers[3]}">
        <label for="d" class="answer-label">${quizzes[index].answers[3]}</label>
      </li>
    `
  }
}

FetchQuizData()

submitBtn.addEventListener('click', () => {

  index++;

  Array.from(radioBtn).forEach(eachBtn => {

    function Result() {
  
      if(eachBtn.value == quizzes[index-1].correctAnswer){
        totalScore.textContent = `Current score : ${score + 1}`;
        return score++
      }
      else {
        totalScore.textContent = `Current score : ${score}`;
        return score
      }
    }

    if(eachBtn.checked){
      Result()
      
      if(index < quizzes.length) {

        FetchQuizData()
        
      }
      else {
        heading.textContent = "No question left"
      }
    }

  })


})