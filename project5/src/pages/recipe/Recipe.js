import "./Recipe.css";
import { useParams, useNavigate } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";
import { useState, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";

export default function Recipe() {
    const { recipeId } = useParams();
    const navigate = useNavigate();

    const [recipe, setRecipe] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    const {mode} = useTheme();

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                navigate({ pathname: "/" });
            }, 3000)
        }
    }, [error, navigate]);

    useEffect(() => {
        setIsPending(true);
        const unsubscribe = projectFirestore
            .collection("recipes")
            .doc(recipeId)
            .onSnapshot((doc) => {
                if (!doc.exists) {
                    setIsPending(false);
                    setError("Could not find that recipe.");
                } else {
                    // DOC IS FOUND
                    setIsPending(false);
                    setRecipe(doc.data());
                }
            })
        return () => unsubscribe();
    }, [recipeId]);

    const handleClick = () => {
        projectFirestore.collection("recipes").doc(recipeId).update({
            title: "Something completely different."
        });
    }

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
                    <button onClick={handleClick}>Update me</button>
                </>
            )}
        </div>
    )
}