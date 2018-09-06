import React, { Component } from 'react';
import './App.css';
import { fetchArticles } from './services/api';
import Articles from './components/Articles';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: []
    //creates an array of objects
    }

  }

  componentDidMount() {
    //Fetch articles on component mount, so we can pass it down as a prop 
    fetchArticles()
    .then(resp => {
      console.log(resp);
      this.setState({ articles: resp });
    })
  }


  render() {
    return (
      <div className="main-page">
      <div className="App-header">
      <h1>Real Estate Blog</h1>
      </div>
      <div className="Articles">

        <Articles 
        // handleClick={this.handleClick}
         articles={this.state.articles} 
         />
      </div>
      </div>
    );
  }
}

export default App;
