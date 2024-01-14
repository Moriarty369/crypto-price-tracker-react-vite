import React from 'react'
import '../styles/TrendingInfo.css'
import { Link } from 'react-router-dom';

const TrendingInfo = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
        <div className='trending-info-container'>
            <div className='coin-container'>
                <span className='coin-index'>{coin.score+1}.</span>
                <img className='coin-img' src={coin.small} alt={coin.name} />
                <span className='coin-name'> {coin.name}</span>
                <small className='coin-symbol'>({coin.symbol})</small>
            </div>
            <div className=''>
               
            </div>
        </div>
    </Link>
  );
}

export default TrendingInfo;
