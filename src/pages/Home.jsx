import React from 'react'
import { fetchCryptos } from '../api/coinGecko'




export const Home = () => {

    const [cryptoList, setCryptoList] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

React.useEffect(()=>{

    const getFetchedData = async() => {
try{
const data = await fetchCryptos()
setCryptoList(data)
} catch (err) {
    console.error("Error fetching crypto", err) 
} finally {
    setIsLoading(false)
}

  }

  getFetchedData()

},[])


    return <div className="app"> 
   {isLoading ? (
        <div className="loading">
          <div className="spinner" />
          <p>Loading crypto data...</p>
        </div>
 ) : (
        <div className={`crypto-container ${viewMode}`}>
          {filteredList.map((crypto, key) => (
            <CryptoCard crypto={crypto} key={key} />
          ))}
        </div>
      )}


       
    </div>
}