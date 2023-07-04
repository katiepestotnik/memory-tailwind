let firstCard;
let secondCard;

//css classes for boxes
//box front bg-teal-500 border-2 border-slate-100 flex justify-center items-center h-20
const container = document.querySelector('.container')
const choiceContainer = document.querySelector('.choice-container')
const playerChoiceButton = document.querySelectorAll('.player-button')
const directions = document.querySelector('.directions')

const handleContent = () => {
    const boxContent = document.querySelectorAll('.box')
    boxContent.forEach((box, n) => {
        if (n % 2 === 0) box.innerText = 'ONE'
        else box.innerText = 'TWO'
    })

}

const displayBoxes = (num) => {
    for (let i = 0; i < num; i++) {
        const boxesDiv = document.createElement('div')
        boxesDiv.className = 'box front bg-teal-500 border-2 border-slate-100 flex justify-center items-center h-20'
        container.append(boxesDiv)
        playerChoiceButton.forEach((button) => {
            button.setAttribute('disabled', true)
            button.style.backgroundColor = 'rgb(241 245 249)'
            button.value = ''
            directions.innerText = 'GOOD LUCK!!'
        })
    }
    handleContent()
}



const handleChoice = (e) => {
    const selection = Number(e.target.value)
    displayBoxes(selection)
}
const boxes = document.querySelectorAll('.box')
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
choiceContainer.addEventListener('click', handleChoice)
container.addEventListener('click', setFirstCard)