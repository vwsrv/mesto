export default class UserInfo {
    constructor({profileName, profileDesctiption}){
        this._profileName = document.querySelector(profileName);
        this._profileDesctiption = document.querySelector(profileDesctiption);
    }

    getUserInfo() {
        return {
            name: this._profileName.textContent,
            description: this._profileDesctiption.textContent
        }
    }

    setUserInfo({name, description}) {
        this._profileName.textContent = name;
        this._profileDesctiption.textContent = description;
    }
}