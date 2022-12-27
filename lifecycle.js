class MyProfile extends HTMLElement {

    static get observedAttributes() {
        return ['fullname', 'age']; // (5)
    }

    constructor() {
        super();

        // カスタム要素の中にシャドウDOMを接続する
        this.attachShadow({ mode: "open" });

        // HTMLファイルで指定された属性を取り出し、初期表示に使用する
        const fullname = this.getAttribute('fullname') || 'John Doe';
        const age = this.getAttribute('age') || 'unknown';

        // (1) このカスタム要素の文書構造を定義する
        this.shadowRoot.innerHTML = `
        <div>
          <h1>My Profile</h1>
          <div id="fullname">full name: <span class="value">${fullname}<span></div>
          <div id="age">age: <span class="value">${age}</span></div>
        </div>
      `;
    }

    // 文書にカスタム要素が接続されたときに呼び出される
    connectedCallback() {
        console.log("connectedCallback", { isConnected: this.isConnected });
    }

    // カスタム要素が文書から切断されたときに呼び出される
    disconnectedCallback() {
        console.log("disconnectedCallback");
    }

    // カスタム要素が文書から切断されたときに呼び出される
    adoptedCallback() {
        console.log("adoptedCallback");
    }

    // カスタム要素の属性が追加・変更・削除されると呼び出される
    attributeChangedCallback(name, oldValue, newValue) {
        console.log('attributeChangedCallback', { name, oldValue, newValue })

        if (name === 'fullname') {
            this.shadowRoot.querySelector('#fullname .value').textContent = newValue;
        }

        if (name === 'age') {
            this.shadowRoot.querySelector('#age .value').textContent = newValue;
        }
    }
}

customElements.define("my-profile", MyProfile);