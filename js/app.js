let firstCard;
let secondCard;
let count;
const eight = ['3', '4' , '1', '4', '2', '2', '1', '3']
const twelve = ['5', '3' , '6', '1', '2', '1', '4', '2', '5' , '6', '4', '3']
const sixteen = ['8', '7' , '3', '1', '6', '5', '3', '7', '6' , '5', '8', '1', '2' , '2', '4', '4']
const twenty = ['9', '2', '1', '4', '7', '6', '8', '10', '9', '8', '2', '3', '5', '6', '10', '7', '1', '4', '5', '3']

const container = document.querySelector('.container')
const choiceContainer = document.querySelector('.choice-container')
const playerChoiceButton = document.querySelectorAll('.player-button')
const directions = document.querySelector('.directions')
//use array matching # cards to set content to match
const handleContent = (n) => {
    const boxContent = document.querySelectorAll('.box')
    if (n === 8) {
        boxContent[0].innerText = eight[0]
        boxContent[1].innerText = eight[1]
        boxContent[2].innerText = eight[2]
        boxContent[3].innerText = eight[3]
        boxContent[4].innerText = eight[4]
        boxContent[5].innerText = eight[5]
        boxContent[6].innerText = eight[6]
        boxContent[7].innerText = eight[7]    
    } else if (n === 12) {
        boxContent[0].innerText = twelve[0]
        boxContent[1].innerText = twelve[1]
        boxContent[2].innerText = twelve[2]
        boxContent[3].innerText = twelve[3]
        boxContent[4].innerText = twelve[4]
        boxContent[5].innerText = twelve[5]
        boxContent[6].innerText = twelve[6]
        boxContent[7].innerText = twelve[7]
        boxContent[8].innerText = twelve[8]
        boxContent[9].innerText = twelve[9]
        boxContent[10].innerText = twelve[10]
        boxContent[11].innerText = twelve[11]    
    } else if (n === 16) {
        boxContent[0].innerText = sixteen[0]
        boxContent[1].innerText = sixteen[1]
        boxContent[2].innerText = sixteen[2]
        boxContent[3].innerText = sixteen[3]
        boxContent[4].innerText = sixteen[4]
        boxContent[5].innerText = sixteen[5]
        boxContent[6].innerText = sixteen[6]
        boxContent[7].innerText = sixteen[7]
        boxContent[8].innerText = sixteen[8]
        boxContent[9].innerText = sixteen[9]
        boxContent[10].innerText = sixteen[10]
        boxContent[11].innerText = sixteen[11]
        boxContent[12].innerText = sixteen[12]
        boxContent[13].innerText = sixteen[13]
        boxContent[14].innerText = sixteen[14]
        boxContent[15].innerText = sixteen[15]
    } else if (n === 20) {
        boxContent[0].innerText = twenty[0]
        boxContent[1].innerText = twenty[1]
        boxContent[2].innerText = twenty[2]
        boxContent[3].innerText = twenty[3]
        boxContent[4].innerText = twenty[4]
        boxContent[5].innerText = twenty[5]
        boxContent[6].innerText = twenty[6]
        boxContent[7].innerText = twenty[7]
        boxContent[8].innerText = twenty[8]
        boxContent[9].innerText = twenty[9]
        boxContent[10].innerText = twenty[10]
        boxContent[11].innerText = twenty[11]
        boxContent[12].innerText = twenty[12]
        boxContent[13].innerText = twenty[13]
        boxContent[14].innerText = twenty[14]
        boxContent[15].innerText = twenty[15]
        boxContent[16].innerText = twenty[16]
        boxContent[17].innerText = twenty[17]
        boxContent[18].innerText = twenty[18]
        boxContent[19].innerText = twenty[19]
    }
}

const disableChoices = () => {
    playerChoiceButton.forEach((button) => {
        button.setAttribute('disabled', true)
        button.style.backgroundColor = 'rgb(241 245 249)'
        button.value = ''
        directions.innerText = 'GOOD LUCK!!'
    })
}

//create cards per # selection with styling classes and adjust container size accordingly
const displayBoxes = (num) => {
    for (let i = 0; i < num; i++) {
        const boxesDiv = document.createElement('div')
        boxesDiv.className = 'box front bg-teal-500 border-2 border-slate-100 flex justify-center items-center h-20'
        if (num === 8) {
            container.className = `border-2 border-slate-400 m-auto mt-5 w-3/4 h-fit grid grid-cols-2 grid-rows-4 gap-2 p-2`
        } else if (num === 12) {
            container.className = `border-2 border-slate-400 m-auto mt-5 w-3/4 h-fit grid grid-cols-4 grid-rows-3 gap-2 p-2`
        } else if (num === 16) {
            container.className = `border-2 border-slate-400 m-auto mt-5 w-3/4 h-fit grid grid-cols-4 grid-rows-4 gap-2 p-2`
        } else if (num === 20) {
            container.className = `border-2 border-slate-400 m-auto mt-5 w-3/4 h-fit grid grid-cols-4 grid-rows-5 gap-2 p-2`
        }
        container.append(boxesDiv)

    }
    disableChoices()
    handleContent(num)
}
//run the displayBoxes accoring to # of cards selection click
const handleChoice = (e) => {
    const selection = Number(e.target.value)
    count = selection
    displayBoxes(selection)
}
choiceContainer.addEventListener('click', handleChoice)

//toggle from back to front when user selects card, starts with front class
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
            }, "2000");
            
            
        } else {
            console.log('No match')
            setTimeout(() => {
                cardBack(first)
                cardBack(second)
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