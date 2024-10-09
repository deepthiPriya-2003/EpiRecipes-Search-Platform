import "./index.css"
const RecipeItem = props => {
    const {recipeDetails, onClickSelectedRecipe} = props
    const {id, name, imageUrl, description} = recipeDetails
  
    const onClickRecipe = () => {
        onClickSelectedRecipe(id)
    }
  
    return (
        <div key={id} className="image-container" onClick={onClickRecipe}>
        <img src={imageUrl} alt="image" className="image"/> 
        <p className="recipe-name">{name}</p>
        </div>
    )
  }
  
  export default RecipeItem 

  