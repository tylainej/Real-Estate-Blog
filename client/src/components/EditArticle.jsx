import React from 'react';

function EditArticle(props) {

console.log(props)
    return (
        <div className="edit-article-wrapper">
            <h1 className="header" >Edit Article:</h1>
            <form onSubmit={props.handleUpdateArticle} className="edit-article">
                <p>   <input
                    className="edit-title"
                    type="text"
                    name="name"
                    value={props.title || ''}
                    placeholder="Article Title"
                    onChange={props.handleChange} /></p>

                <p>  <textarea
                    className="edit-content"
                    type="text"
                    name="content"
                    value={props.content || ''}
                    placeholder="Content"
                    onChange={props.handleChange} /></p>
                <input
                    className="edit-submit-button"
                    type="submit"
                    value="Edit Article"
                />
            </ form>
            <button className="delete-article-button"
                onClick={(evt) => {
                    evt.preventDefault();
                    props.handleDeleteArticleClick(props.editedArticle)
                }}>
                Delete Article
                    </button>
        </div>
    );

}

export default EditArticle;