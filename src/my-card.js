import { LitElement, html, css } from "lit";

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {
  static get tag() {
    return "my-card";
  }

  constructor() {
    super();
    this.title = "Ellie";
    this.imageSrc =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxvlTorktzxvNhw1gX8xIiwmh7nT7IH2F3cg&s";
    this.description = "";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      :host([fancy]) {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }

      :host .wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .card {
        background-color: lightblue;
        color: blue;
        margin: 0 auto;
        border: 3px solid green;
        padding: 10px;
        max-width: 300px;
        display: inline-block;
        text-align: center;
      }

      .image {
        width: 100px;
        height: auto;
        border: 2px solid orange;
        display: flex;
        margin: 0 auto;
      }

      h2 {
        font-size: 20px;
        margin: 0;
        padding: 0;
      }

      .fancy {
        background-color: orange;
        color: #ff0099;
      }

      button {
        margin: 5px;
        padding: 5px 10px;
        cursor: pointer;
      }
    `;
  }
  openChanged(e) {
    console.log(e);
    if (e.target.getAttribute("open") !== null) {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }

  render() {
    // return html`<div>${this.title}</div>`;
    return html`
      <div class="wrapper">
        <div class="card">
          <img class="image" src="${this.imageSrc}" alt="Last of Us" />
          <h2>${this.title}</h2>
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <slot>
              <p>
                Ellie is the main character in The Last of Us Part II. She is a
                tough and skilled survivor in a post-apocalyptic world. In this
                game, she sets out on a dangerous journey for revenge after a
                tragic event. Along the way, she faces tough choices, fights
                enemies, and struggles with guilt and loss. Her story is
                emotional, showing how revenge can change a person
              </p>
            </slot>
          </details>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      imageSrc: { type: String },
      fancy: { type: Boolean },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
