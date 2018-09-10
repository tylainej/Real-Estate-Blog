import React, { Component} from 'react';

class EditArticle extends Component {
    constructor(props){
    super(props);

    const { article } = props;
    this.state = {
        title: article.title,
        content: article.content,
        article: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

handleArticleSubmit(ev){
    ev.preventDefault();
    const data = {
        title: this.state.title,
        content: this.state.content
    }
    this.props.onSubmit(data);
}

render(){
    return (
        <div>
            <h1>Edit Article:</h1>
            <form onSubmit={this.state.handleUpdateArticle} >
                <input
                    type="text"
                    name="name"
                    value={this.state.title}
                    placeholder="Article Title"
                    onChange={this.state.handleChange} />
                <input
                    type="text"
                    name="content"
                    value={this.state.content}
                    placeholder="Content"
                    onChange={this.state.handleChange} />
                <input
                    type="submit"
                    value="submit Article"
                />
            </ form>
        </div>
    );
}
}

export default EditArticle;