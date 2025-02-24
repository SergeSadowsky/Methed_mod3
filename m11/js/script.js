const modalOrder = $('.modal-order');
const modalOrderForm = $('.modal-order__form')
const modalOrderTitle = $('.modal-order__title');
const modalOrderInput = $('.modal-order__input');
const presentBtn = $('.present__btn');

presentBtn.click(() => modalOrder.show(300));

modalOrder.on('click', (event) => {
    target = $(event.target);
    closest = target.closest('.modal-order__close').length;
    if(target.is('.modal-order') || closest ){
        modalOrder.hide(300);
    }
});

modalOrderInput.focus(function () {
     modalOrderTitle.text(`Введите ${$(this).attr('placeholder')}`);
});

modalOrderInput.blur(() => modalOrderTitle.text('Заполните форму'));

modalOrderForm.submit(function (event) {
    event.preventDefault();

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/',
        type: 'POST',
        data: $(this).serialize(),
        success(data) {
            modalOrderTitle.text(
                `Спасибо, Ваша заявка принята, номер заявки ${data.id}`,
            );
            modalOrderForm.slideUp(100);
        },
        error() {
            modalOrderTitle('Что-то пошло не так, попробуйте позже.');
        },
    });

    this.reset();
});

const menu = $('.navigation');
const burgerBtn = $('.header__burger');
const menuCloseBtn = $('.navigation__close');

burgerBtn.on('click', () => {
    menu.animate({ left: 0 }, 500, () => {
        menuCloseBtn.animate({ opacity: 1 }, 300, 'swing');
    });
});

const closeMenu = () => {
    menuCloseBtn.animate({ opacity: 0 }, 300, 'swing', () => {
        menu.animate({ left: '-100%' }, 500);
    });
}

menuCloseBtn.on('click', () => {
    closeMenu();
});

$('body').on('click', (event) => {
    target = $(event.target);
    if(target.closest('.navigation').length === 0){
        if(menu.css('left') === '0px'){
            closeMenu();
        }
    }    
});
