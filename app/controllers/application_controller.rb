class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  devise_group :user, contains: [:api_v1_user]
  before_action :authenticate_user!, unless: :devise_controller?
  skip_before_action :verify_authenticity_token, if: :devise_controller?
end
