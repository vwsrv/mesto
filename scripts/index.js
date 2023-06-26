import { initialCards } from './elements.js'
import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js';
import { validationConfig } from './constants.js';

const openPopup = (popUp) => {
  initMouseHandler(popUp);
  document.addEventListener('keydown', keyHandler);
  popUp.classList.add('popup_opened');
}

const closePopup = (popUp) => {
  popUp.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyHandler, false);
}

const imageForm = document.querySelector('.popup_form_image');
const popupPicture = document.querySelector('.popup__picture');
const popupCaption = document.querySelector('.popup__caption');

const openImage = (link, title) => {
  openPopup(imageForm);
  popupCaption.textContent = title;
  popupPicture.src = link;
  popupPicture.alt = title;
};

document.querySelectorAll('.popup__close-btn').forEach(button => {
  const buttonsPopup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(buttonsPopup));
});

const initMouseHandler = (popUp) => {
  popUp.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popUp);
    }
  });
}

const popups = Array.from(document.querySelectorAll('.popup'))
popups.forEach((popup) => {
    popup.addEventListener('click', initMouseHandler(popup))
}) 

const keyHandler = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

const popupFormEdit = document.querySelector('.popup_form_edit');
const closeButtonEdit = popupFormEdit.querySelector('.popup__close-btn');
const editButton = document.querySelector('.profile__button-edit');
const newName = popupFormEdit.querySelector(".popup__input_type_name");
const newDescription = popupFormEdit.querySelector(".popup__input_type_description");
const defaultName = document.querySelector('.profile__name');
const defaultDescription = document.querySelector(".profile__description");
const formEditProfile = document.querySelector('#popup__form_edit');

const openEditPopup = () => {
  newName.value = defaultName.textContent;
  newDescription.value = defaultDescription.textContent;
};

const handlePopupEditSubmit = (evt) => {
  evt.preventDefault();
  defaultName.textContent = newName.value;
  defaultDescription.textContent = newDescription.value;
  closePopup(popupFormEdit);
};

const editFormValidator = new FormValidator(popupFormEdit, validationConfig);

formEditProfile.addEventListener('submit', handlePopupEditSubmit);
editButton.addEventListener('click', () => {
  openPopup(popupFormEdit);
  openEditPopup();
  editFormValidator.enableValidation();
});

closeButtonEdit.addEventListener('click', () => closePopup(popupFormEdit));

const popupFormAdd = document.querySelector('.popup_form_add');
const formAddCard = document.querySelector('#popup__form_add');
const addButton = document.querySelector('.profile__button-add');
const elementLink = document.querySelector('.popup__input_type_link');
const elementTitle = document.querySelector('.popup__input_type_title');
const elements = document.querySelector('.elements');

const renderCardElement = (data, template, handle) => {
  const card = new Card(data, template, handle);
  const cardElement = card.generateCard();

  return cardElement;
};

const handlePopupNewCardSubmit = (evt) => {
  evt.preventDefault();
  const cardObject = {name: elementTitle.value, 
                      link: elementLink.value}                     
  const cardElement = renderCardElement(cardObject, '.element-template', openImage)
  elements.prepend(cardElement);
  formAddCard.reset();
  closePopup(popupFormAdd);
};

const addFormValidator = new FormValidator(popupFormAdd, validationConfig);
addButton.addEventListener('click', () => {
  openPopup(popupFormAdd);
  addFormValidator.enableValidation();
  formAddCard.reset();
});

formAddCard.addEventListener('submit', handlePopupNewCardSubmit);

initialCards.forEach((item) => {
    const cardElement = renderCardElement(item, '.element-template', openImage)
    elements.append(cardElement);
});