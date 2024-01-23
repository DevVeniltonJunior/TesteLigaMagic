const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const cardList = [
  './assets/card1.png',
  './assets/card2.png',
  './assets/card3.png',
]
const cards = [
  '#item-1',
  '#item-2',
  '#item-3',
]

prev.addEventListener('click',()=>{
  const card = document.querySelector('#card img')
  const index = cardList.indexOf(card.getAttribute('src'))
  console.log(index-1 > 0)
  if(index > 0) {
    card.setAttribute('src',cardList[index-1])
    selectedCard(index, index-1)
  }
  else {
    card.setAttribute('src',cardList[cardList.length-1])
    selectedCard(index, cardList.length-1)
  }
})

next.addEventListener('click',()=>{
  const card = document.querySelector('#card img')
  const index = cardList.indexOf(card.getAttribute('src'))
  console.log(index+1)
  if(index+1 === cardList.length) {
    card.setAttribute('src',cardList[0])
    selectedCard(index, 0)
  }
  else {
    card.setAttribute('src',cardList[index+1])
    selectedCard(index, index+1)
  }
})

const selectedCard = (index, nextIndex) => {
  const card = document.querySelector(cards[index])
  card.classList.remove('active')
  const nextCard = document.querySelector(cards[nextIndex])
  nextCard.classList.add('active')
}

const card_qtd = document.getElementById('card_qtd')
card_qtd.innerHTML = 1

const addQtd = document.querySelector('.add_qtd')
const subQtd = document.querySelector('.sub_qtd')

addQtd.addEventListener('click',()=>{
  card_qtd.innerHTML++
})

subQtd.addEventListener('click',()=>{
  if(card_qtd.innerHTML > 1) card_qtd.innerHTML--
})

const favorite = document.querySelector('#favorite')
favorite.addEventListener('click',()=>{
  favorite.classList.toggle('favorited')
  favorite.classList.contains('favorited') ? favorite.setAttribute('src','./assets/favorited_icon.svg') : favorite.setAttribute('src','./assets/favorite_icon.svg')
})

const addListText = document.querySelector('#add_list_text')
addListText.innerHTML = 'ADICIONAR A LISTA'

const addList = document.querySelector('#add_list')
addList.addEventListener('click',()=>{
  const add_icon = document.querySelector('#add_list_icon')
  addList.classList.toggle('added')
  if(addList.classList.contains('added')) {
    addListText.innerHTML = 'ADICIONADO'
    add_icon.setAttribute('src','./assets/checkmark.svg')
  }
  else {
    add_icon.setAttribute('src','./assets/plus_icon.svg')
    addListText.innerHTML = 'ADICIONAR A LISTA'
  }
})
