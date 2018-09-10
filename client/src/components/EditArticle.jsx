import React from 'react';

function EditArticle(props) {
    return (
        <div>
            <h1>Edit Article:</h1>
            <form onSubmit={props.handleUpdateArticle} >
                <input
                    type="text"
                    name="name"
                    value={props.title}
                    placeholder="Article Title"
                    onChange={props.handleChange} />
                <input
                    type="text"
                    name="content"
                    value={props.content}
                    placeholder="Content"
                    onChange={props.handleChange} />
                <input
                    type="submit"
                    value="submit Article"
                />
            </ form>
        </div>
    );

}

export default EditArticle;