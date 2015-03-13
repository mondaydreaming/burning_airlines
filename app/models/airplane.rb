# == Schema Information
#
# Table name: airplanes
#
#  id         :integer          not null, primary key
#  name       :string
#  rows       :integer
#  aisles     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Airplane < ActiveRecord::Base
  has_many :flights
end
