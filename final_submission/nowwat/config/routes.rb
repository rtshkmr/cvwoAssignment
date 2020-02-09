# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # set root:
  root to: redirect('/tasks') # this is just to make the url look nice

  get 'tasks', to: 'site#index'
  get 'tasks/new', to: 'site#index'
  get 'tasks/:id', to: 'site#index'
  get 'tasks/:id/edit', to: 'site#index'
  get 'tags', to: 'site#index'
  get 'tags/:id', to: 'site#index'
  namespace :api do
    resources :tasks, only: %i[index show create destroy update]
    resources :tags
  end
end
