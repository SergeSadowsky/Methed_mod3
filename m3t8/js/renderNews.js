import getWord from "./wordForm.js";

const renderNews = (content) => {
    const section = document.createElement('section');
    section.innerHTML = `
    <h2 class="visually-hidden">Список новостей</h2>
    <div class="container">
        <ul class="news-list">
        </ul>
    </div>`;    
    const ul = section.querySelector('ul');
    content.forEach(element => {
        ul.append(element);
    });
    return section
}

export const renderSearch = ({content, q, length}) => {

    const template = document.createDocumentFragment();
    const div = document.createElement('div');
    div.className = 'title-wrapper';
    div.innerHTML = `
    <div class="container">
        <h1 class="visually-hidden">Агрегатор новостей</h1>
        <h2 class="title">По вашему запросу "${q}" найдено ${length} ${getWord(length, ['результат', 'результата', 'результатов'])}</h2>
    </div>`;
    const section = renderNews(content);
    template.append(div, section);
    return template;
};

export const renderHeadlines = ({content, length}) => {
    
    const template = document.createDocumentFragment();
    const div = document.createElement('div');
    div.className = 'title-wrapper';
    div.innerHTML = `
    <div class="container">
        <h2 class="title">Свежие новости</h2>
    </div>`;
    const section = renderNews(content)
    template.append(div, section);
    return template;
};
