import { el, setChildren } from 'redom';
import Inputmask from 'inputmask';
import JustValidate from 'just-validate';
import { debounce } from './debounce';

class Form {
    constructor() {
        this._html = this._renderHtml();
    }

    get html() {
        return this._html;
    }

    set holderInputOnChange(value) {
        this.cardHolder.addEventListener('input', debounce(value, 150));
    }

    set numberInputOnChange(value) {
        this.cardNumber.addEventListener('input', debounce(value, 150));
    }

    set dateInputOnChange(value) {
        this.cardDate.addEventListener('input', debounce(value, 150));
    }

    set cvvInputOnChange(value) {
        this.cardCvv.addEventListener('input', debounce(value, 150));
    }

    _createFormField({ id, type, labelText, className }) {

        // <div class="form__input-wrap form__input-wrap_holder">
        //   <label for="" class="form__label form__holder-label">Card Holder</label>
        //   <input type="text" class="input input__holder">
        // </div>

        const wrapper = el('div', { className: `form__input-wrap form__input-wrap_${className}` })
        const label = el('label', { className: `form__label form__${className}-label`, for: id }, labelText);
        const input = el('input', { className: `input input__${className}`, type: `${type}`, id: `${id}`, name: `${id}` });
        Reflect.set(this, id, input);
        setChildren(wrapper, [label, input]);

        return wrapper;
    }

    _renderHtml() {
        const form = el('form', { className: 'form', id: 'form', action: '#' });
        const holderField = this._createFormField({ id: 'cardHolder', type: 'text', labelText: 'Card Holder', className: 'holder' });
        const numberField = this._createFormField({ id: 'cardNumber', type: 'tel', labelText: 'Card Number', className: 'number' });
        const dateField = this._createFormField({ id: 'cardDate', type: 'tel', labelText: 'Card Expiry', className: 'date' });
        const cvvField = this._createFormField({ id: 'cardCvv', type: 'tel', labelText: 'CVV', className: 'cvv' });
        const formButton = el('button', { className: 'form__button' }, 'CHECK OUT');

        setChildren(form, [holderField, numberField, dateField, cvvField, formButton])

        new Inputmask('9999 9999 9999 9999', { 'placeholder': 'x' }).mask(this.cardNumber);
        new Inputmask('99/99', { 'placeholder': '__/__' }).mask(this.cardDate);
        new Inputmask('999', { 'placeholder': '___' }).mask(this.cardCvv);

        this._validate(form);
        return form;
    }

    _validate(form) {
        const validator = new JustValidate(form);

        validator
            .addField(form.cardHolder, [
                {
                    rule: 'required',
                    errorMessage: 'Card holder name is required',
                },
                {
                    rule: 'customRegexp',
                    value: /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/,
                    errorMessage: 'Please enter a valid holder name',
                },
            ])
            .addField(form.cardNumber, [
                {
                    rule: 'required',
                    errorMessage: 'Card number is required',
                },
                {
                    rule: 'customRegexp',
                    value: /^(\d{4} ){3}\d{4}$/,
                    errorMessage: 'Please enter a valid 16-digit card number',
                },
            ])
            .addField(form.cardDate, [
                {
                    rule: 'required',
                    errorMessage: 'Expiry date is required',
                },
                {
                    rule: 'customRegexp',
                    value: /^\d{2}\/\d{2}$/,
                    errorMessage: 'Enter correct date',
                },
                {
                    rule: 'custom',
                    validator: (value) => this._validateDate(value),
                    errorMessage: 'Enter correct date',
                },
            ])
            .addField(form.cardCvv, [
                {
                    rule: 'required',
                    errorMessage: 'CVV is required',
                },
                {
                    rule: 'customRegexp',
                    value: /^\d{3}$/,
                    errorMessage: 'Enter correct CVV',
                },
                {
                    rule: 'custom',
                    validator: (value) => !(value === '000'),
                    errorMessage: 'Enter correct CVV',
                },
            ]);

        Object.values(validator.fields).map(field => {
            field.elem.addEventListener('blur', () => {
                validator.revalidateField(field.elem);
            });
        });
    }

    _validateDate(value) {
        const [month, year] = value.split('/').map(Number);

        if (month < 1 || month > 12 || year < 0) {
            return false;
        }
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear() % 100;
        return (
            year > currentYear ||
            (month >= currentMonth && year === currentYear)
        );
    };

}

export const init = () => new Form();