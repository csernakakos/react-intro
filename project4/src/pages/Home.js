import "./Home.css";
import { useFetch } from "../hooks/useFetch";
import { NavLink } from "react-router-dom";
export default function Home() {

    const {data: articles, isPending, error} = useFetch("http://localhost:3002/articles");

    return (
        <div className="home">
            <h2>Articles</h2>

            {isPending && <p>Loading data...</p>}
            {error && <div>{error}</div>}

            {articles && articles.map((article) => (
                <div key={article.id} className="card">
                    <h3>{article.title}</h3>
                    <p>{article.author}</p>
                    <NavLink to={`/articles/${article.id}`}>Read more</NavLink>
                        

                </div>
            ))}


        </div>
    )
}