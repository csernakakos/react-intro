import {useState, useEffect, useRef } from "react";


export const useFetch = (url, myObject) => {
    const [data, setData] = useState(null);
    // Loader:
    const [isPending, setIsPending] = useState(false);
    // Error:
    const [error, setError] = useState(null);

    // useRef to pass objects:
    const myPassedObject = useRef(myObject).current;

    useEffect(() => {

         // useRef to pass objects:
        console.log(myPassedObject);

        // Cleanup:
        const controller = new AbortController();

        const fetchData = async () => {
            // Loader:
            setIsPending(true);

            try {
                const response = await fetch(url, 
                    // Cleanup:
                    {
                    signal: controller.signal,
                    }
                );

                if (!response.ok) {
                    throw new Error(response.statusText);
                    // If error is thrown, try{} stops right here and skips to catch(){}
                    // abort error will also be caught in catch(){}
                }

                const json = await response.json();
                setIsPending(false);
                setData(json);
                setError(null);

            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Fetch was aborted.");
                } else {
                    setIsPending(false);
                    setError("Could not load data. The server might be offline.");
                    console.log(error.message);
                }
            }
        }

        fetchData();

        // Cleanup:
        return () => {
            controller.abort();
        }
    }, [url, myPassedObject])

    return { data, isPending, error };
}