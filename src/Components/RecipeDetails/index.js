import {useParams, Link} from "react-router-dom" 
import { FaStar } from "react-icons/fa6"; 
import { FaArrowLeftLong } from "react-icons/fa6";
import RecipesList from '../RecipesList' 
import "./index.css"
const RecipeDetails =()=>{ 
    const {id} = useParams(); 
   //const selectedId = Number(id)
   const RecipesListItems = RecipesList()
   const selectedRecipe = RecipesListItems.filter(eachItem => eachItem.id === id,   
   ) 
   //console.log(selectedRecipe[0])
   const {name, imageUrl, description, ratings,ingredients,method} = selectedRecipe[0]
  
   
   
 
   return (
    <div className="recipe-details-bg-container">
    <div className="recipe-details-container" >
    <img src={imageUrl} alt="image" className="image-details"/> 
    <div className="details-container">
    <h1 className="name-heading">{name}</h1>
    <p className="recipe-description">{description}</p>
    
    <div className="ratings">
    <p>{ratings}</p>
    <FaStar className="star"/>
    </div>
    </div>
    
    </div>
    <div className="process-container">
      <div className="details-container">
      <h1 className="high-lights">Ingredients</h1>
      <p className="text">{ingredients}</p>
      </div>
      <div className="details-container">
      <p className="high-lights">Method</p>
      <p className="text">{method}</p>
      </div>
      <Link to="/" className="back-btn-container">
      <FaArrowLeftLong />
      <button className="back-button">back</button>
       </Link>
    </div>
    </div>
   )
 }
 
 

export default RecipeDetails