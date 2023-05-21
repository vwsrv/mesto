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

const deleteElement = (evt) => {
    const element = evt.target.closest('.element');
    element.remove();
};

const elements = document.querySelector('.elements');
const elementsTemplate = document.querySelector('.elements__template').content;
const popupPicture = document.querySelector('.popup__picture');
const popupCaption = document.querySelector('.popup__caption');

const renderElements = (title, picture) => {
    const elementItem = elementsTemplate.cloneNode(true);
    const elementTitle = elementItem.querySelector('.element__title');
    const elementImage = elementItem.querySelector('.element__image');
    
    elementItem
      .querySelector('.element__delete-btn')
      .addEventListener('click', deleteElement);

    elementTitle.textContent = title;
    elementImage.src = picture;
    elementImage.alt = title;

    const likeButton = elementItem.querySelector('.element__like-btn');
    likeButton.addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__like-btn_active');
    });

    elementImage.addEventListener('click', () => {
      popUpOpened(imageForm)
      popupCaption.textContent = title;
      popupPicture.src = picture;
      popupPicture.alt = title;
    });


    return elementItem;
  };

const addInitialCards = () => {
    initialCards.forEach((item) => {
      elements.append(renderElements(item.name, item.link))
    })}

addInitialCards();

const popUpOpened = (popUp) => {
  popUp.classList.add('popup_opened');
}

const popUpClosed = (popUp) => {
  popUp.classList.remove('popup_opened');
}

const editForm = document.querySelector('.popup__form_edit');
const closeButtonEdit = editForm.querySelector('.popup__close-btn');
const editButton = document.querySelector('.profile__button-edit');
const newName = editForm.querySelector(".popup__input_type_name");
const newDescription = editForm.querySelector(".popup__input_type_description");
const defaultName = document.querySelector('.profile__name');
const defaultDescription = document.querySelector(".profile__description");

const popupEditOpened = () => {
  newName.value = defaultName.textContent;
  newDescription.value = defaultDescription.textContent;
}

const popupEditInput = (evt) => {
  evt.preventDefault();
  defaultName.textContent = newName.value;
  defaultDescription.textContent = newDescription.value;
  popUpClosed(editForm);
}

editForm.addEventListener('submit', popupEditInput);
editButton.addEventListener('click', () => popUpOpened(editForm));
closeButtonEdit.addEventListener('click', () => popUpClosed(editForm));

const imageForm = document.querySelector('.popup_form_image');
const closeButtonImage = imageForm.querySelector('.popup__close-btn');

closeButtonImage.addEventListener('click', () => popUpClosed(imageForm));

const addForm = document.querySelector('.popup__form_add')
const closeButton = document.querySelectorAll('.popup__close-btn');
const addButton = document.querySelector('.profile__button-add');
const inputButton = document.querySelector('.popup__save-btn');
const closeButtonAdd = addForm.querySelector('.popup__close-btn');
const elementLink = document.querySelector('.popup__input_type_link');
const elementTitle = document.querySelector('.popup__input_type_title');

const inputNewVluess = (evt) => {
  evt.preventDefault();
  elements.prepend(renderElements(
    elementTitle.value, elementLink.value
  ));
  popUpClosed(addForm);
}

addButton.addEventListener('click', () => popUpOpened(addForm));
closeButtonAdd.addEventListener('click', () => popUpClosed(addForm));
addForm.addEventListener('submit', inputNewVluess);