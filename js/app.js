let firstCard;
let secondCard;

const boxes = document.querySelectorAll('.box')
const container = document.querySelector('.container')

const cardBack = (card) => {
    card.classList.toggle('front')
}

const checkMatch = (first, second) => {
    // console.log('first card', first)
    // console.log('second card', second)
    if (first && second) {
        if (first.innerText === second.innerText) {
            console.log('Match')
            setTimeout(() => {
                first.style.visibility = 'hidden'
                second.style.visibility = 'hidden'
                // first.classList.add('front')
                // second.classList.add('front')
            }, "2000");
            
            
        } else {
            console.log('No match')
            setTimeout(() => {
                first.classList.add('front')
                second.classList.add('front')
              }, "2000");
        }
    } else {
        console.log('pick another card')
    }

}

const setFirstCard = (e) => {
    firstCard = e.target
    firstCard.setAttribute('id', 'first')
    cardBack(firstCard)
    if (firstCard) {
        container.removeEventListener('click', setFirstCard)
        container.addEventListener('click', setSecondCard)
    }
}
const setSecondCard = (e) => {
    secondCard = e.target
    secondCard.setAttribute('id', 'second')
    cardBack(secondCard)
    const second = document.querySelector('#second')
    const first = document.querySelector('#first')
    if (secondCard) {
        container.removeEventListener('click', setSecondCard)
    }
    checkMatch(first, second)
}

container.addEventListener('click', setFirstCard)
