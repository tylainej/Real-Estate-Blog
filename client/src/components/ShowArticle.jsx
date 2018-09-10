import React from 'react';

function ShowArticle(props) {
 return (
     <div className="show-article">

   
                    <div className="single-article">
                    <h1> { props.article.subject }</h1>
                  <h2>  { props.article.title } </h2>
                     <p>  { props.article.content } </p>
                
                <button className="edit-article-button">  
                Edit Article                 
                </button>
            </div>
         
     </div>

        );
};

export default ShowArticle;

