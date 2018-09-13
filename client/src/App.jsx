import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Articles from './components/Articles';
import ShowArticle from './components/ShowArticle';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';
import {
  fetchArticles,
  fetchArticle,
  saveArticle,
  updateArticle,
  deleteArticle
} from './services/api';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "articles",
      articles: [],
      article: [],
      title: '',
      content: '',
      id: '',
      editedArticle: ''
    }
    this.handleMainPageClick = this.handleMainPageClick.bind(this);
    this.handleCreateArticleClick = this.handleCreateArticleClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteArticleClick = this.handleDeleteArticleClick.bind(this);
    this.handleUpdateArticle = this.handleUpdateArticle.bind(this);
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
        this.setState({ article: resp });
      });
  }

  handleEditClick(article) {
    fetchArticle(article.id)
      .then(resp => {
        this.setState({
          currentView: "edit article",
          editedArticle: article.id,
          ...resp
        });
      }
      )
  }
  handleCreateArticleClick(e) {
    this.setState({
      currentView: "create article"
    })
  }
  handleEditArticle(resp) {
    this.setState({
      editedArticle: resp,
      name: resp.name,
      title: resp.title,
      id: resp.id,
      content: resp.content,

    });
  }

  handleUpdateArticle(e) {
    e.preventDefault();
    const {
      title,
      content
    } = this.state;
    const article = {
      title: title,
      content: content,
      id: this.state.article.id
    }
    updateArticle(article)
      .then(resp =>
        fetchArticle(article.id))
      .then(resp => {
        this.setState({
          currentView: "article",
          article: article,
          title,
          content,
          id: this.state.article.id
        })
      })
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

  handleDeleteArticleClick(id) {
    deleteArticle(id)
      .then(resp => {
        fetchArticles()
          .then(resp => {
            this.setState({
              currentView: "articles",
              editedArticle: '',
              article: resp
            })
          })
      })
  }

  handleMainPageClick() {
    this.setState({
      currentView: "articles"
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
          article={this.state.article}
          handleChange={this.handleChange}
          handleEditClick={this.handleEditClick}
          handleEditArticle={this.handleEditArticle}
          handleMainPageClick={this.handleMainPageClick}
        />
      case 'articles':
        return <Articles
          articles={this.state.articles}
          handleArticleClick={this.handleArticleClick}
          switchView={this.switchView}
        />
      case 'edit article':
        return <EditArticle
          title={this.state.title}
          content={this.state.content}
          handleChange={this.handleChange}
          editedArticle={this.state.editedArticle}
          handleArticleSubmit={this.handleArticleSubmit}
          handleUpdateArticle={this.handleUpdateArticle}
          handleDeleteArticleClick={this.handleDeleteArticleClick}
          handleMainPageClick={this.handleMainPageClick}
        />
      case 'create article':
        return <CreateArticle
          name={this.state.name}
          title={this.state.title}
          content={this.state.content}
          handleArticleSubmit={this.handleArticleSubmit}
          handleChange={this.handleChange}
          handleCreateArticleClick={this.handleCreateArticleClick}
          handleMainPageClick={this.handleMainPageClick}
        />
      default:
        return null;
    }

  }

  render() {
    return (
      <div className="main-page">
        <div className="App-header">
          <h1 className="app-title"
            onClick={() => {
              this.handleMainPageClick();
            }}
          >
            Blurb</h1>
        </div>
        <div className="page-wrapper">
          <nav className="nav-bar">
            <span className="main-page-click"
              onClick={() => {
                this.handleMainPageClick();
              }}
            ><h1>Main Page</h1></span>
            <span className="create-article-button"
              onClick={() => {
                this.handleCreateArticleClick();
              }}
            >
              <h1>Write Your Own Article</h1>
            </span>
          </nav>
          <div className="articles-wrapper">

            {this.currentView()}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
