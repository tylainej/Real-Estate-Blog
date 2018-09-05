class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :content
      t.string :subject
      t.references :users_id, foreign_key: true
      t.references :comments_id, foreign_key: true

      t.timestamps
    end
  end
end
