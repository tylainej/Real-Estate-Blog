import React from 'react';

function EditArticle(props) {


    return (
        <div>
            <h1>Edit Article:</h1>
            <form onSubmit={props.handleUpdateArticle} className="edit-article">
                <p>   <input
                    type="text"
                    name="name"
                    value={props.title}
                    placeholder="Article Title"
                    onChange={props.handleChange} /></p>
                <p>  <textarea
                    type="text"
                    name="content"
                    value={props.content}
                    placeholder="Content"
                    onChange={props.handleChange} /></p>
                <input
                    className="edit-submit-button"
                    type="submit"
                    value="submit Article"
                />
            </ form>
        </div>
    );

}

export default EditArticle;