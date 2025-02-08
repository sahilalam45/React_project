import {useEffect , useState} from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() =>{
        fetch(`https://v6.exchangerate-api.com/v6/925a9f52c8da2c29ee906bfb/latest/${currency}`)
        .then( (res) => res.json())
        .then( (res) => res['conversion_rates'])
        .then( (res) => setData(res))
        // console.log(data)

    }, [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;