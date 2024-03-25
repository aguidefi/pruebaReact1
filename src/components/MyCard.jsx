export const MyCard = ({strDrinkThumb, strDrink, strInstructions, strGlass}) => {

  return (
    <div className="drink">
      <img src={strDrinkThumb} alt={strDrink} style={{width:'200px'}}/>
      <div className="drink-info">
        <h2 className="drink-data">{strDrink}</h2>
        <p>
          <span className="drink-data">Instructions:</span>
          {strInstructions}
        </p>
        <p>
          <span className="drink-data">Glass:</span>
          {strGlass}
        </p>
      </div>
    </div>
  )
}

