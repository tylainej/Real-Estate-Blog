import React from 'react';

function ShowArticle(props) {
    // console.log(article)
    return (
        <div>
            <div className="Articles">
                <div
                    className="single-article">
                     {/* { props.article.subject }
                    { props.article.title } */}
                    { props.article.content }
                </div>
            </div>
        </div>
    )
};

export default ShowArticle;