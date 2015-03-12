json.array!(@airplanes) do |airplane|
  json.extract! airplane, :id, :name, :rows, :aisles, :timestamps
  json.url airplane_url(airplane, format: :json)
end
