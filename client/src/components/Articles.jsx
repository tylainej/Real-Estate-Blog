import React from 'react';

function Articles(props){
    return (
<div>             
             { props.articles.map(article => {
                 return (
                     <div key={ article.id } className="Articles">
                         <div 
                             className="single-article">
                                 { article.content }
                                 <br/>
                                 <button
                                    className="read-more"
                                     handleClick={props.handleClick}>
                                     
                                     Read More</button>
                             </div>
                        
                     </div>
                 );
             })}
</div>
    );
}

export default Articles;