import React from 'react';

function ShowArticle(props) {
 return (
            <div className="show-article">

       {props.article.map(a => {
           return (
                    <div key = {a.a.id}className="single-article">
                    <h1> { props.article.subject }</h1>
                  <h2>  { props.article.title } </h2>
                     <p>  { props.article.content } </p>
                
                <button className="edit-article-button"
                onClick={ (()=> {
                    props.handleEditArticle(a.id)
                    props.switchView("edit article")
                })}>  
                Edit Article                 
                </button>
            </div>
               );
  
        })}         
            </div>

        );
};

export default ShowArticle;

