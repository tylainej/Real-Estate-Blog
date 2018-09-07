import React from 'react';

function CreateArticle(props){
    return(
        <div>
        <h1>Write Your Own Article</h1>
        <form onSubmit={props.handleArticleSubmit} >
                {/* <input
                    type="text"
                    subject="subject"
                    value={props.subject}
                    placeholder="What's the Subject"
                    onChange={props.handleChange} /> */}
                <input
                    type="text"
                    name="title"
                    value={props.title}
                    placeholder="Title"
                    onChange={props.handleChange} />
                <input
                    type="text"
                    name="content"
                    value={props.content}
                    placeholder="Your Article Goes Here"
                    onChange={props.handleChange} />
                <select
                    value={props.brandId}
                    name="subject"
                    onChange={props.handleChange} >
                    <option value='' >Choose a Topic</option>
                    {props.subjects.map(subject => {
                        return (
                            <option
                                key={articles.subject}
                                value={articles.id}>
                            </option>
                        )
                    })}
                </select>
                <input
                    type="submit"
                    value="Submit Article"
                />
            </ form>
        </div>
    )


}

export default CreateArticle;