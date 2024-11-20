import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        .catch((err) => console.log(err))
        console.table(data);
    }, [currency])
    console.table(data);
    return data;
}

export default useCurrencyInfo;