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
    if @article.update(article_params)
      render json: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
    
    # respond_to do |format|
    #   if @article.update(article_params)
    #     format.html { redirect_to @article, notice: 'Article was successfully updated.' }
    #     format.json { render :show, status: :ok, location: @article }
    #   else
    #     format.json { render json: @article.errors, status: :unprocessable_entity }
    #   end
    # end
  end

 
  # def destroy
  #   @article.destroy
  #   respond_to do |format|
  #     format.html { redirect_to articles_url, notice: 'Article was successfully destroyed.' }
  #     format.json { head :no_content }
  #   end
  # end

  private
    def article_params
      params.require(:article).permit(:title, :content, :subject, :comments_id)
    end
end
