Rails.application.routes.draw do
  root 'web/home#index'

  devise_for :users, path: ''

  namespace :api do
    scope :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
    end
  end

  scope :web do
    resource :home
  end
end
