import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Cruiseee";
    this.imageSrc = "https://lamag.com/.image/t_share/MTk3NTU1OTk3NTMzMDIxODkw/top-gun-maverick-tom-cruise-la-mag.jpg";
    this.description = "This is a description of the card";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

    :host

      .wrapper { 
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

  

  render() {
    // return html`<div>${this.title}</div>`;
    return html`
      <button id="add">Add Card</button>
      <button class="duplicate">Clone Card</button>
      <button id='name-change'>Change name</button>
      <button id='pic-change'>Change pic. dm me bruh</button>
      <button id="bg-change">Change background</button>
      <button id="delete">Delete card</button>

      <div class="wrapper">
        <div class="card">
          <img class="image" src="${this.imageSrc}" alt="Top Gun"/>
          <slot> </slot>
          <h2>${this.title}</h2>
          <div>
            <ul>
              <li>Carddddddd</li>
              <li><a href="${this.imageSrc}" target="_blank">Top gun is awesome</a></li>
            </ul>
          </div>
        </div>

        <div class="card">
          <img class="image" src="${this.imageSrc}" alt="Top Gun"/>
          <h2>${this.title}</h2>
          <div>
            <ul>
              <li>Carddddddd</li>
              <li><a href="${this.imageSrc}" target="_blank">Tom Cruise is awesome</a></li>
            </ul>
          </div>
        </div>

        <div class="card">
          <img class="image" src="${this.imageSrc}" alt="Top Gun"/>
          <h2>${this.title}</h2>
          <div>
            <ul>
              <li>Carddddddd</li>
              <li><a href="${this.imageSrc}" target="_blank">Top gun is awesome</a></li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
  
}

globalThis.customElements.define(MyCard.tag, MyCard);
