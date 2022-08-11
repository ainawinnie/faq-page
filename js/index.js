const questions = document.querySelectorAll('.question')
const questionTab = document.querySelectorAll('.question-group')
const answers = document.querySelectorAll('.answer')

questionTab.forEach((question) => {
    question.addEventListener('click', () => {
        questionTab.forEach((item) => {
            if (item !== question) {
                const answer = item.querySelectorAll('.answer')
                answer[0].style.display = 'none'
                console.log('aqui')
            } else {
                const answer = item.querySelectorAll('.answer')
                answer[0].style.display = 'flex'
                console.log(answer[0])
            }
        })
    })
})