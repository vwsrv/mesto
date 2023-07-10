export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
    };

    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handlerEscClose.bind(this));
    };

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handlerEscClose.bind(this));
    };

    _handlerEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        };
    };

    setEventListeners() {
        this._popupSelector.addEventListener('mousedown', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close();
            };
        });
        document.querySelectorAll('.popup__close-btn').forEach(button => {
            const buttonsPopup = button.closest('.popup')
            button.addEventListener('click', () => this.close());
        });
    };
}