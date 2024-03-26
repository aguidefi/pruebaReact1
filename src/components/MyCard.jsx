import { Button } from "react-bootstrap"

export const MyCard = ({strDrinkThumb, strDrink, strCategory}) => {

  return (
    <div className="card">
      <img src={strDrinkThumb} alt={strDrink} style={{width: '239.5px'}}/>
      <div className="info-card">
        <h4><strong>{strDrink}</strong></h4>
        <p>{strCategory}</p>
        <Button variant="outline-info">Recipe</Button>
      </div>
    </div>
  )
}



