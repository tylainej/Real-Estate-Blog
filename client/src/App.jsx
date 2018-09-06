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
    // this.handleArticleClick = this.handleArticleClick.bind(this);

  }

  componentDidMount() {
    //Fetch articles on component mount, so we can pass it down as a prop 
    fetchArticles()
    .then(resp => {
      console.log(resp);
      this.setState({ articles:  resp });
    })
  }

  render() {
    return (
      <div className="Articles">

        <Articles/>
      </div>
    );
  }
}

export default App;
