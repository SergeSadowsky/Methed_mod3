//  1. Вам дан массив с именами файлов

const fileArray = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js'];

// Напишите функцию которая может перебрать такой массив и отфильтрует его оставив только имена файлов с расширениями .js .jsx .ts

const getScripts = (arr) => arr.filter(el => el.match(/([^\s]+(?=\.(jsx?|ts))\.\2)/));

console.log('Task 1 result:');
console.log('fileArray: ', fileArray);
console.log(getScripts(fileArray));


// 2. Напишите регулярное выражение, которое находит email адреса:
// До символа @ email может содержать не менее одного символа класса \w.
// После символа @ и до .(точки), после которой начинается домен, может содержать только буквы и быть не короче трех символов.
// После .(точки) может содержать только буквы и быть от 2 до 5 символов в длину.

// Примеры валидные: info@methed.ru, max24@mail.com, java_script@google.io
// Примеры не валидные: my-mail@yandex.ru, tom_yam@ya.ru, zero@mai1.xyz

const regEx = /^[\w]+?@[a-zA-Z]{3,}\.[a-zA-Z]{2,5}/;

console.log('\nTask 2 result:');
console.log('info@methed.ru =>', regEx.test('info@methed.ru'));
console.log('max24@mail.com =>', regEx.test('max24@mail.com'));
console.log('java_script@google.io =>', regEx.test('java_script@google.io'));
console.log('my-mail@yandex.ru =>', regEx.test('my-mail@yandex.ru'));
console.log('tom_yam@ya.ru =>', regEx.test('tom_yam@ya.ru'));
console.log('zero@mai1.xyz =>', regEx.test('zero@mai1.xyz'));

// 3. Напишите регулярное выражение, которое находит текст в скобках
// Проверьте на этом примере

const testText = 'Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.';

const regex = /\(.+?\)/g;

console.log('\nTask 4 result:');
console.log('testText: ', testText);
console.log(testText.match(regex));

// 4. Напишите функцию которая принимает строку, в этой строке находит url адрес и заменяет с помощью replace на тег
// домены вида http://site.ru, https://site.com на 
//    <a href="http://site.ru">site.ru</a> 
//    <a href="https://site.ru">site.ru</a> 

const textToLink = (text) => {
    const regEx = /https?:\/\/([\dA-Za-z-]+\.){1,}([a-z]){2,}/gm;
    return text.replace(regEx, (str) => 
    `<a href="${str}">${str.replace(/https?:\/\//,'')}</a>`);
};

const testText2 = `Напишите функцию которая принимает строку, в этой строке находит url адрес и заменяет с
 помощью replace на тег домены вида http://site.ru, https://site.com на`;

console.log('\nTask 3 result:');
console.log('testText2: ', testText2);
console.log(textToLink(testText2));


