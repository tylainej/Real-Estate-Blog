import React from 'react';

function CreateArticle(props) {
    return (
        <div className="create-article-wrapper">

            <div>
                <h2>Give The World Your Thoughts</h2>
                <form onSubmit={props.handleArticleSubmit} >
                    {/* <input
                    type="text"
                    subject="subject"
                    value={props.subject}
                    placeholder="What's the Subject"
                    onChange={props.handleChange} /> */}
                    <p>
                        <input className="title"
                            type="text"
                            name="title"
                            value={props.title}
                            placeholder="Title"
                            onChange={props.handleChange} />
                    </p>

                    <p>
                        <textarea
                            className="article-content"
                            type="text"
                            name="content"
                            value={props.content}
                            placeholder="Your Article Goes Here"
                            onChange={props.handleChange} /></p>
                    {/* <select
                    value={props.subject}
                    name="subject"
                    onChange={props.handleChange} >
                    <option value='' >Choose a Topic</option>
                    {props.articles.map(article => {
                        return (
                            <option
                                key={article.id}
                                value={article.id}>
                            </option>
                        )
                    })}
                </select> */}
                    <input
                        className="submit-article-button"
                        type="submit"
                        value="Submit Article"
                    />
                </form>
            </div>
        </div>
    )
}

export default CreateArticle;