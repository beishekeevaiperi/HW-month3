// №1
const gmailInput = document.getElementById('gmail_input'),
    gmailBtn = document.getElementById('gmail_button'),
    gmailResult = document.getElementById('gmail_result')


const regExp = /^(.+)@(gmail.com)$/ 

gmailBtn.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    }else{
        gmailResult.innerHTML = "Непрваильный Формат"
        gmailResult.style.color = "red"
}
    }


const childBlock = document.querySelector('.child_block')
let positionX = 0, positionY = 0


const moveBlock = () => {
    if (positionX <= 440 && positionY === 0){
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 0)
    } else if(positionY <= 440 && positionX > 440){
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 0)
    }else if (positionX >= 0){
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 0)
    }else if (positionY >= 0){
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 0)
    }
}

moveBlock()

let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let mlSeconds = document.getElementById('ml-seconds')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')
const resume = document.getElementById('resume')

minuteS = 0
secondS = 0
mlSecondS = 0

startBtn.onclick = function () {
    const timerId = setInterval(function () {
            if (mlSecondS <= 59){
                mlSecondS++
                mlSeconds.innerHTML = mlSecondS.toString().padStart(2, "0"); 
            } else if ( secondS <= 59){
                mlSecondS = 0
                secondS++
                seconds.innerHTML = secondS.toString().padStart(2, "0") ;
            } else if (minuteS <= 59) { 
                secondS = 0
                minuteS++
                minutes.innerHTML = minuteS.toString().padStart(2, "0");
            }
    }, 10)
    stopBtn.onclick = function () {
        clearInterval(timerId);
    }
    resetBtn.onclick = function () {
        clearInterval(timerId)
        minuteS = 0
        secondS = 0
        mlSecondS = 0
        minutes.innerHTML = "00"
        seconds.innerHTML = "00"
        mlSeconds.innerHTML = "00"
    }
    resume.onclick = function () {
        const timerId = setInterval(function () {
            if (mlSecondS <= 59){
                mlSecondS++
                mlSeconds.innerHTML = mlSecondS.toString().padStart(2, "0"); 
            } else if ( secondS <= 59){
                mlSecondS = 0
                secondS++
                seconds.innerHTML = secondS.toString().padStart(2, "0") ;
            } else if (minuteS <= 59) { 
                secondS = 0
                minuteS++
                minutes.innerHTML = minuteS.toString().padStart(2, "0");
            }
    }, 10)
    stopBtn.onclick = function () {
        clearInterval(timerId);
    }
    }
}
    const request = new XMLHttpRequest();
    request.open('GET', `../data/persons.json`)
    request.setRequestHeader('Content-type', 'application/json')
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response);
        console.log(data)
    })







// // Автоматический слайдер
// let slideIndex = 0;
// const slides = document.querySelectorAll('.slide');

// function showSlides() {
//     slides.forEach(slide => slide.style.display = 'none'); // Скрыть все слайды
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1; }
//     slides[slideIndex - 1].style.display = 'block'; // Показать текущий слайд
// }

// setInterval(showSlides, 3000); // Переключение слайдов каждые 3 секунды

// showSlides(); // Показать первый слайд

// // Модальное окно при скролле до конца страницы
// const modal = document.getElementById('modal');
// let isModalShown = false;

// function showModalOnScroll() {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !isModalShown) {
//         modal.style.display = 'block';
//         isModalShown = true;
//         window.removeEventListener('scroll', showModalOnScroll); // Удаление обработчика после первого вызова
//     }
// }

// window.addEventListener('scroll', showModalOnScroll);

// // Открытие модального окна через 10 секунд после загрузки страницы
// setTimeout(() => {
//     if (!isModalShown) {
//         modal.style.display = 'block';
//         isModalShown = true;
//     }
// }, 10000);
