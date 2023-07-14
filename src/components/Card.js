export default class Card {
    constructor(elementsData, templateSelector, openImage) {
      this._name = elementsData.name;
      this._link = elementsData.link;
      this._templateSelector = templateSelector;
      this._openImage = openImage;
    }

    _getTemplate() {
      const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
      return cardElement;
    }

    _openImageForm(link, name) {
        this._openImage(link, name);
    }

    _likeElement() {
        this._likeButton.classList.toggle('element__like-btn_active');
    }

    _deleteElement() {
        this._element.remove();
        this._element = null;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._likeButton = this._element.querySelector('.element__like-btn');
        this._elementImage = this._element.querySelector('.element__image');
        this._element.querySelector('.element__title').textContent = this._name;
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._setEventListeners(this._element);
        return this._element;
    }

    _setEventListeners = () => {
        this._likeButton.addEventListener('click', () => {
            this._likeElement();
        });
        this._element.querySelector('.element__delete-btn').addEventListener('click', () => {
            this._deleteElement();
        });
        this._elementImage.addEventListener('click', () => { 
            this._openImageForm(this._link, this._name); 
        }); 
    }
}