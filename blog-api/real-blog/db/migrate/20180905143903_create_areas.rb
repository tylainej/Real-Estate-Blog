class CreateAreas < ActiveRecord::Migration[5.2]
  def change
    create_table :areas do |t|
      t.string :location
      t.references :article_id, foreign_key: true

      t.timestamps
    end
  end
end
