class ArticlesController < ApplicationController
#  only: [:show, :update, :destroy]

  # GET /articles
  # GET /articles.json
  def index
    @articles = Article.all
    render json: @articles
  end

 
  def show
    render json: @article = Article.find(params[:id])
  end

  # POST /articles
  # POST /articles.json

  skip_before_action :verify_authenticity_token
  def create
    @article = Article.create!(article_params)

    render json: Article.all
  end

  # PUT /articles/1
  # PUT /articles/1.json
  def update
    article = Article.where( id: params[:id])
    article.update(article_params)
    render json: {article:article }
  end

 
  def destroy
    article = Article.where(id: params[:id])
    article.destroy(params[:id])
  end

  private
    def article_params
      params.require(:article).permit(:id, :title, :content, :subject, :comments_id)
    end
end
