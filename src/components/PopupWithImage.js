import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {    
    open(link, name) {
        this._popupSelector.querySelector('.popup__caption').textContent = name;
        this._popupSelector.querySelector('.popup__picture').alt = name;
        this._popupSelector.querySelector('.popup__picture').src = link;
        super.open();
    }
}