const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('.elements__template').content;
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

initialCards.forEach((element) => {
    const elementItem = elementTemplate.cloneNode(true);
    elementItem.querySelector('.element__image').src = element.link;
    elementItem.querySelector('.element__title').textContent = element.name;
    console.log(element.link);
    elements.append(elementItem);
});

const editButton = document.querySelector('.profile__button-edit');
const editForm = document.querySelector('.popup');
const closeButton = editForm.querySelector('.popup__close-btn');
const newName = editForm.querySelector(".popup__input_type_name");
const newDescription = editForm.querySelector(".popup__input_type_description");
const defaultName = document.querySelector('.profile__name');
const defaultDescription = document.querySelector(".profile__description");
const saveNewValues = document.querySelector(".popup__save-btn");

const openEditForm = function () {
    editForm.classList.add('popup_opened');
    newName.value = defaultName.textContent;
    newDescription.value = defaultDescription.textContent;
}

const closeEditForm = function () {
    editForm.classList.remove('popup_opened');
}

const inputNewValues = function (evt) {
    evt.preventDefault()
    defaultName.textContent = newName.value.substr(0,15);
    defaultDescription.textContent = newDescription.value.substr(0,30);;
    closeEditForm();
}

editButton.addEventListener('click', openEditForm);
closeButton.addEventListener('click', closeEditForm);
editForm.addEventListener('submit', inputNewValues);
