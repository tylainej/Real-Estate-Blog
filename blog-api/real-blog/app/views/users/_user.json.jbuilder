json.extract! user, :id, :password, :icon, :soc_media, :article_id, :created_at, :updated_at
json.url user_url(user, format: :json)
