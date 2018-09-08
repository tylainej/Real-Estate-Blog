import React from 'react';

function ShowArticle(props) {
  
        return (
        <div>
            <div className="show-article">
                <div
                    className="single-article">
                    <h1> { props.article.subject }</h1>
                  <h2>  { props.article.title } </h2>
                 <div><p>  { props.article.content } </p></div>
                </div>
                <button className="edit-article-button"
                onClick={() =>
                props.handleEditArticleClick
                 }>  
                Edit Article                 
                </button>
                
            </div>
        </div>
        );
};

export default ShowArticle;

