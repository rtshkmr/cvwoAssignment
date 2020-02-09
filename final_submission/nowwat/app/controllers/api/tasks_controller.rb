# frozen_string_literal: true

class Api::TasksController < ApplicationController
  respond_to :json

  def index
    respond_with Task.order(deadline: :DESC), include: :tags
  end

  def show
    respond_with Task.find(params[:id]), include: :tags
  end

  def create
    respond_with :api, Task.create(task_params), include: :tags 
  end

  def destroy
    respond_with Task.destroy(params[:id]), include: :tags
  end

  def update
    task = Task.find(params['id'])
    task.update(task_params)
    respond_with Task, json: task
  end

  private

  def task_params
    params.require(:task).permit(
      :id,
      :title,
      :body,
      :deadline,
      :completed,
      :tags,
      :tag_list,
    )
  end
end
