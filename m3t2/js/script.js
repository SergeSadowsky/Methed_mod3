{
    function debounce(func, timeout ){
        let timer;
        return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }

    function renderOutput(e, o){
        o.textContent = e.target.value;
    }

    const myOutput= document.querySelector('#myOutput');
    const processor = debounce((e) => renderOutput(e, myOutput), 300);

    const myInput = document.querySelector('#myInput');
    myInput.addEventListener('input',processor);
}
