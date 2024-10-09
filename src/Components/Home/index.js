import {Component} from "react"
import {Navigate, Link} from "react-router-dom"
import RecipesList from '../RecipesList'
import RecipeItem from "../RecipeItem" 
import { FaSearch } from "react-icons/fa";
import "./index.css" 

class Home extends Component{ 
    state = {recipesListData:RecipesList(), selectedId:0, searchInput:"", updatedRecipesList:[]} 

    componentDidMount(){
        this.onUpdateData()

    }
    onClickSelectedRecipe=(id)=>{ 
       this.setState({selectedId:id})
       
    } 
    onchangeInput=(event)=>{
        const {recipesListData, searchInput} = this.state
        const value = (event.target.value).toLowerCase() 
        const updatedData = recipesListData.filter(recipe => recipe.name.toLowerCase().includes(value))  

        this.setState({searchInput:value, updatedRecipesList:updatedData}) 
        

    } 

    onUpdateData=()=>{
        const {recipesListData, searchInput} = this.state
        const updatedData = recipesListData.filter(recipe => recipe.name.toLowerCase().includes(searchInput))  
        this.setState({updatedRecipesList:updatedData})

    }
    

    
        render(){
            const {recipesListData, selectedId, updatedRecipesList}=this.state 
           console.log(updatedRecipesList)
        return(
            <div className="home-bg-container">
                <div className="top-container">
                <h1 className="heading">EpiRecipes Search Platform</h1> 
                <div className="search-input-container">
                <FaSearch />
                <input type="search" className="input-container"  onChange={this.onchangeInput} />
                </div>
                </div>
                <div className="recipes-container">
                {updatedRecipesList.map(eachRecipe => {
                    return (
                        <Link to={`/recipeDetails/${eachRecipe.id}`} className="link-item" key={eachRecipe.id}> 
                        <RecipeItem 
                        recipeDetails={eachRecipe} 
                        onClickSelectedRecipe={this.onClickSelectedRecipe}
                        />
                         </Link>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default Home
