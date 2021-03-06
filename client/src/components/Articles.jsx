import React from 'react';

function Articles(props) {
    return (

        <div>
            {props.articles.map(article => {
                return (
                    <div key={article.id} className="Articles">
                        <div className="single-article">
                            <h2>   {article.title}     </h2>

                            <p> {article.content}</p>
                            <button
                                className="read-more"
                                onClick={(() => {
                                    props.handleArticleClick(article.id)
                                    props.switchView("article")
                                }
                                )}>
                                Read More</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Articles;

//function read but not called when without clappers
//with clappers the function is called immediately on load