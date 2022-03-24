import "./RecipeList.css"
import {NavLink} from "react-router-dom";

export default function RecipeList({recipes}) {

    if (recipes.length === 0) {
        return (
            <div className="error">Sorry, no results!</div>
        )
    }

    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <div key={recipe.id} className="card">
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    {/* <p>{recipe.method.substring(0, 100)}</p> */}

                    <NavLink to={`/recipes/${recipe.id}`}>Cook this!</NavLink>
                </div>
            ))}
        </div>
    )
}
