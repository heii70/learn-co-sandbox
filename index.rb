class Dog

  def set_name=(dogs_name)
    @this_dogs_name = dogs_name
  end
 
  def get_name
    @this_dogs_name
  end
end

lassie = Dog.new
lassie.set_name = "Lassie"
 
puts lassie.get_name