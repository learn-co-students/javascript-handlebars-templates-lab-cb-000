function init()
{

  Handlebars.registerHelper('displayIngredient', function(){
    return new Handlebars.SafeString(`<p name = 'ingredientPara'>${this.value}</p>`) ;
  })

  Handlebars.registerHelper('displayIngredientsInputs', function(){
    console.log(this)
    return new Handlebars.SafeString(`<input type='text'  name='ingredients' value='${this}'><br>`)
  })
  var recipeDetailsPartial = Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
  var recipeFormPartial = Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML)

  var recipeFormTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)
  var main = document.getElementById('main')
  var ingredientsInputsValues = ["","","","",""]
  main.innerHTML += recipeFormTemplate({'name': "", 'description':"", 'ingredientsInputsValues': ingredientsInputsValues, 'onsubmitHandler': 'createRecipe()'})
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function createRecipe() {
//  if(event){
//    event.preventDefault()
//  }

  var name = document.getElementById('name').value
  var description = document.getElementById('description').value
  var ingredients = document.getElementsByName('ingredients')



  var recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
  var html = recipeTemplate({'name' : name, 'description' : description, 'ingredients': ingredients })
  var main = document.getElementById('main')

  main.innerHTML += html
}

function displayEditForm() {
//  if(event){
//    event.preventDefault()
//  }
  var recipeFormTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)

  var name = document.getElementById('namePara').innerHTML
  var description = document.getElementById('descriptionPara').innerHTML
  var ingredientsParas = document.getElementsByName('ingredientPara')
  var ingredients = []

  for(let i = 0; i < ingredientsParas.length; ++i)
  {
    ingredients.push(ingredientsParas[i].innerHTML)
  }

  var main = document.getElementById('main')
  var html = recipeFormTemplate({'name': name, 'description': description, 'ingredientsInputsValues': ingredients, 'onsubmitHandler': 'updateRecipe()'})
  main.innerHTML += html
}

function updateRecipe(){
  createRecipe()
}
