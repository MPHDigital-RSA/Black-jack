// retrieve the buttons from the DOM
let startGame = document.querySelector("#start-game-btn")
let newCard = document.querySelector("#new-card-btn")

// retrieve the text elements from the DOM
let messageEl = document.querySelector("#message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEL = document.querySelector("#sum-el")

let num1 = generateRandomNumber()
let num2 = generateRandomNumber()
let cards = []

cards.push(num1)
cards.push(num2)

let sum = cards[0] + cards[1]


startGame.addEventListener("click", function(){
    renderGame()
})

newCard.addEventListener("click", function(){
    let newCard = generateRandomNumber()
    cards.push(newCard)
    sum = sum + newCard
    renderGame()
})

// create a generate random number function, to generate a random number between 1 to 13.

function generateRandomNumber(){
    return Math.floor(Math.random()*13) + 1
}

// create a function to run called render the game, the function will render the game where ever necessary

function renderGame(){
    
    cardsEl.textContent = "cards: "

    for(card of cards){
        cardsEl.textContent += card + " "
    }

    sumEL.textContent = "Sum: " + sum
    if( sum < 21){     
        messageEl.textContent = "Draw another card!"
    }else if( sum === 21){
        messageEl.textContent = "You Won!"
    }
    else{
        messageEl.textContent = "You Lose!"
    }

}
