class WelcomeController < ApplicationController
  def index
  	@categories = Category.all.select {|k| k.parent.nil?}
  end
end
