# == Schema Information
#
# Table name: reservations
#
#  id         :integer          not null, primary key
#  flight_id  :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Reservation < ActiveRecord::Base
  belongs_to :flight
  belongs_to :user
end
