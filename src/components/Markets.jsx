import TrendingHook from '../hooks/TrendingHook'
import '../styles/Markets.css'
import CoinInfo from './CoinInfo'

const Markets = () => {
const { response } = TrendingHook('coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
console.log(response)
  return (
    <table>
        <thead>
          <tr className='table-header'>
            <th>Moneda</th>
            <th>Precio Actual</th>
            <th>Precio Más Alto</th>
            <th>Precio Más Bajo</th>
            <th>Tendencia</th>
          </tr>
  		</thead>
      <tbody>
        {response && response.map(coin => <CoinInfo key={coin.id} coin={coin}/>)}
      </tbody>
    </table>
  )
}

export default Markets
