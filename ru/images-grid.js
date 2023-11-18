customElements.define( 'images-grid', class extends HTMLElement {

    static observedAttributes = ["ratio", "gap"];

    ratio;
    gap;

    connectedCallback() {
        this.style.display = "grid";
        this.style.gridTemplateColumns = "225px 225px 225px 225px";
        const style = document.createElement("div")
        style.innerHTML = `
            <style></style>
        `
        this.append(style)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue
    }

});