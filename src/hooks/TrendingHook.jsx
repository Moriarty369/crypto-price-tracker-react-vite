import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TrendingHook = (param) => {
    const [response, setResponse] = useState(null)
    const [load, setLoad] = useState(false)
    const [error, setError] = useState('')

    axios.defaults.baseURL = 'https://api.coingecko.com/api/v3'

    const fetchData = async (param) => {
        try {
            setLoad(true)
            const result = await axios(param) 
            setResponse(result.data)
        }
        catch(err) {
            setError(err)
        } finally {
            setLoad(false)
        }
    }

    // corremos el fetch dentro del useEffect porque necesitamos que al usar axios en una instancia el useEffect se esté ejecutando 
    useEffect(() => {
        fetchData(param)
    }, [])
    return { 
       response,
       load,
       error
    }
}

export default TrendingHook
