// Subscribing to real-time data in our collection
import {useEffect, useState, useRef} from "react";
import {projectFirestore} from "../firebase/config";

export const useCollection = (collection, _query, _orderBy) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    // useRef is to avoid an infinite loop caused by an object (in this case, an array) getting constantly re-evaluated.
    const query = useRef(_query).current;
    const orderBy = useRef(_orderBy).current;

    useEffect(() => {

        let ref = projectFirestore.collection(collection);

        if (query) {
            ref = ref.where(...query);
        }

        if (orderBy) {
            ref = ref.orderBy(...orderBy);
        }

        const unsubscribe = ref.onSnapshot((snapshot) => {
            let results = [];
            snapshot.docs.forEach(doc => results.push({...doc.data(), id: doc.id}));

           setDocuments(results);
           setError(null);
        }, (error) => {
            console.log(error);
            setError("Could not fetch the date.")
        });

        return () => unsubscribe();
    }, [collection, _query]);

    return { documents, error };
}