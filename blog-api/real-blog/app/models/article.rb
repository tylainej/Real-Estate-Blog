class Article < ApplicationRecord
  belongs_to :users_id
  has_many :comments_id
end
