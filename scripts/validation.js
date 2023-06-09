const showInputError = (formElement, inputElement, errorMessage, validObject) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validObject.inputErrorClass);
  errorElement.classList.add(validObject.errorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, validObject) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validObject.inputErrorClass);
  errorElement.classList.remove(validObject.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, validObject) => {
  if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, validObject);
  } else {
      hideInputError(formElement, inputElement, validObject);
  }
};

const setEventListeners = (formElement, validObject) => {
  const inputList = Array.from(formElement.querySelectorAll(validObject.inputSelector));
  const buttonElement = formElement.querySelector(validObject.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, validObject);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, validObject);
      toggleButtonState(inputList, buttonElement, validObject);
    });
  });
}; 

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
}

const resetValidationError = (formElement, validObject) => {
  const inputList = Array.from(formElement.querySelectorAll(validObject.inputSelector));
  const buttonElement = formElement.querySelector(validObject.submitButtonSelector);
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, validObject);
  });
  toggleButtonState(inputList, buttonElement, validObject);
}

const toggleButtonState = (inputList, buttonElement, validObject) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validObject.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  }
  else {
    buttonElement.classList.remove(validObject.inactiveButtonClass);
    buttonElement.removeAttribute('disabled', false);
  }
};

const enableValidation = (validObject) => {
  const formList = Array.from(document.querySelectorAll(validObject.formSelector));
  formList.forEach((formElement) => {
      setEventListeners(formElement, validObject);
  });
};