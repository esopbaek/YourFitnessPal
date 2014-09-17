class PostsController < ApplicationController
  def index
    @posts = Post.where("user_id = ?", current_user.id)
  end
  
  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    
    if @post.save
      redirect_to dashboard_url
    else
      flash[:errors] = @post.errors.full_messages
    end
  end
  
  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to dashboard_url
  end
  
  private
  def post_params
    params.require(:post).permit(:content)
  end
end