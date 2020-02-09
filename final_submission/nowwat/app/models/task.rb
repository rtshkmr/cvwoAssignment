# frozen_string_literal: true

class Task < ApplicationRecord
  # Task associations
  has_many :taggings
  has_many :tags, through: :taggings, dependent: :destroy

  accepts_nested_attributes_for :tags
  accepts_nested_attributes_for :taggings, allow_destroy: true 


  # the tag_list model: getter
  def tag_list
    tags.collect(&:name).join(', ')
  end

  # tag_list= setter method
  def tag_list=(tags_string)
    # input handling is impt here!
    tag_names = tags_string.split(',').collect { |s| s.strip.downcase }.uniq
    # go thru each tag_names and find or create a tag w that name... [use Rails magical method]
    # tag = Tag.find_or_create_by(name: tag_name)
    # collect up these new or found tags and assign to the task
    new_or_found_tags = tag_names.collect { |name| Tag.find_or_create_by(name: name) }
    self.tags = new_or_found_tags
  end
end
