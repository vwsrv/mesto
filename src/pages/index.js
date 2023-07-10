import './index.css';
import { popupFormEdit, 
  popupFormAdd,
  editButton,
  validationConfig,
  elementTitle,
  elementLink,
  newName,
  newDescription,
  addButton,
  formAddCard
} from '../utils/constants.js';
import { initialCards } from '../utils/elements.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

const editFormValidator = new FormValidator(popupFormEdit, validationConfig);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(popupFormAdd, validationConfig);
addFormValidator.enableValidation();

const popupFormImage = new PopupWithImage('.popup_form_image');
function openImageForm(link, title) {
popupFormImage.open(link, title);
}
popupFormImage.setEventListeners();

const createCardElement = (data, template, handle) => {
const card = new Card(data, template, handle);
const cardElement = card.generateCard();

return cardElement;
};

const cardSection = new Section({
                          items: initialCards, 
                          renderer: (item) => {
                          const cardElement = createCardElement(item, '.element-template', openImageForm);
                          cardSection.addItem(cardElement);
                          }
                          }, '.elements');
cardSection.renderItems();


const userInfo = new UserInfo({
profileName: '.profile__name',
profileDesctiption: '.profile__description'
});

const popupWithFormEdit = new PopupWithForm('.popup_form_edit', () => {
userInfo.setUserInfo({
name: newName.value,
description: newDescription.value
});
});

editButton.addEventListener('click', () => {
popupWithFormEdit.open();
const {name, description} = userInfo.getUserInfo();
newName.value = name;
newDescription.value = description;
editFormValidator.resetValidationState();
});
popupWithFormEdit.setEventListeners();

const popupWithFormAdd = new PopupWithForm('.popup_form_add', () => {
const cardObject = {name: elementTitle.value, 
                link: elementLink.value};
const cardElement = createCardElement(cardObject, '.element-template', openImageForm);
cardSection.prependItem(cardElement);
});

addButton.addEventListener('click', () => {
popupWithFormAdd.open();
addFormValidator.resetValidationState();
formAddCard.reset();
});
popupWithFormAdd.setEventListeners();