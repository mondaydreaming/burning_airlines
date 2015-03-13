Rails.application.routes.draw do
  devise_for :users
  root :to => 'flights#search'

  get '/search' => 'flights#search'

  resources :reservations

  resources :flights

  resources :airplanes

end
