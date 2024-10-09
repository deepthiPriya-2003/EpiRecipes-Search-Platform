import {Routes, Route} from "react-router-dom"
import Home from "./Components/Home"
import RecipeDetails from "./Components/RecipeDetails"
import './App.css'

function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/recipeDetails/:id" element={<RecipeDetails/>} ></Route>
        
        </Routes>
     </>
  )
}


export default App;
