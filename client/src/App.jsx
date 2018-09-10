import React, { Component } from 'react';
import './App.css';
import { fetchArticles, fetchArticle, saveArticle, updateArticle } from './services/api';
import Articles from './components/Articles';
import ShowArticle from './components/ShowArticle';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "articles",
      articles: [],
      article: [],
      title: '',
      content: '',
      editedArticle: ''
    }   
    // this.handleUpdateArticle = this.handleUpdateArticle.bind(this);
    // this.handleEditClick = this.handleEditClick.bind(this);
    this.handleEditArticle = this.handleEditArticle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleArticleSubmit = this.handleArticleSubmit.bind(this);
    this.handleArticleClick = this.handleArticleClick.bind(this);
    this.switchView = this.switchView.bind(this);
  }

  componentDidMount() {
    //Fetch articles on component mount, so we can pass it down as a prop 
    fetchArticles()
      .then(resp => {
        this.setState({ articles: resp });
      });
  }

  // click read more button to change state from all articles to one article
  handleArticleClick(article) {
    fetchArticle(article)
      .then(resp => {
        this.setState({ [article.content]: resp });
      });
  } 


handleEditArticle(article) {
    this.setState({ 
      editedArticle: article,
      name: article.name,
      title: article.title,
      content: article.content,
      currentView: "edit article"
     });
  }

handleUpdateArticle(e){
  e.preventDefault();
 const {
   title,
   content
 } =this.state;
 const article = {
   title,
   content
 }
updateArticle( article )
.then(resp =>
  saveArticle())
  .then(resp => {
    this.setState({
      currentView: "article",
      article: resp
    })
  })
}


  switchView(view) {
    this.setState({
      currentView: view
    })
  }
  // changes state from read all articles to show one article
  currentView() {
    const { currentView } = this.state;
    switch (currentView) {
      case 'article':
        return <ShowArticle
          article = { this.state.article }
          handleChange={this.handleChange}
          handleEditClick = { this.handleEditClick }
        />
      case 'articles':
        return <Articles
          // handleClick={this.handleClick}
          articles = { this.state.articles }
          handleArticleClick = { this.handleArticleClick }
          switchView = { this.switchView }
        />
      case 'edit article':
      return <EditArticle
          title = { this.state.title }
          content = { this.state.content }
          handleChange={this.handleChange}
          editedArticle = { this.state.editedArticle }
          handleArticleSubmit = { this.state.handleArticleSubmit }
          />
        default:
        return null;
    }

  }
 

// this function allows state to change to what's being put in 
  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  // this function work to create and article
  handleArticleSubmit(e) {
    e.preventDefault();
    const {
      title,
      content
    } = this.state;
    const newArticle = {
      title,
      content
    }
    saveArticle(newArticle)
        .then(resp =>
          fetchArticles())
        .then(resp => {
          this.setState({
            currentView: "articles",
            articles: resp
          })
        })
        .catch(err => {
          throw (err);
        });
  }



  render() {
    return (
      <div className="main-page">
        <div className="App-header">
          <h1>
            Real Estate Blog</h1>
        </div>
        <div className="create-nav">
          <CreateArticle
            name={this.state.name}
            title={this.state.title}
            content={this.state.content}
            handleArticleSubmit={this.handleArticleSubmit}
            handleChange={this.handleChange}
          />
        </div>
        <div className="articles-wrapper">

          {this.currentView()}
        </div>
      </div>
    );
  }
}

export default App;
