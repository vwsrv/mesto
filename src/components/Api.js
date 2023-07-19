export default class Api {
    constructor(options) {
      // тело конструктора
    }
  
    getInitialCards() {
      // ...
    }
  
    // другие методы работы с API
  }
  
  const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-71',
    headers: {
      authorization: '286e65cb-598a-4a43-9bc6-d7bbdd44ff1c',
      'Content-Type': 'application/json'
    }
  }); 