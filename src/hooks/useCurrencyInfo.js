import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        .catch((error) => {
            console.error("Error fetching currency data:", error);
            // Fallback data
            setData({
                inr: 83.12,
                eur: 0.92,
                gbp: 0.79,
                jpy: 149.34,
                aud: 1.52,
                cad: 1.36,
                chf: 0.88,
                cny: 7.24
            });
        });
    }, [currency])
    
    return data
}

export default useCurrencyInfo;
