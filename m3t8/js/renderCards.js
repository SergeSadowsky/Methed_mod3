const renderCards = (err, data, obj) => {
    if(err) {
        console.log(err);
        return;
    }

    // description.match(/^.{200}\w*/)
    obj.result = data.totalResults;
    const promises = data.articles.splice(0,obj.quantity).map( item => {
        return new Promise((resolve,reject) => {
            const newsDate = new Date(item.publishedAt);
            const card = document.createElement('li');
            card.className = 'news-item';
            const img = document.createElement('img');
            img.className = 'news-image';
            img.alt = item.title;
            card.append(img);
            card.insertAdjacentHTML('beforeend',`                
                <h3 class="news-title">
                    <a href="#" class="news-link">${item.title}</a>
                </h3>
                <p class="news-description">${item.description}</p>
                <div class="news-footer">
                    <time class="news-datetime" datetime="${item.publishedAt}">
                        <span class="news-date">${newsDate.toLocaleDateString()}</span> ${newsDate.toLocaleTimeString()}
                    </time>
                    <p class="news-author">${item.author || ''}</p>
                </div>`);
            img.src = item.urlToImage || 'image/noPhoto.jpg';
            img.addEventListener('load', () => {resolve(card)});
            img.addEventListener('error', ({target}) => {
                // console.log(target) 
                target.src = 'image/noPhoto.jpg';
            });
        });       
    });
    return Promise.all(promises);
};

export default renderCards;
