const elementsContainer = document.querySelector('.elements');
const elementsTemplate = document.querySelector('.element-template').content.querySelector('.element');

const popupFormEdit = document.querySelector('.popup_form_edit');
const popupFormAdd = document.querySelector('.popup_form_add')

const openPopup = (popUp) => {
  popUp.classList.add('popup_opened');
}

const closePopup = (popUp) => {
  popUp.classList.remove('popup_opened');
}

const deleteElement = (evt) => {
    const element = evt.target.closest('.element');
    element.remove();
};

document.querySelectorAll('.popup__close-btn').forEach(button => {
  const buttonsPopup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(buttonsPopup));
});  

const imageForm = document.querySelector('.popup_form_image');
const popupFormPicture = document.querySelector('.popup__picture');
const popupCaption = document.querySelector('.popup__caption');

const renderElements = (element) => {
    const elementItem = elementsTemplate.cloneNode(true);
    const elementTitle = elementItem.querySelector('.element__title');
    const elementImage = elementItem.querySelector('.element__image');
    
    elementItem
      .querySelector('.element__delete-btn')
      .addEventListener('click', deleteElement);

    elementTitle.textContent = element.name;
    elementImage.src = element.link;
    elementImage.alt = element.name;

    const likeButton = elementItem.querySelector('.element__like-btn');
    likeButton.addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__like-btn_active');
    });

    elementImage.addEventListener('click', () => {
      popupCaption.textContent = element.name;
      popupFormPicture.src = element.link;
      popupFormPicture.alt = element.name;
    });
    return elementItem;
  };

const addInitialCards = () => {
    initialCards.forEach((item) => {
      elementsContainer.append(renderElements(item))
    })}

addInitialCards();

const closeButton = popupFormEdit.querySelector('.popup__close-btn');
const editButton = document.querySelector('.profile__button-edit');
const newName = popupFormEdit.querySelector(".popup__input_type_name");
const newDescription = popupFormEdit.querySelector(".popup__input_type_description");
const defaultName = document.querySelector('.profile__name');
const defaultDescription = document.querySelector(".profile__description");
const inputNewValues = document.querySelector('#popup__form_edit');

const popupEditOpened = () => {
  newName.value = defaultName.textContent;
  newDescription.value = defaultDescription.textContent;
  resetValidateErrors(popupFormEdit, validationConfig)
}

const popupEditInput = (evt) => {
  evt.preventDefault();
  defaultName.textContent = newName.value;
  defaultDescription.textContent = newDescription.value;
  closePopup(popupFormEdit);
}

inputNewValues.addEventListener('submit', popupEditInput);
editButton.addEventListener('click', () => {
  openPopup(popupFormEdit);
  popupEditOpened();
});
closeButton.addEventListener('click', () => closePopup(popupFormEdit));

const addButton = document.querySelector('.profile__button-add');
const elementLink = document.querySelector('.popup__input_type_link');
const elementTitle = document.querySelector('.popup__input_type_title');
const inputAddValues = document.querySelector('#popup__form_add');

const inputNewVluess = (evt) => {
  evt.preventDefault();
  closePopup(popupFormAdd);
  const cardObject = {name: elementTitle.value, 
                      link: elementLink.value}
 inputAddValues.reset();
  elementsContainer.prepend(renderElements(
    cardObject
  ));
}

addButton.addEventListener('click', () => openPopup(popupFormAdd));
inputAddValues.addEventListener('submit', inputNewVluess);