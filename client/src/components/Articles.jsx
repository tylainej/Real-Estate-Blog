import React from 'react';

function Articles(props){
    return (
<div>             
             { props.article.map(article => {
                 return (
                     <div key={ article.id } className="Articles">
                         <div 
                             className="single-article">
                                 { }
                             </div>
                        
                     </div>
                 );
             })}
</div>
    );
}

export default Articles;