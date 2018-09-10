import React from 'react';

function ShowArticle(props) {

    return (
        <div className="show-article">

            {props.article.map((art) => {
                return (
                    <div key={art.id} className="single-article">
                        <h1> {art.subject}</h1>
                        <h2>  {art.title} </h2>
                        <p>  {art.content} </p>

                        <button className="edit-article-button"
                            onClick={(evt) => { props.handleEditArticle(art) }} >
                            Edit Article
                </button>
                    </div>

                );
            })
            }
        </div>

    );

};

export default ShowArticle;

