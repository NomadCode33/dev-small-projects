//Example fetch using thecocktaildb.com
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // trim() cuts spaces off the ends, encodeURIComponent() turns spaces in the middle into %20
  const choice = encodeURIComponent(document.querySelector('input').value.trim());
  console.log(choice);

  if(choice === ''){
    document.querySelector('h2').innerText = 'Type a cocktail name first';
    return;
  }

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);

        // the api sends back drinks: null when nothing matches
        if(data.drinks === null){
          document.querySelector('h2').innerText = 'No cocktail found';
          return;
        }

        let drink = data.drinks[0];

        document.querySelector('h2').innerText = drink.strDrink;
        document.querySelector('.drink-img').src = drink.strDrinkThumb;
        document.querySelector('.drink-img').alt = drink.strDrink;
        document.querySelector('.category').innerText = drink.strCategory;
        document.querySelector('.glass').innerText = drink.strGlass;
        document.querySelector('.alcoholic').innerText = drink.strAlcoholic;
        document.querySelector('.directions').innerText = drink.strInstructions;

        // clear the old list, then build a new one (the api has up to 15 ingredient slots)
        let list = document.querySelector('.ingredients');
        list.innerHTML = '';

        for(let i = 1; i <= 15; i++){
          let ingredient = drink['strIngredient' + i];
          let measure = drink['strMeasure' + i];

          if(ingredient){
            let item = document.createElement('li');
            item.innerText = `${measure || ''} ${ingredient}`.trim();
            list.appendChild(item);
          }
        }
      })
      .catch(err => {
          console.log(`error ${err}`);
      });
}
