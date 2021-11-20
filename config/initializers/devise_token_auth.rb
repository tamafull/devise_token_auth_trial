# frozen_string_literal: true

DeviseTokenAuth.setup do |config|
  config.token_cost = Rails.env.test? ? 4 : 10
  config.token_lifespan = 1.weeks
  config.change_headers_on_each_request = false
  # NOTE: https://devise-token-auth.gitbook.io/devise-token-auth/faq#config-initializers-devise_token_auth.rb-1
  # config.enable_standard_devise_support = true
  config.headers_names = {
    :'access-token' => 'access-token',
    :'client' => 'client',
    :'expiry' => 'expiry',
    :'uid' => 'uid',
    :'token-type' => 'token-type'
  }
end
