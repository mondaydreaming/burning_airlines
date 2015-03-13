Rails.application.routes.draw do
  devise_for :users
  root :to => 'airplanes#new'

  resources :reservations

  resources :flights

  resources :airplanes

end
