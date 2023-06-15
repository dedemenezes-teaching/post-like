class LikesController < ApplicationController
  def create
    @post = Post.find(params[:post_id])
    @like = Like.new
    @like.post = @post
    respond_to do |format|
      if @like.save
        format.json # Follow the classic Rails flow and look for a create.json view
      else
        format.json # Follow the classic Rails flow and look for a create.json view
      end
    end
  end
end
