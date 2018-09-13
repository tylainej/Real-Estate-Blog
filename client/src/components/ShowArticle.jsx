import React from 'react';

function ShowArticle(props) {
    return (
        <div className="show-article">

            <div className="single-article">
                {/* <h1 className="subject-showarticle"> {props.article.subject}</h1> */}
                <h2 className="title-showarticle">  {props.article.title} </h2>
                <p className="content-showarticle">  {props.article.content} </p>

                <button className="edit-article-button"
                    onClick={(evt) => { props.handleEditClick(props.article) }} >
                    Edit Article
                </button>

            </div>

        </div>

    );

};

export default ShowArticle;




