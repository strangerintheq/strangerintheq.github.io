customElements.define( 'fxhash-image', class extends HTMLElement {

    static observedAttributes = ["url", "img"];

    url;
    img;

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'closed' });
        const url = "https://www.fxhash.xyz/gentk/" + this.url;
        const img = "https://media.fxhash.xyz/w_768/" + this.img;

        shadow.innerHTML = `<a href="${url}">
            <img style="width: 225px" src="${img}">
        </a>`;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue
    }

});