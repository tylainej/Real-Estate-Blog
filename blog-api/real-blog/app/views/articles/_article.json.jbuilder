json.extract! article, :id, :title, :content, :subject, :users_id_id, :comments_id_id, :created_at, :updated_at
json.url article_url(article, format: :json)
