export default class UserInfo {
    constructor({profileName, profileDesctiption}){
        this._profileName = document.querySelector(profileName);
        this._profileDesctiption = document.querySelector(profileDesctiption);
    }

    getUserInfo() {
        const name = this._profileName.textContent;
        const description = this._profileDesctiption.textContent;

        return {name, description}
    }

    setUserInfo({name, description}) {
        this._profileName.textContent = name;
        this._profileDesctiption.textContent = description;
    }
}