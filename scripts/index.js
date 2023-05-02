const editFormOpened = document.querySelector('.edit__button');
const editForm = document.querySelector('.popup');
const editFormClosed = document.querySelector('.popup__close');

editFormOpened.addEventListener('click', () => {
    editForm.classList.add('popup__opened');
});

editFormClosed.addEventListener('click', () => {
    editForm.classList.remove('popup__opened');
});