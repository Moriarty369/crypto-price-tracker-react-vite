// obtenemos la respuesta de la api , la validamos e iteramos para renderizarla en el componente
import React from 'react'
import trendingHook from '../hooks/TrendingHook'
import TrendingInfo from './TrendingInfo'



function Trending() {
  const { response } = trendingHook('search/trending')    


  return (
    <div className='container'>
      <div className='subtitle-container'>
        <h2>Tendencias del mercado crypto</h2>
      </div>
      {/* si la respuesta de la API no es falsy, se accede a su propiedad coins, al ser un array con map iteraramos sobre cada elemento con una función q toma cada objeto (coin) de la lista y devuelve un componente TrendingInfo con la propiedad key configurada como el coin_id del objeto para ir iterando y creando componentes, además se envía el prop que recibe dicho componente*/}
      {response && response.coins.map(coin => <TrendingInfo key={coin.item.coin_id} coin={coin.item}/>)}
    </div>
  )
}

export default Trending
