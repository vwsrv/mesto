export class Card {
    constructor(elementsData, templateSelector, openImage) {
      this._title = elementsData.name;
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

    _likeElement() {
        const likeButton = this._element.querySelector('.element__like-btn');
        likeButton.classList.toggle('element__like-btn_active');
    }

    _deleteElement() {
        const deleteButton = this._element.querySelector('.element__delete-btn');
        deleteButton.closest('.element').remove();
    }

    _openImageForm() {
        this._openImage(link, title);
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__title').textContent = this._title;
        this._element.querySelector('.element__image').src = this._link;
        this._setEventListeners(this._element);
        return this._element;
    }

    _setEventListeners = () => {
        this._element.querySelector('.element__like-btn').addEventListener('click', () => {
            this._likeElement();
        });
        this._element.querySelector('.element__delete-btn').addEventListener('click', () => {
            this._deleteElement();
        });
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._openImage(this._link, this._title);
        });
    }
}