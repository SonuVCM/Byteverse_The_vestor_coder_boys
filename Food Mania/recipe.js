const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('mealId');

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
.then(response => response.json())
.then(data => {

    document.getElementById("img").src = data.meals[0].strMealThumb;
    document.getElementById("name").textContent = data.meals[0].strMeal
    document.getElementById("para").textContent = data.meals[0].strInstructions


    console.log(data)
   
});