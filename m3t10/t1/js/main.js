import { el, setChildren } from 'redom';

import * as cardObj from './cardObj'
import * as formObj from './formObj'

(() => {
    const creditCard = cardObj.init();
    const cardForm = formObj.init();

    const title = el('p', { className: 'secure' }, 'Secure Checkout');
    const card = el('div', { className: 'card' }, [title, creditCard.html, cardForm.html]);
    setChildren(document.body, el('div', { className: 'wrapper' }, [card]));


    cardForm.holderInputOnChange = () => {
        creditCard.holder = cardForm.cardHolder.value || 'John Doe';
    }

    cardForm.numberInputOnChange = () => {
        creditCard.number = cardForm.cardNumber.value || 'xxxx xxxx xxxx xxxx';
    }

    cardForm.dateInputOnChange = () => {
        creditCard.expiryDate = cardForm.cardDate.value || '08/24';
    }
})();
