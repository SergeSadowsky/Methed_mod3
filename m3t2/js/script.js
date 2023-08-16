{
    function debounce(func, timeout ){
        let timer;
        return (...args) => {
        clearTimeout(timer);
        console.log(...args);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }
    
    function saveInput(e, o){
        o.textContent = e.target.value;
    }

    const myOutput= document.querySelector('#myOutput');
    const processor = debounce((e) => saveInput(e, myOutput), 300);

    const myInput = document.querySelector('#myInput');
    myInput.addEventListener('input',processor);
}
