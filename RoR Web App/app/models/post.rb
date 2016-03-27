class Post < ActiveRecord::Base
  belongs_to :user
  validates :user_id, presence: true
  validates :content, presence: true, length: { maximum: 140 } # tweets are capped at 140 chars.
  default_scope -> { order(created_at: :desc) } # newest tweets / posts first
  has_attached_file :photo 
  #:styles => { :small => "300x300>" }
  validates_attachment :photo
    validates_attachment_content_type :photo, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  acts_as_votable
end
