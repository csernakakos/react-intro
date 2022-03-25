import "./Recipe.css";
import {useFetch} from "../../hooks/useFetch";
import {useParams, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import {useTheme} from "../../hooks/useTheme";

export default function Recipe() {
    const { recipeId } = useParams();
    const url = `http://localhost:3002/recipes/${recipeId}`;
    const { data: recipe, isPending, error } = useFetch(url);
    const navigate = useNavigate();

    const {mode} = useTheme();

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                navigate({ pathname: "/" });
            }, 3000)
        }
    }, [error, navigate]);
    return (
        <div className={`recipe ${mode}`}>
            {isPending && <div className="loading">Loading data...</div>}
            {error && <div className="error">{error}</div>}
            {recipe && (
                <>
                    <h2 className="page-title">{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to cook.</p>
                    <ul>
                        {recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                    </ul>
                    <p className="method">{recipe.method}</p>
                </>
            )}
        </div>
    )
}