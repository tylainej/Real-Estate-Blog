const BASE_URL = "http://localhost:3000"

export function fetchArticles(articles) {
    return fetch(`${BASE_URL}/articles`)
        .then(resp => resp.json())
        .catch(err => {
            throw (err);
        });
}

//  function fetchArticles(ArticleId) {
//     return fetch(`${BASE_URL}/articles/${ArticleId}`)
//     .then(resp => {
//         return resp.json()
//     })
//     .catch(err => {
//         throw (err);
//     });
// }

 