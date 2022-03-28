const cardArray = [
    {
        name : 'fries',
        img : './img/fries.png'
    },
    {
        name : 'cheeseburger',
        img : './img/cheeseburger.png'
    },
    {
        name : 'hotdog',
        img : './img/hotdog.png'
    },
    {
        name : 'ice-cream',
        img : './img/ice-cream.png'
    },
    {
        name : 'milkshake',
        img : './img/milkshake.png'
    },
    {
        name : 'pizza',
        img : './img/pizza.png'
    },
    {
        name : 'fries',
        img : './img/fries.png'
    },
    {
        name : 'cheeseburger',
        img : './img/cheeseburger.png'
    },
    {
        name : 'hotdog',
        img : './img/hotdog.png'
    },
    {
        name : 'ice-cream',
        img : './img/ice-cream.png'
    },
    {
        name : 'milkshake',
        img : './img/milkshake.png'
    },
    {
        name : 'pizza',
        img : './img/pizza.png'
    }
];

cardArray.sort(() => 0.5 - Math.random()); //Shortcut to shuffle through an array randomly

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard(){
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'img/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      gridDisplay.append(card)
    }
};

createBoard();

function flipCard(){
    const cardID = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenIds.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
 };

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if(optionOneId === optionTwoId){
        cards[optionOneId].setAttribute('src', 'img/blank.png')
        cards[optionTwoId].setAttribute('src', 'img/blank.png')
        alert('You have clicked the same image')
    }

    if(cardsChosen[0]  == cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'img/white.png')
        cards[optionTwoId].setAttribute('src', 'img/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else{
        cards[optionOneId].setAttribute('src', 'img/blank.png')
        cards[optionTwoId].setAttribute('src', 'img/blank.png')
        alert('Sorry, try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = "Congratulations, you found them all!"
    }
};

