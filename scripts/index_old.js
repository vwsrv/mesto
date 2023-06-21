enableValidation(validationConfig);

const elementsContainer = document.querySelector('.elements');
const elementsTemplate = document.querySelector('.element-template').content.querySelector('.element');

const popupFormEdit = document.querySelector('.popup_form_edit');
const popupFormAdd = document.querySelector('.popup_form_add')

const openPopup = (popUp) => {
  initMouseHandler(popUp);
  document.addEventListener('keydown', keyHandler);
  popUp.classList.add('popup_opened');
}

const closePopup = (popUp) => {
  popUp.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyHandler, false);
  popUp.removeEventListener('mousedown', initMouseHandler, false);
}

const deleteElement = (evt) => {
    const element = evt.target.closest('.element');
    element.remove();
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

const keyHandler = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

const imageForm = document.querySelector('.popup_form_image');
const popupFormPicture = document.querySelector('.popup__picture');
const popupCaption = document.querySelector('.popup__caption');

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
  resetValidationState(popupFormEdit, validationConfig);
};


const handlePopupEditSubmit = (evt) => {
  evt.preventDefault();
  defaultName.textContent = newName.value;
  defaultDescription.textContent = newDescription.value;
  closePopup(popupFormEdit);
};

formEditProfile.addEventListener('submit', handlePopupEditSubmit);
editButton.addEventListener('click', () => {
  openPopup(popupFormEdit);
  openEditPopup();
});

closeButtonEdit.addEventListener('click', () => closePopup(popupFormEdit));

const addButton = document.querySelector('.profile__button-add');
const elementLink = document.querySelector('.popup__input_type_link');
const elementTitle = document.querySelector('.popup__input_type_title');
const formAddCard = document.querySelector('#popup__form_add');

const handlePopupNewCardSubmit = (evt) => {
  evt.preventDefault();
  closePopup(popupFormAdd);
  const cardObject = {name: elementTitle.value, 
                      link: elementLink.value}
  formAddCard.reset();
  elementsContainer.prepend(createElement(
    cardObject));
};

addButton.addEventListener('click', () => {
  openPopup(popupFormAdd);
  formAddCard.reset();
  resetValidationState(popupFormAdd, validationConfig);
});

formAddCard.addEventListener('submit', handlePopupNewCardSubmit);
