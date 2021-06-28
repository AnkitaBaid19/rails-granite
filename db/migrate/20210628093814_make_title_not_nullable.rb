class MakeTitleNotNullable < ActiveRecord::Migration[6.1]
  def change
    validates :title, presence: true, length: { maximum: 50 }
  end
end
