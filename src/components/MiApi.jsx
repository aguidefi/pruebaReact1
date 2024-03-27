import { useEffect, useState} from "react";
import { MyCard } from "./MyCard";
import { Button } from "react-bootstrap";
import { URL_Base } from "./constantes";


export const MiApi = () => {

  const [preparaciones, setPreparaciones] = useState([])

  useEffect(() => {
      fetch(URL_Base)
        .then((res) => res.json())
        .then((data) => setPreparaciones(data.drinks))
        .catch((err) => console.log(err))
  }, [])

  const ascendingEvent = () => {
    let dataPrep = [...preparaciones]
    if(dataPrep.length > 0) {
      let result = dataPrep.sort((a,b) => a.strDrink.localeCompare(b.strDrink))
      setPreparaciones(result)
    }
  }

  const descendingEvent = () => {
    let dataPrep = [...preparaciones]
    if(dataPrep.length > 0) {
      let result = dataPrep.sort((a,b) => b.strDrink.localeCompare(a.strDrink))
      setPreparaciones(result)
    }
  }
  
  return (
    <div className="all-body">
      <h1>Welcome to TheCocktail</h1>
      <section className="info">
        <hr />
        <p>Through this website we want to share with you our best recipes and tips, so that you can prepare exquisite drinks from home.
        In this space you can find dozens of recipes for cocktails with pisco, vodka, rum, tequila, whiskey, gin, among others. Step by step we are going to show you how to prepare delicious drinks, whose preparations do not require sophisticated ingredients or experience in the world of cocktails. Come on board and enjoy the content of our website.</p>
        <hr/>
      </section>
      <div className="order">
      <Button variant="outline-info" onClick={ascendingEvent}>Order A -> Z</Button>
      <Button variant="outline-info" onClick={descendingEvent}>Order Z -> A</Button>
      </div>
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
