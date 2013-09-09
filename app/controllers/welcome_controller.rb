class WelcomeController < ApplicationController
  def index
  	@categories = Category.all.select {|c| c.parent.nil?}
  end
end
