import { useParams } from 'react-router-dom'
import TrendingHook from '../hooks/TrendingHook'
import '../styles/CoinDetail.css'

const CoinDetail = () => {
  // id proviene del path indicado en Route de App.jsx 
  const { id } = useParams()
  const { response } = TrendingHook(`coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`)
  // console.log(response)
	if(!response) {
		return <div>Cargando... Ando</div>
	}
   
  return (
    <div className=''>
			<div className=''>
				<img src={response.image.small} alt={response.name} />
				<h1 className=''>{response.name}</h1>
			</div>
			<div className='description-container'>
				{/* habilitar los enlaces dentro de la descripción */}
				<p className='coin-description'dangerouslySetInnerHTML={{__html: response.description.en}}></p>

			</div>
    </div>
  )
}

export default CoinDetail
