// obtenemos la respuesta de la api , la validamos e iteramos para renderizarla en el componente con la info de cada moneda
import React from 'react'
import '../styles/CoinInfo.css'
import { TrendingDown, TrendingUp } from '../icons/icons'
import { Link } from 'react-router-dom'

const CoinInfo = ({ coin }) => {
	console.log(coin)
	return (
		<Link to={`/coin/${coin.id}`}>
			<tr className='coin-info'>
				<td className='coin-info-inner'>
					<img className='coin-img' src={coin.image} alt={coin.name} />
					<div className='coin-title'>
						<h4>{coin.name}</h4>
						<span className='coin-symbol'>({coin.symbol})</span>
					</div>
				</td>
				<td className='coin-price'>
					<span>{coin.current_price} €</span>
				</td>
				<td className='high-price'>
					{coin.high_24h}
				</td> 
				<td className='low-price'>
					{coin.low_24h}
				</td> 
				<td className={`trending-arrow ${coin.market_cap_change_percentage_24h < 0 ? 'price-down' : 'price-up'}`}>
					<div className='trending-arrow'>
						{coin.market_cap_change_percentage_24h > 0 ? <TrendingDown className='trending-arrow' /> : <TrendingUp />}
					</div>
					<div className='trending-price'>{coin.market_cap_change_percentage_24h}</div>
				</td>
			</tr>
		</Link>
	)
}

export default CoinInfo

