import { useEffect, useState } from "react";

//hook ready
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    //API call
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data)
    }, [currency])
    console.log(data)
    return data
}

export default useCurrencyInfo;