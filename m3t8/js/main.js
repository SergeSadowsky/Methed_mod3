import fetchReq from "./fetchReq.js";
import preloader from "./preload.js";
import renderCards from "./renderCards.js";
import { renderSearch, renderHeadlines } from "./renderNews.js";

(function(){

    // const headlinesAPI = 'http://localhost:3000/headlines';
    // const searchAPI = 'http://localhost:3000/search';

    const headlinesAPI = 'https://newsapi.org/v2/top-headlines';
    const searchAPI = 'https://newsapi.org/v2/everything';

    preloader.create();

    const main = document.querySelector('main');
    const init = () => {
        preloader.show();
        const headlinesURL = headlinesAPI + '?' + new URLSearchParams({'language': 'ru'}).toString();
        const reqObj = { 
            url: headlinesURL,
            quantity: 12,
            result: NaN, 
        };
        fetchReq(reqObj, renderCards)
            .then(data => {        
                main.append(renderHeadlines({content: data, length: reqObj.result}));
                preloader.hide();                   
            })
    };

    init();

    const choicesElem = document.querySelector('.js-choice');
    const formSearch = document.querySelector('.form-search');

    const eventHandler = (e) => {
        preloader.show();
        let params = {'language': choicesElem.value || 'ru'};
        const headlinesURL = headlinesAPI + '?' + new URLSearchParams(params).toString();

        if(formSearch.search.value.length > 0){
            params = { 
                'language': choicesElem.value || '',
                'q': formSearch.search.value};
            const searchUrl = searchAPI+ '?' + new URLSearchParams(params).toString();
            
            const reqHlObj = { 
                url: headlinesURL,
                quantity: 4,
                result: NaN, 
            };

            const reqSrObj = { 
                url: searchUrl,
                quantity: 8,
                result: NaN, 
            };

            Promise.all([
                fetchReq(reqHlObj, renderCards),
                fetchReq(reqSrObj, renderCards)
            ]).then(data => {
                main.innerHTML = '';
                main.append(renderSearch({content: data[1], q: formSearch.search.value, length: reqSrObj.result }));
                main.append(renderHeadlines({content: data[0], length: reqHlObj.result}));
                preloader.hide();
            })
            return;
        };

        const reqObj = { 
            url: headlinesURL,
            quantity: 12,
            result: NaN, 
        };
        fetchReq(reqObj, renderCards)
            .then(data => {
                main.innerHTML = '';
                main.append(renderHeadlines({content: data, length: reqObj.result}));
                preloader.hide();

            })
    };

    choicesElem.addEventListener('change', eventHandler) ;
    formSearch.addEventListener('submit', e => {
        e.preventDefault();
        if(e.target.search.value.length === 0) return;
        eventHandler(e);
    });

})();

