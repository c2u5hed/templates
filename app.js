const cards = [
  {
    image: 'https://picsum.photos/200?card=1',
    alt: 'Фотография молодой пары, гуляющей на пляже.',
    heading: 'Карточка 1'
  },
  {
    image: 'https://picsum.photos/200?card=2',
    alt: '',
    heading: 'Карточка 2'
  },
  {
    image: 'https://picsum.photos/200?card=3',
    alt: '',
    heading: 'Карточка 3'
  }
]

const page = document.querySelector('.page')

function createCard(card) {
  const newCard = document.querySelector('#cardTemplate').content.cloneNode(true)
  const cardHeading = newCard.querySelector('.card__heading')
  cardHeading.textContent = card.heading
  const cardImage = newCard.querySelector('.card__image')
  cardImage.setAttribute('src', card.image)
  cardImage.setAttribute('alt', card.alt)
  const deleteButton = newCard.querySelector('.card__button')
  deleteButton.addEventListener('click', handleDeleteButtonClick)
  page.append(newCard)
}

cards.forEach(createCard)

function handleDeleteButtonClick(event) {
  const button = event.target
  const card = button.closest('.card')
  card.remove()
}