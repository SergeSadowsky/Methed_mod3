const input = document.getElementById('input');
const output = document.getElementById('output');
const outputHtml = document.getElementById('outputHtml');

const prep = 'в, без, до, для, за, через, над, по, из, у, около, под, о, про, на, к, перед, при, с, между'.split(', ');

input.addEventListener('input', () => {
    let result = input.value;
    
    // После предлогов ставится неразрывной пробел &nbsp;

    prep.forEach(el => {
        result = result.replace(new RegExp(`(\\s${el})\\s`, 'igm'),`$1&nbsp;`);
    });

    // Заменятеся ©	знак охраны авторского права (copyright) на &#169;
    // Знаки # и № номера заменются на &#8470;
    // Если вокруг тире пробелы то заменятся на &#151;
    // Не важно длинное тире или короткое

    // Если встречается текст в кавычках, то кавычки заменяются на ёлочки
    // &laquo; « левая кавычка (левая елочка)
    // &raquo; » правая кавычка (правая елочка)

    result = result.replace(/©/gm, '&#169;')
        .replace(/[#|№]/gm, '&#8470;')
        .replace(/\s-\s/gm, ' &#151; ')
        .replace(/"(.+?)"/gm, '&laquo;$1&raquo;');

    output.textContent = result;
    outputHtml.innerHTML = result;
});

