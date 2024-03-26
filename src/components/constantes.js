export const URL_Base = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s'

export const getCocktails = (fn) => {
  fetch(URL_Base)
    .then((res) => res.json())
    .then((data) => fn(data.drinks))
    .catch((err) => console.log(err))
}
