import { useState, useEffect } from "react";
import { projectFirestore } from "../../firebase/config";
import RecipeList from "../../components/RecipeList";
import "./Home.css";

export default function Home() {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

   useEffect(() => { 
        setIsPending(true);

        const unsubscribe = projectFirestore
            .collection("recipes")
            .onSnapshot((snapshot) => {
                if (snapshot.empty) {
                    setError("No recipes...");
                    setIsPending(false);
                } else {
                    let results = [];
                    snapshot.docs.forEach((doc) => {
                        results.push(
                            { 
                                id: doc.id,
                                ...doc.data()
                            }
                            )
                        })
                        setData(results);
                        setIsPending(false);
                }
            }, (error) => {
                setError(error.message);
                setIsPending(false);
            });

    return () => unsubscribe();
   }, []);



    return (
        <div className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}

            {data && <RecipeList recipes={data} />}
        </div>
    )
}