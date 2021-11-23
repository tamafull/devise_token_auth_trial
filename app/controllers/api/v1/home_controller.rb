class Api::V1::HomeController < ApplicationController
  def index
    render json: {status: '200'}
  end
end
