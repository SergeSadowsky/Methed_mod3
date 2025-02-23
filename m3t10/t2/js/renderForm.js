import {el, svg} from 'redom';

const createField = (id, attribs, title) => {
    const label = el('label', { for: id }, title);
    const input = el('input', {id, ...attribs});
    return el('div.field-container', [label, input]);
}

const createSvgIcon = () => svg('svg', {
    'id': 'ccicon',
    'class': 'ccicon',
    'width': 750,
    'height': 471,
    'viewBox': '0 0 750 471',
    'version': '1.1',
    'xmlns': 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
});

export const renderForm = () => {
    const formContainer = el('div', { class: 'form-container' });

    const name = createField('name', { maxlength: '20', type: 'text' }, 'Name');
    const cardNumber = createField('cardnumber', { type: 'text', pattern: '[0-9]*', inputmode: 'numeric' }, 'Card Number');
    const expirationDate = createField('expirationdate', { type: 'text', pattern: '[0-9]*', inputmode: 'numeric' }, 'Expiration (mm/yy)');
    const securityCode = createField('securitycode', { type: 'text', pattern: '[0-9]*', inputmode: 'numeric' }, 'Security Code')

    cardNumber.append(createSvgIcon());
    cardNumber.insertBefore(el('span#generatecard','generate random'), cardNumber.childNodes[1]);

    return el('div.form-container', [name, cardNumber, expirationDate, securityCode]);
};
