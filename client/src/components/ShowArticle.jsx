import React from 'react';

function ShowArticle(article){    
        return (
            <div key={ article.id } className="Articles">
                <div 
                    className="single-article">
                        { article.content }
                    </div>
               
            </div>
        );
    
};

export default ShowArticle;