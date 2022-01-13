document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const timeLeft = document.querySelector('#time-left')
    const result = document.querySelector('#result')
    const startBtn = document.querySelector('#button')
    const carsLeft = document.querySelector('.car-left')
    const carsRight = document.querySelector('.car-right')
    const logsLeft = document.querySelector('.log-left')
    const logsRight = document.querySelector('.log-right')
    const width = 9
    let currentIndex = 76
    let timerId

    //render frog on starting block
    squares[currentIndex].classList.add('frog')

    //write a function that will move the Frog
    function moveFrog(e) {
        squares[currentIndex].classList.remove('frog')
        switch (e.keyCode) {
            case 'ArrowLeft':
                if (currentIndex % width !== 0) currentIndex -= 1
                break
            case 'ArrowUp':
                if (currentIndex - width >= 0) currentIndex -= width
                break
            case 'ArrowRight':
                if (currentIndex % width < width - 1) currentIndex += 1
                break
            case 'ArrowDown':
                if (currentIndex + width < width * width) currentIndex += width
                break
        }
        squares[currentIndex].classList.add('frog')
        lose()
        win()
    }

    //move cars
    function autoMoveCars() {
        carsLeft.forEach(carLeft => moveCarLeft(carLeft))
        carsRight.forEach(carRight => moveCarRight(carRight))
    }

})