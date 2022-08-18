const questions = document.querySelectorAll('.question')
const questionTab = document.querySelectorAll('.question-group')
const answers = document.querySelectorAll('.answer')

questionTab.forEach((question) => {
    question.addEventListener('click', () => {
        questionTab.forEach((item) => {
            if (item !== question) {
                const answer = item.querySelectorAll('.answer');
                const arrow = item.querySelectorAll('.open-arrow');
                answer[0].style.display = 'none';
                arrow[0].style.rotate = '0deg';
            } else {
                const answer = item.querySelectorAll('.answer');
                const arrow = item.querySelectorAll('.open-arrow');
                answer[0].style.display = 'flex';
                arrow[0].style.rotate = '180deg';
                console.log(answer[0])
            }
        })
    })
})