# frozen_string_literal: true

class Api::TagsController < ApplicationController
  respond_to :json
  def index
    respond_with Tag.order(created_at: :DESC), include: :tasks
  end

  def create
    respond_with :api, Tag.create(tag_params)
  end

  def show
    respond_with Tag.find(params[:id]), include: :task
    end

  private

  def tag_params
    params.require(:tag).permit(
      :name
    )
  end
end
