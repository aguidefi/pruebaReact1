import { useEffect } from "react"

export const Alcoholic = (fn) => {
  
  useEffect(() => {
    fetch('www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    .then((res) => res.json())
    .then(data => fn(data.drinks))
    .catch((err) => console.log(err))
  }, [])
}
