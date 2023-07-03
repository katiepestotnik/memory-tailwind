let firstCard;
let secondCard;

const boxes = document.querySelectorAll('.box')
const container = document.querySelector('.container')

const checkMatch = (first, second) => {
    if (first && second) {
        if (first.innerText === second.innerText) {
            alert('Match')
        } else {
            alert('No match')
        }
    } else {
        alert('pick another card')
    }

}

const setFirstCard = (e) => {
    firstCard = e.target
    firstCard.setAttribute('id', 'first')
    if (firstCard) {
        container.removeEventListener('click', setFirstCard)
        container.addEventListener('click', setSecondCard)
    }
}
const setSecondCard = (e) => {
    secondCard = e.target
    secondCard.setAttribute('id', 'second')
    const second = document.querySelector('#second')
    const first = document.querySelector('#first')
    if (secondCard) {
        container.removeEventListener('click', setSecondCard)
    }
    checkMatch(first, second)
}


container.addEventListener('click', setFirstCard)