function init() {
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {

  var name = document.getElementById('name').value;
  var description = document.getElementById('description').value;
  var in1 = document.getElementById('ingredient_1').value;
  var in2 = document.getElementById('ingredient_2').value;
  var in3 = document.getElementById('ingredient_3').value;
  var in4 = document.getElementById('ingredient_4').value;
  var in5 = document.getElementById('ingredient_5').value;

  var recipe = {

    'name': name,
    'description': description,
    'ingredient_1': in1,
    'ingredient_2': in2,
    'ingredient_3': in3,
    'ingredient_4': in4,
    'ingredient_5': in5
  }



  console.log(recipe);
}
