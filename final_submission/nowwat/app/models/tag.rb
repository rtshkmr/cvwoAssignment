# frozen_string_literal: true

class Tag < ApplicationRecord
  has_many :taggings, dependent: :destroy
  has_many :tasks, through: :taggings

  accepts_nested_attributes_for :tasks
  accepts_nested_attributes_for :taggings, allow_destroy: true
end
