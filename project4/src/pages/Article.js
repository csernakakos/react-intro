import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function Article() {

    // const params = useParams();
    // const { id } = params; 
    const { id } = useParams();
    const url = `http://localhost:3002/articles/${id}`;

    const {data: article, isPending, error} = useFetch(url);

    const navigate = useNavigate();

    // Redirect user if error changes
    useEffect(() => {
        // if error exists
        if (error) {
            setTimeout(() => {
                navigate({ pathname: "/" }) 
            }, 3000)
            console.log("Route doesn't exist. User redirected to home page.")

        }
    }, [error, navigate])


    return (
        <>
        <div>Article {id}</div>

        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}

        {article && (
            <div>
                <h2>{article.title}</h2>
                <p>By {article.author}</p>
                <p>{article.body}</p>
            </div>
        )}

        </>
    )
}