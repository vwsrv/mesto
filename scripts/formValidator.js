export class FormValidator {
    constructor(validationConfig, popupForm){
        this._validationConfig = validationConfig;
        this._popupForm = popupForm;
        this._submitButton = this._popupForm.querySelector(this._validationConfig.submitButtonSelector);
    }

    _showInpitError(inputElement, errorMessage) {
        const errorElement = this._popupForm.querySelector(`.${inputElement.id}-error`);
        errorElement.classList.add(this._validationConfig.inpuErrorClass);
        errorElement.classList.add(this._validationConfig.errorClass);
        errorElement.textContent = errorMessage;
        console.log(inputElement)
    }

    _hideInputError(inputElement) {
        const errorElement = this._popupForm.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._validationConfig.inpuErrorClass);
        errorElement.textContent = '';
        console.log(inputElement)
    }

    _checkInputValidity(formElement, inputElement) {
        if(!inputElement.validity.valid) {
            inputElement._showInpitError();
        }
    }

    _setEventListeners(formElement) {
        const inputList = Array.from(this._popupForm.querySelectorAll(this._validationConfig.inputSelector));
        toggleButtonState(inputList, this._submitButton);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                checkInputValidity(formElement, inputElement);
                toggleButtonState(inputList, this._submitButton);
            });
        });
    }
}