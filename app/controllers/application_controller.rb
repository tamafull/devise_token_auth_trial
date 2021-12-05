class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  before_action :authenticate_api_v1_user!, unless: :devise_controller? # TODO: authenticate_user!にしたい
  skip_before_action :verify_authenticity_token, if: :devise_controller?
end
