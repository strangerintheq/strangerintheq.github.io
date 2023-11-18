customElements.define( 'generative-image', class extends HTMLElement {

    static observedAttributes = ["src", "hash", "url"];

    src;
    hash;
    url;

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'closed' });
        const url = this.url;
        // debugger
        fetch(this.src).then(r => r.text()).then(r => {
            shadow.innerHTML = `<a href="${url}">
                <iframe height="400" width="221" style="border: none" src="${makeContent(r)}"></iframe>
            </a>`;
        })

        function makeContent(r) {
            return "data:text/html;charset=utf-8," + escape(r);
        }


    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue
    }

});