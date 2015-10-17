class RemoveImageUrlAndAddAttachmentPictureToCocktails < ActiveRecord::Migration


  def self.up
    change_table :cocktails do |t|
      t.string   "picture_file_name"
      t.string   "picture_content_type"
      t.integer  "picture_file_size"
      t.datetime "picture_updated_at"
    end
  end

  def self.down
    remove_column :cocktails, :picture_file_name, :picture
    remove_column :cocktails, :picture_content_type, :picture
    remove_column :cocktails, :picture_file_size, :picture
    remove_column :cocktails, :picture_updated_at, :picture
  end
end
