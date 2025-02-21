/* eslint-disable require-jsdoc */
import {el, setChildren} from 'redom';

class Card {
  constructor(){
    this._number = "xxxx xxxx xxxx xxxx";
    this._holder = "John Doe";
    this._dateMonth = "04";
    this._dateYear = "24";
    this._cvv = null;
    this._html = this._renderHtml();
  }

  get html(){
    return this._html;
  }

  set number(value) {
    this._number = value;
    this._elNumber.textContent = value
  }

  get number() {
    return this._number;
  }

  set holder(value) {
    this._holder = value;
    this._elHolder.textContent = value;
  }

  get holder() {
    return this._holder;
  }

  set expiryDate(value) {
    const [month, year] = value.split('/') 
    this._dateMonth = month;
    this._dateYear = year;

    this._elDate.textContent = this._getCardDate();
  }

  get expiryDate() {
    this._getCardDate()
  }

  set cvv(value) {
    this._cvv = value;
  }

  get cvv() {
    return this._cvv;
  }

  _renderHtml(){
    const html = el("div", { className: "credit-card" });
    this._elNumber = el(
      "span",
      { className: "card__number" },
      this._number
    );
    this._elHolder = el("span", { className: "card__name" }, this._holder);
    this._elDate = el("span", { className: "card__date" }, "04/24");

    setChildren(html, [
      this._elNumber,
      el("div", { className: 'card__personal' }, [this._elHolder, this._elDate]),
    ]);

    return html;
  }

  _getCardDate(){
    return this._dateMonth + "/" + this._dateYear;
  }
}

export const init = () => new Card();