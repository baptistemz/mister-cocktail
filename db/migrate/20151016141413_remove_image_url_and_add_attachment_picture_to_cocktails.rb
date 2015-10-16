class RemoveImageUrlAndAddAttachmentPictureToCocktails < ActiveRecord::Migration

  def change
    remove_column :cocktails, :image_url, :string
  end

  def self.up
    change_table :cocktails do |t|
      t.attachment :picture
    end
  end

  def self.down
    remove_attachment :cocktails, :picture
  end
end
