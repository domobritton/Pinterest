Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#index'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :pins, only: [:index, :show, :create, :destroy]
    resources :boards, only: [:index, :show, :create, :update, :destroy]
  end
end
