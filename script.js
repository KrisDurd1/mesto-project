const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
    ];

const profilePopup = document.querySelector('#profilePopup');
const formElement = document.querySelector('#profileForm');
const popupButtonOpen = document.querySelector('.profile__edit-button');
const profileFullname = document.querySelector('#profileUsername');
const profileJob = document.querySelector('#profileDescription');
const nameInput = document.querySelector('#formsName');
const jobInput = document.querySelector('#formsDescription');

const cardTemplate = document.querySelector('#cardTemplate');
const cardsList = document.querySelector('.elements');
const cardBlock = document.querySelector('.cards').cloneNode(true);


const addButtonOpen = document.querySelector('.profile__add-button'):
const cardAddPopup = document.querySelector('#cardAddPopup');
const addFormElement = document.querySelector('#formAdd');
const placeInput = document.querySelector('.forms__mesto'); <!-- возможно # -->
const linkInput = document.querySelector('.popup__caption');

const imageModal = document.querySelector('#imagePopup');
const imagePop = document.querySelector('.popup__image');
const captionPop = document.querySelector('.popup__caption');

const closeButtons = document.querySelectorAll('.popup__close-button');

const profileName = {
  name: 'Жак-Ив Кусто',
  occupation: 'Исследователь океана'
}


//удаление
function deleteCard (defaultCard) {
  defaultCard.querySelector('.cards__delete').addEventListener('click', () => {
    const listItem = defaultCard.closest('.cards');
    listItem.delete();
  });
}
