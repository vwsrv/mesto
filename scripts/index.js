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

const deleteElement = (evt) => {
    const element = evt.target.closest('.element');
    element.remove();
};

const renderElement = (todo) => {
    const elementItem = elementTemplate.cloneNode(true);
    elementItem.querySelector('.element__image').src = todo.link;
    elementItem.querySelector('.element__title').textContent = todo.name;
    elementItem.querySelector('.element__delete-btn').addEventListener('click', deleteElement);
    elements.append(elementItem);
}

initialCards.forEach((element) => {
    renderElement(element)
});

const addForm = document.querySelector('.popup__form_add');
const addButton = document.querySelector('.profile__button-add');
const elementLink = document.querySelector('.popup__input_type_link');
const elementTitle = document.querySelector('.popup__input_type_title');
const closeFormAdd = addForm.querySelector('.popup__close-btn');

const saveNewValues = document.querySelector(".popup__save-btn");

const editForm = document.querySelector('.popup__form_edit');
const editButton = document.querySelector('.profile__button-edit');
const newName = editForm.querySelector(".popup__input_type_name");
const newDescription = editForm.querySelector(".popup__input_type_description");
const defaultName = document.querySelector('.profile__name');
const defaultDescription = document.querySelector(".profile__description");
const closeFormEdit = editForm.querySelector('.popup__close-btn');

const openAddForm = () => {
  addForm.classList.add('popup_opened');
}

const openEditForm = () => {
  editForm.classList.add('popup_opened');
  newName.value = defaultName.textContent;
  newDescription.value = defaultDescription.textContent;
}

const inputAddValues = (evt) => {
  evt.preventDefault();
  const elementItem = elementTemplate.cloneNode(true);
  elementItem.querySelector('.element__title').textContent = elementTitle.value;
  elementItem.querySelector('.element__image').src = elementLink.value;
  elementItem.querySelector('.element__delete-btn').addEventListener('click', deleteElement);
  elements.prepend(elementItem);
  closePopUp();
}

const inputEditValues = (evt) => {
  evt.preventDefault()
  defaultName.textContent = newName.value;
  defaultDescription.textContent = newDescription.value;
  closePopUp();
}

const closePopUp = () => {
  editForm.classList.remove('popup_opened');
  addForm.classList.remove('popup_opened');
}

addButton.addEventListener('click', openAddForm);
editButton.addEventListener('click', openEditForm);
closeFormEdit.addEventListener('click', closePopUp);
closeFormAdd.addEventListener('click', closePopUp);
addForm.addEventListener('submit', inputAddValues);
editForm.addEventListener('submit', inputEditValues);