import Popup from "./Popup.js";

export default class PopupFormConfirmation extends Popup {
    constructor(_popupElement, handleFormSubmit) {
        super(_popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._confirmButton = this._popupElement.querySelector('.popup__submit-btn');
    }

    setEventListeners() {
        this._confirmButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._cardData);
            this.close();
        });
        super.setEventListeners();
    }

    setCardElement(cardData) {
        this._cardData = cardData;
    }
}