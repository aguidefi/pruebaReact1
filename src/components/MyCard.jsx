
export const MyCard = ({idDrink, strDrinkThumb, strDrink, strCategory, strAlcoholic, strGlass, strInstructions, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6}) => {


  const measure = [
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6
  ]

  const ingredient = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
  ];


  return (
    <div className="card">
    <img src={strDrinkThumb} alt={strDrink} style={{width: '335px'}}/>
    <div className="info-card">
      <h4><strong>{strDrink}</strong></h4>
      <p>Category: {strCategory}</p>
      <p>{strAlcoholic}</p>
      <div className="list-ing">
      <ul>
      {measure.map((item) => {
        return item ? (
          <li style={{ margin: "10px" }} key={idDrink++}>
          {item}
          </li>
        ) : null;
      })}
      </ul>
      <ul>
      {ingredient.map((item) => {
        return item ? (
          <li style={{ margin: "10px" }} key={idDrink++}>
          {item}
          </li>
        ) : null;
      })}
      </ul>
      </div>
      <p>{strInstructions}</p>
      <p>Glass: {strGlass}</p>
    </div>
  </div>
  )
}



