import { useState } from "react"

export const Buscador = () => {
  
  const [preparacion, setPreparacion] = useState ('')

  const handlePreparacionChange = (e) => {
    setPreparacion(e.target.value)
  }

  

  return (
    <div className="buscador">
      <input type="text" placeholder="Enter cocktail name" value={preparacion} onChange={handlePreparacionChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}
