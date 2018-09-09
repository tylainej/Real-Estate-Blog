const BASE_URL = "http://localhost:3000"

export function fetchArticles(articles) {
    return fetch(`${BASE_URL}/articles`)
        .then(resp => resp.json())
        .catch(err => {
            throw (err);
        });
}
 
export function fetchArticle(id) {
    return fetch(`${BASE_URL}/articles/${id}`)
    .then(resp => {
        return resp.json()
    })
    .catch(err => {
        throw (err);
    });
}

export function saveArticle(article) {
    console.log('this is article:', article);
    const opts = {
        method: 'POST',
        body: JSON.stringify(article),
        headers: {
            'Content-Type': 'application/json'
        }
    };
// saves the article and then calls on the fetch to save a new article
    return fetch(`${BASE_URL}/articles`, opts)
        .then(resp => {
            return resp.json();
        }).catch(err => {
            throw (err);
        });
}
 

export function updateArticle(id, article) {
    const opts = {
        method: 'PUT',
        body: JSON.stringify({ article }),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${BASE_URL}/articles/${id}`, opts)
    .then(resp => {
        return resp.json();
    }).catch(err => {
        throw (err);
    });
}
