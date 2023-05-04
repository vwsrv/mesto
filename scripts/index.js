const editButton = document.querySelector('.profile__button-edit');
const editForm = document.querySelector('.popup');
const closeButton = editForm.querySelector('.popup__close-btn');
const newName = editForm.querySelector(".popup__input_type_name");
const newDescription = editForm.querySelector(".popup__input_type_description");
const defaultName = document.querySelector('.profile__name');
const defaultDescription = document.querySelector(".profile__description");
const saveNewValues = document.querySelector(".popup__save-btn");

const openEditForm = function () {
    editForm.classList.add('popup__opened');
    newName.value = defaultName.textContent;
    newDescription.value = defaultDescription.textContent;
}

const closeEditForm = function () {
    editForm.classList.remove('popup__opened');
}

const inputNewValues = function (evt) {
    evt.preventDefault()
    defaultName.textContent = newName.value.substr(0,24);
    defaultDescription.textContent = newDescription.value.substr(0,30);;
    closeEditForm();
}

editButton.addEventListener('click', openEditForm);
closeButton.addEventListener('click', closeEditForm);
editForm.addEventListener('submit', inputNewValues);
