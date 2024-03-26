import { useState } from "react"
import { URL_Base, getCocktails} from "./constantes"


export function Buscador() {
  
  const [preparacion, setPreparacion] = useState ('')

  const handlePreparacionChange = (e) => {
    setPreparacion(e.target.value)
  }

  const cocktailByName = (valor) => {
    if(valor === '' || valor === ' '){
      return getCocktails(preparacion)
    }
    fetch(`${URL_Base}=${valor}`)
      .then((res) => res.json())
      .then(data => setPreparacion(data.drinks))
      .catch((err) => console.log(err))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    cocktailByName(preparacion)
  }

  return (
    <form className="buscador" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for a cocktail..." value={preparacion} onChange={handlePreparacionChange} />
      <button type="submit">🔎</button>
    </form>
  )
}
