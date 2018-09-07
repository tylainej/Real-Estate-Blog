import React, { Component } from 'react';
import './App.css';
import { fetchArticles, fetchArticle, saveArticle } from './services/api';
import Articles from './components/Articles';
import ShowArticle from './components/ShowArticle';
import CreateArticle from './components/CreateArticle';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "articles",
      articles: [],
      article: [],
      // subject: [],
      content: '',
      title: '',

      //creates an array of objects
    }
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
      })
  }
  // works on the read more button to change state from all to one
  handleArticleClick(id) {
    fetchArticle(id)
      .then(resp => {
        this.setState({ article: resp });
      });
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
          article={this.state.article}
        />
      case 'articles':
        return <Articles
          // handleClick={this.handleClick}
          articles={this.state.articles}
          handleArticleClick={this.handleArticleClick}
          switchView={this.switchView}
        />
    }
  }
  // addToArticles(id, title, content) {
  //   fetchArticles(id)
  //     .then(resp => {
  //       this.setState({
  //         [title]: resp.articles,
  //         [content]: resp.articles
  //       });
  //     });
  // }


  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

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
  
    // console.log('this is article:', article);
    saveArticle(newArticle)
        .then(resp =>
          fetchArticles())
        .then(resp => {
          this.setState({
            currentView: "articles",
            articles: resp
          })
      console.log(resp)
        })

        .catch(err => {
          throw (err);
        });
    
  }



  render() {
    return (
      <div className="main-page">
        <div className="App-header">
          <h1>Real Estate Blog</h1>
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
        <div className="Articles">

          {this.currentView()}
        </div>
      </div>
    );
  }
}

export default App;
