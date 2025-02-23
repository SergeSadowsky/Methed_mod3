import { el, setChildren } from 'redom';
import IMask from 'imask';
import { renderCreditCard } from "./renderCard";
import { renderForm } from './renderForm';
import { mask } from './masks';

(() => {
  const title = el('div.payment-title', [
    el('h1', 'Payment Information'),
  ]);
  const ccRender = renderCreditCard();
  const formRender = renderForm();

  setChildren(document.body, [title, el('div.container', [ccRender]), formRender])

  const name = document.getElementById('name');
  const cardnumber = document.getElementById("cardnumber");
  const expirationdate = document.getElementById("expirationdate");
  const securitycode = document.getElementById("securitycode");

  const ccicon = document.getElementById("ccicon");
  const ccsingle = document.getElementById("ccsingle");

  const svgname = document.getElementById("svgname");
  const svgnameback = document.getElementById("svgnameback");
  const svgnumber = document.getElementById("svgnumber");
  const svgexpire = document.getElementById("svgexpire");
  const svgsecurity = document.getElementById("svgsecurity");

  const lightcolor = document.querySelectorAll(".lightcolor");
  const darkcolor = document.querySelectorAll(".darkcolor");
  const creditcard = document.querySelector(".creditcard");
  const generatecard = document.getElementById('generatecard');

  // функция для смены цвета у карточки
  const swapColor = (color) => {
    lightcolor.forEach((input) => {
      input.setAttribute('class', '');
      input.setAttribute('class', 'lightcolor ' + color);
    });
    darkcolor.forEach((input) => {
      input.setAttribute('class', '');
      input.setAttribute('class', 'darkcolor ' + color + 'dark');
    });
  };

  const cardnumber_mask = new IMask(cardnumber, {
    mask: mask,
    dispatch: function (appended, dynamicMasked) {
      const number = (dynamicMasked.value + appended).replace(/\D/g, '');

      for (let i = 0; i < dynamicMasked.compiledMasks.length; i++) {
        let re = new RegExp(dynamicMasked.compiledMasks[i].regex);
        if (number.match(re) != null) {
          return dynamicMasked.compiledMasks[i];
        }
      }
    }
  })

  //Change card vision denpending on type
  cardnumber_mask.on("accept", function () {
    ccicon.innerHTML = cardnumber_mask.masked.currentMask.icon;
    ccsingle.innerHTML = cardnumber_mask.masked.currentMask.logo;
    swapColor(cardnumber_mask.masked.currentMask.color);  
  });

  //Mask the Expiration Date
  const expirationdate_mask = new IMask(expirationdate, {
    mask: 'MM{/}YY',
    blocks: {
      YY: {
        mask: IMask.MaskedRange,
        from: 0,
        to: 99
      }, 
      MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12
      }
    }
  });

  //Mask the security code
  const securitycode_mask = new IMask(securitycode, {
    mask: '0000',
  });

  //Generate random card number from list of known test numbers
  const randomCard = function () {
    let testCards = [
      '4000056655665556',
      '5200828282828210',
      '371449635398431',
      '6011000990139424',
      '30569309025904',
      '3566002020360505',
      '6200000000000005',
      '6759649826438453',
      '2204320103183565',
    ];
    let randomNumber = Math.floor(Math.random() * testCards.length);
    cardnumber_mask.unmaskedValue = testCards[randomNumber];
  }
  generatecard.addEventListener('click', function () {
    randomCard();
  });

  //Flip card
  document.querySelector('.creditcard').addEventListener('click', function () {
    if (this.classList.contains('flipped')) {
      this.classList.remove('flipped');
    } else {
      this.classList.add('flipped');
    }
  })

  //On Input Change Events
  name.addEventListener('input', function () {
    if (name.value.length == 0) {
      svgname.innerHTML = 'Иван Иванов';
      svgnameback.innerHTML = 'Иван Иванов';
    } else {
      svgname.innerHTML = this.value;
      svgnameback.innerHTML = this.value;
    }
  });

  cardnumber_mask.on('accept', function () {
    if (cardnumber_mask.value.length == 0) {
      svgnumber.innerHTML = '0123 4567 8910 1112';
    } else {
      svgnumber.innerHTML = cardnumber_mask.value;
    }
  });

  expirationdate_mask.on('accept', function () {
    if (expirationdate_mask.value.length == 0) {
      svgexpire.innerHTML = '01/23';
    } else {
      svgexpire.innerHTML = expirationdate_mask.value;
    }
  });

  securitycode_mask.on('accept', function () {
    if (securitycode_mask.value.length == 0) {
      svgsecurity.innerHTML = '985';
    } else {
      svgsecurity.innerHTML = securitycode_mask.value;
    }
  });

  //On Focus Events
  name.addEventListener('focus', function () {
    creditcard.classList.remove('flipped');
  });

  cardnumber.addEventListener('focus', function () {
    creditcard.classList.remove('flipped');
  });

  expirationdate.addEventListener('focus', function () {
    creditcard.classList.remove('flipped');
  });

  securitycode.addEventListener('focus', function () {
    creditcard.classList.add('flipped');
  });

})();


