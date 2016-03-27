class Relationship < ActiveRecord::Base
	belongs_to :follower, class_name: "User"
	belongs_to :followed, class_name: "User"
	validates :follower_id, presence: true
	validates :followed_id, presence: true

	def follow(other)
		active_relationships.create(followed_id: other_id)
		
	end

	#unfollow

	def unfollow(other)
		active_relationships.find_by(followed_id: other_id).destroy
	end
	#check if following
	def following?(other)
		following.include?(other)
	end
end
