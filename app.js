const cards = [
  {
    image: 'https://picsum.photos/200?card=1',
    heading: 'Карточка 1'
  },
  {
    image: 'https://picsum.photos/200?card=2',
    heading: 'Карточка 2'
  },
  {
    image: 'https://picsum.photos/200?card=3',
    heading: 'Карточка 3'
  },
]

const page = document.querySelector('.page')

cards.forEach(function(card) {
  const cardHTML = `<div class="card">
    <img src="${card.image}" class="card__image">
    <div class="card__footer">
      <span class="card__heading">${card.heading}</span>
      <button class="card__button">Удалить</button>
    </div>
  </div>`
  page.insertAdjacentHTML('beforeend', cardHTML)
})