const searchBtn = document.getElementById('btn');
	const mealList = document.getElementById('items');
	const mealDetailsContent = document.querySelector('.recipe');
	

	searchBtn.addEventListener('click', getMealList);
	
	

	

	function getMealList(){
	    let searchInputTxt = document.getElementById('searchInput').value.trim();

	    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
	    .then(response => response.json())
        // .then(res => console.log(res))
	    .then(data => {
	        let html = "";
	        if(data.meals){
	            data.meals.forEach(meal => {
                    link = `recipe.html?mealId=${meal.idMeal}`
	                html += `
                    
                    <div class="items" id="items" data-id = "${meal.idMeal}" >
                    <div class="image">
                        <img src="${meal.strMealThumb}" alt="image">
                    </div>
            
                    <div class="recipe">
                        <h2 id="name">${meal.strMeal}</h2>
                       
                        <button id="readbtn"><a href=${link}>Read more</a></button>
                    </div>
                </div>
	                    
	                `;
	            });
	            mealList.classList.remove('notFound');
	        } else{
	            html = "Sorry, we didn't find any meal!";
	            mealList.classList.add('notFound');
	        }
	

	        mealList.innerHTML = html;
	    });
	}
	

	

	