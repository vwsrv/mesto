export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  
  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    } throw new Error(`Ошибка соединения ${res.status}`);
  }

  getUserProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res);
    }).catch((err) => console.error(err));
  }

  setUserProfile({userData}) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name, 
        about: userData.about,
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res);
    }).catch((err) => console.error(err));
  }

  setUserProfileAvatar({userData}) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: userData.avatar})
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res);
    }).catch((err) => console.error(err));
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers,
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res);
    }).catch((err) => console.error(err))
  }

  setUserCard({cardData}) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(
        {name: cardData.name,
        link: cardData.link
        })
    })
    .then((res) => {
      console.log(res)
      if (res.ok) {
        return res.json();
      }
      throw new Error(res);
    }).catch((err) => console.error(err));
  }

  deleteUserCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res);
    }).catch((err) => console.error(err));
  }

  addLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res);
    }).catch((err) => console.error(err));
  }

  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => {
      console.log(res)
      if (res.ok) {
        return res.json()
      }
      throw new Error(res);
    }).catch((err) => console.error(err));
  }
}