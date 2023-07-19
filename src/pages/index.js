import './index.css';
import { popupFormEdit, 
  popupFormAdd,
  editButton,
  validationConfig,
  addButton,
  newName,
  newDescription,
  popupFormUpdate,
  updateAvatarButton
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
const updateFormValidator = new FormValidator(popupFormUpdate, validationConfig);
updateFormValidator.enableValidation();

const popupFormImage = new PopupWithImage('.popup_form_image');
function openImageForm(link, title) {
  popupFormImage.open(link, title);
}
popupFormImage.setEventListeners();

function createCardElement(data, template, handle){
  const card = new Card(data, template, handle);
  const cardElement = card.generateCard();
  return cardElement;
};

const cardSection = new Section(
  {items: initialCards, 
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

const popupWithFormEdit = new PopupWithForm('.popup_form_edit', userData => {
  userInfo.setUserInfo(userData);
});

updateAvatarButton.addEventListener('click', () => {
  popupWithFormAvatar.open();
  updateFormValidator.resetValidationState()
});

const popupWithFormAvatar = new PopupWithForm('.popup_form_update');
popupWithFormAvatar.setEventListeners();

editButton.addEventListener('click', () => {
  popupWithFormEdit.open();
  const {name, description} = userInfo.getUserInfo();
    newName.value = name;
    newDescription.value = description;
    editFormValidator.resetValidationState();
  });
popupWithFormEdit.setEventListeners();

const popupWithFormAdd = new PopupWithForm('.popup_form_add', cardData => {
  const cardElement = createCardElement(cardData, '.element-template', openImageForm);
  cardSection.prependItem(cardElement);
});

addButton.addEventListener('click', () => {
  popupWithFormAdd.open();
  addFormValidator.resetValidationState();
});
popupWithFormAdd.setEventListeners();

fetch('https://mesto.nomoreparties.co/v1/cohort-71/cards', {
  headers: {
    authorization: '286e65cb-598a-4a43-9bc6-d7bbdd44ff1c'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  }); 
