export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._selector = document.querySelector(containerSelector);
    }

    addItem(element) {
        this._selector.append(element);
    }

    prependItem(element) {
        this._selector.prepend(element);
    }

    renderItems() {
        this._renderedItems.forEach((item) => {
            this._renderer(item);
        });
    }
}