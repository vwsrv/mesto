export default class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._selector = document.querySelector(containerSelector);
    }

    addItem(element) {
        this._selector.append(element);
    }

    renderItems(items) {
        items.forEach(item => {
            this._renderer(item);
        });
    }
}