import { useEffect, useState} from "react";
import './MiApi.css'
import { MyCard } from "./MyCard";
import { URL_Base } from "./constantes";

export const MiApi = () => {

  const [preparaciones, setPreparaciones] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(URL_Base)
      .then((res) => res.json())
      .then(data => setPreparaciones(data.drinks))
      .catch((error) => setError(error))
  }, [])
  
  return (
    <div>
      <h1>Welcome to TheCocktail</h1>
      <section className="container">
        {preparaciones.length > 0 ?
        preparaciones.map((preparacion) => 
        <MyCard key={preparacion.idDrink}{...preparacion}/>)
        : <div className="loader"></div>
        }
      </section>
    </div>
  )
}
