import React from 'react';

function ShowArticle(props) {
 return (this.props.articles.map((article) => {
           return(
        <div key = { article.id } className="show-article">

                    <div className="single-article">
                    <h1> { props.article.subject }</h1>
                  <h2>  { props.article.title } </h2>
                     <p>  { props.article.content } </p>
                
                <button className="edit-article-button"
                onClick={ ()=> {
                    props.handleEditArticle(article.id)
                    props.switchView("edit article")
                }}>  
                Edit Article                 
                </button>
            </div>
               
  
            </div>)
        })       
    );
        
};

export default ShowArticle;

