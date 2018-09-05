Rails.application.routes.draw do
  resources :areas

  # resources :users do 
  #   resources :articles
  # end

  resources :articles do
    resources :comments
  end
  # resources :articles

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
