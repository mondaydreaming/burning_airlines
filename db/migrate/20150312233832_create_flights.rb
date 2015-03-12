class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :flight_number
      t.string :origin
      t.string :destination
      t.datetime :date
      t.integer :plane_id

      t.timestamps null: false
    end
  end
end
