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
    this.title = "Cruiseee";
    this.imageSrc =
      "https://lamag.com/.image/t_share/MTk3NTU1OTk3NTMzMDIxODkw/top-gun-maverick-tom-cruise-la-mag.jpg";
    this.description = "This is a description of the card";
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
          <img class="image" src="${this.imageSrc}" alt="Top Gun" />
          <h2>${this.title}</h2>
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <slot>
              <p>Carddddddd</p>
              <p>
                <a href="${this.imageSrc}" target="_blank"
                  >Tom Cruise is awesome</a
                >
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
