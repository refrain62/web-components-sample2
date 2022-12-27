class MyProfile extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });

        let template = document.getElementById('my-profile');

        let templateContent = template.content;

        this.shadowRoot.appendChild( templateContent.cloneNode( true ) );
    }
}

customElements.define("my-profile", MyProfile);
