import { useEffect, useState } from "react";
import axios from 'axios';


function useFetch(url) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const [data, setData] = useState([]);

    async function fetchData() {
        try {
            setLoading(true)
            const {data: responseData} = await axios.get(url)
            setData(responseData);
            setLoading(false)
        } catch (err) {
            setError(err.message)
            setLoading(false)
        }

    }
    useEffect (() => {
        fetchData();
    }, [])

    return {data, loading, error}
}

export default useFetch;