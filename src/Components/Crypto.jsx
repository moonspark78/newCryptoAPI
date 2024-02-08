import React, { useEffect, useState } from 'react'


export const Crypto = () => {
    const [cryptoData, setCryptoData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
            const data = await response.json();
            console.log(data);
            setCryptoData(data); 
        };
        fetchData();
    },[])






  return (
    <div>
        <h2>Crypto</h2>
        <div className='card'>
            {
                cryptoData.map(crypto =>(
                    <div>
                        <p>{crypto.name}</p>
                    </div>

                ))
            }
        </div>
    </div>
  )
}
