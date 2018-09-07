import React, { Component } from 'react';
import './App.css';
import { fetchArticles, fetchArticle } from './services/api';
import Articles from './components/Articles';
import ShowArticle from './components/ShowArticle';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentView: "articles",
      articles: [],
      article: []
    //creates an array of objects
    }
    this.handleArticleClick = this.handleArticleClick.bind(this);
    this.switchView = this.switchView.bind(this);
  }

  componentDidMount() {
    //Fetch articles on component mount, so we can pass it down as a prop 
    fetchArticles()
    .then(resp => {
      console.log(resp);
      this.setState({ articles: resp });
    })
  }
  handleArticleClick(id) {
    fetchArticle(id)
    .then(resp => {
      this.setState({ article: resp });
    });
  }
  switchView(view){
    this.setState({
      currentView: view
    })
  }

  currentView(){
    const { currentView } = this.state;
    switch ( currentView ) {
      case 'article':
      return <ShowArticle
      article={this.state.article}

      />
      case 'articles':
      return <Articles 
      // handleClick={this.handleClick}
       articles={this.state.articles}
       handleArticleClick={this.handleArticleClick}
       switchView = {this.switchView}
       />
    }
  }

  render() {
    return (
      <div className="main-page">
      <div className="App-header">
      <h1>Real Estate Blog</h1>
      </div>
      <div className="Articles">

        {this.currentView()}
      </div>
      </div>
    );
  }
}

export default App;
