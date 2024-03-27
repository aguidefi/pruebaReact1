import { useState } from "react"
import { URL_Base } from "./constantes"
import { Alert } from "react-bootstrap";


export function Buscador() {
  
  const [preparacion, setPreparacion] = useState ('')
  const [ err, setErr] = useState(null);

  function Alerta({mensaje, color}) {
    return <Alert variant={color}>{mensaje}</Alert>;
  }
  
  const cocktailByName = () => {
    if(preparacion === '' || preparacion === ' '){
      return setErr(true)
    } else {
      fetch(`${URL_Base}=${preparacion}`)
        .then((res) => res.json())
        .catch((err) => console.log(err))
    }
    
  }
  
  const handlePreparacionChange = (e) => {
    setPreparacion(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    cocktailByName(preparacion)
  }

  return (
    <form className="buscador" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for a cocktail..." value={preparacion} onChange={handlePreparacionChange} />
      <button type="submit">🔎</button>
      { err ? <Alerta color="danger" mensaje="Enter a correct cocktail" /> : null  }
    </form>
  )
}
