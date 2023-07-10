export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_inactive',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__error_visible',
  }

export const elementsContainer = document.querySelector('.elements');
export const popupFormEdit = document.querySelector('.popup_form_edit');
export const closeButtonEdit = popupFormEdit.querySelector('.popup__close-btn');
export const editButton = document.querySelector('.profile__button-edit');
export const newName = popupFormEdit.querySelector(".popup__input_type_name");
export const newDescription = popupFormEdit.querySelector(".popup__input_type_description");
export const defaultName = document.querySelector('.profile__name');
export const defaultDescription = document.querySelector(".profile__description");
export const formEditProfile = document.querySelector('#popup__form_edit');
export const popupFormAdd = document.querySelector('.popup_form_add');
export const formAddCard = document.querySelector('#popup__form_add');
export const addButton = document.querySelector('.profile__button-add');
export const elementLink = document.querySelector('.popup__input_type_link');
export const elementTitle = document.querySelector('.popup__input_type_title');
export const elements = document.querySelector('.elements');
export const imageForm = document.querySelector('.popup_form_image');
export const popupPicture = document.querySelector('.popup__picture');
export const popupCaption = document.querySelector('.popup__caption');