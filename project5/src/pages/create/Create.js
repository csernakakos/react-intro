import {useState, useRef} from "react";
import "./Create.css"

export default function Create() {
    const [title, setTitle] = useState("");
    const [method, setMethod] = useState("");
    const [cookingTime, setCookingTime] = useState("");
    const [newIngredient, setNewIngredient] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const ingredientInput = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, method, cookingTime)
    }

    const handleAdd = (e) => {
        e.preventDefault();
        const ing = newIngredient.trim();

        if (ing && !ingredients.includes(ing)) {
            setIngredients((prevIngredients) => {
                return [...prevIngredients, ing];
            })
        }
        setNewIngredient("");
        console.log(ingredientInput.current);
        ingredientInput.current.focus();
    }

    return (
        <div className="create">
            <h2 className="page-title">Add a new recipe</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe title</span>
                    <input 
                        type="text"
                        onChange={(e) => {setTitle(e.target.value)}}
                        value={title}
                        required
                    />
                </label>

                {/* INGREDIENTS */}
                <label>
                    <span>Ingredients</span>
                    <div className="ingredients">
                        <input 
                            type="text"
                            onChange={(e) => {setNewIngredient(e.target.value)}}
                            value={newIngredient}
                            ref={ingredientInput}
                        />
                        <button
                            className="btn"
                            onClick={handleAdd}
                        >add
                        </button>
                    </div>
                </label>

                <p>Current ingredients: {ingredients.map((i) => (
                    <em key={i}>{i}, </em>  
                ))}</p>
                {/* INGREDIENTS */}

                <label>
                    <span>Recipe method</span>
                    <textarea
                        onChange={(e) => {setMethod(e.target.value)}}
                        value={method}
                        required
                    />
                </label>

                <label>
                    <span>Cooking time (min):</span>
                    <input
                        type="number"
                        onChange={(e) => {setCookingTime(e.target.value)}}
                        value={cookingTime}
                        required
                    />
                </label>

                <button className="btn">Submit</button>
            </form>
        </div>
    )
}