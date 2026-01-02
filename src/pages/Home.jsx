import React from 'react'
import { fetchCryptos } from '../api/coinGecko'




export const Home = () => {

React.useEffect(()=>{
const data = await fetchCryptos()
console.log(data)
  

},[])


    return <div>
        This is the home page
    </div>
}