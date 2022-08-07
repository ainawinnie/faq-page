const questions = document.querySelectorAll('.question')
const questionTab = document.querySelectorAll('.question-group')
const answers = document.querySelectorAll('.answer')

console.log(questionTab[1].classList)

questionTab.forEach((question)=>{
    question.addEventListener('click',showAnswer)
})

function showAnswer(e){

    console.log(e.classLists)
    
}