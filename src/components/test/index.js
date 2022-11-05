import indexHtml from "./index.html"

export default class Test extends HTMLElement {
  static createElement() {
    const ELEMENT_NAME = "element-test"
    customElements.define(ELEMENT_NAME, Test)
    return document.createElement(ELEMENT_NAME)
  }

  connectedCallback() {
    this.innerHTML = indexHtml
  }
}