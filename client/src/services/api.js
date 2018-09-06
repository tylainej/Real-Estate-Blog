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
        throw Error(err);
    });
}

 