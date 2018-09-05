# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Article.create!([
    {title: "New York Rocks", content: "I love living in NYC it rocks", subject: "Popular Cities"},
    {title: "Chicago Sucks", content: "Never moving there, it doesn't rock", suject: "Worst US cities"},
    {title: "LA is HOT", content: "LA has a lot of dry heat and I have never been", subject: "Best Weather to live in"}
])

Comment.create!([
    {content: "I agree, I think the same", article_id: 1},
    {content: "I don't agree and you suck for thinking that", article_id: 2},
    {contnet: "I don't care you wasted your time telling the world that", article_id: 3}

])