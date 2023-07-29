import './index.css';
import { popupFormEdit, 
  popupFormAdd,
  editButton,
  validationConfig,
  addButton,
  newName,
  newDescription,
  popupFormUpdate,
  updateAvatarButton,
  elements,
} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupFormConfirmation from '../components/PopupFormConfirmation'
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js'

const editFormValidator = new FormValidator(popupFormEdit, validationConfig);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(popupFormAdd, validationConfig);
addFormValidator.enableValidation();
const updateFormValidator = new FormValidator(popupFormUpdate, validationConfig);
updateFormValidator.enableValidation();

let currentUserId;

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-71/',
  headers: {
      authorization: '286e65cb-598a-4a43-9bc6-d7bbdd44ff1c',
      'Content-Type': 'application/json'
    }
});

const cardSection = new Section({
  renderer: (data) => {
    const cardElement = createCardElement(data, currentUserId);
    cardSection.addItem(cardElement);
  }
}, '.elements');

const popupFormImage = new PopupWithImage('.popup_form_image');

const userInfo = new UserInfo({
  profileName: '.profile__name',
  profileDesctiption: '.profile__description',
  profileAvatar: '.profile__avatar-image'
});

const popupWithFormEdit = new PopupWithForm('.popup_form_edit', userData => {
  popupWithFormEdit.renderLoading(true);
  api.setUserProfile({userData})
  .then((res) => {
    popupWithFormEdit.renderLoading(false);
    userInfo.setUserInfo(res)
    popupWithFormEdit.close();
  })
  .catch((error) => {
    console.log(`Ошибка изменения информации о пользователе ${error}`);
  })
});

const popupWithFormAvatar = new PopupWithForm('.popup_form_update', userData => {
  popupWithFormAvatar.renderLoading(true);
  api.setUserProfileAvatar({userData})
  .then((res) => {
    userInfo.setUserAvatar(res);
    popupWithFormAvatar.renderLoading(false);
    popupWithFormAvatar.close();
  })
  .catch((error) => {
    console.log(`Ошибка изменения аватара${error}`);
  })
});

const popupWithFormAdd = new PopupWithForm('.popup_form_add', cardData => {
  popupWithFormAdd.renderLoading(true);
  api.setUserCard({cardData})
  .then(responseData => {
    popupWithFormAdd.renderLoading(false);
    const cardElement = createCardElement(responseData, currentUserId);
    elements.prepend(cardElement);
    popupWithFormAdd.close();
  })
  .catch((error) => {
    console.log(`Ошибка добавления карточки ${error}`);
  });
});

Promise.all([api.getInitialCards(), api.getUserProfile()])
.then(([elementsData, userData]) => {
  currentUserId = userData._id;
  userInfo.setUserInfo(userData);
  userInfo.setUserAvatar(userData);
  cardSection.renderItems(elementsData)
})
.catch((error) => {
  console.log(`Ошибка загрузки начальной информации ${error}`);
});

function createCardElement(elementsData, currentUserId) {
  const card = new Card(
    elementsData,
    currentUserId,
    '.element-template',
    {handleOpenImage: (link, title) => {
      popupFormImage.open(link, title);
    },
    handleDeleteCardElement: (cardElement) => {
      popupWithFormConfirm.open();
      popupWithFormConfirm.setCardElement(cardElement)
      card.deleteCardElement();
    },
    handleLikeElement: (cardId, isLiked) => {
      if (isLiked) {
        api.deleteLike(cardId)
        .then((res) => {
          card.dislikeCardElement();
          card.setLikesCounter(res);
        })
      } else {
        api.addLike(cardId)
        .then((res) => {
          card.likeCardElement()
          card.setLikesCounter(res);
        });
      }
    }
  });
  return card.generateCard();
}

const popupWithFormConfirm = new PopupFormConfirmation('.popup_form_confirm', cardId => {
  console.log(cardId)
  api.deleteUserCard(cardId)
  .then(() => {
    popupWithFormConfirm.close();
  })
  .catch((error) => {
    console.log(`Ошибка удаления карточки ${error}`);
  });
});

editButton.addEventListener('click', () => {
  popupWithFormEdit.open();
  const {name, about} = userInfo.getUserInfo();
    newName.value = name;
    newDescription.value = about;
    editFormValidator.resetValidationState();
  });

updateAvatarButton.addEventListener('click', () => {
  popupWithFormAvatar.open();
  updateFormValidator.resetValidationState()
});

addButton.addEventListener('click', () => {
  popupWithFormAdd.open();
  addFormValidator.resetValidationState();
});

popupFormImage.setEventListeners();
popupWithFormConfirm.setEventListeners();
popupWithFormEdit.setEventListeners();
popupWithFormAvatar.setEventListeners();
popupWithFormAdd.setEventListeners();