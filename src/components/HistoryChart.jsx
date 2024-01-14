import { useParams } from "react-router-dom"
import TrendingHook from "../hooks/TrendingHook"
import moment from 'moment';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2'

//Registraremos nuestros valores en una instancia de Chart.js (en su objeto register con la propiedadess indicadas)
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

const HistoryChart = () => {
  const { id } = useParams()
  const { response } = TrendingHook(`coins/${id}/market_chart?vs_currency=eur&days=7`)
  // console.log(response)
  if (!response) {
    // console.error("La respuesta o response.prices es null o undefined")
    return <div>Cargando... ando</div>
  }  

  const coinChartData = response.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));
  //console.log(coinChartData);
  const options = {
    responsive: true
  }
  const data = {
    labels: coinChartData.map(value => moment(value.x).format('MMMDD')),
    datasets: [
      {
        fill: true,
        label: id,
        data: coinChartData.map(value => value.y),
        borderColor: '#f7931a', 
        backgroundColor: 'rgba(247, 147, 26, 0.5)', 
      }
    ]
  }  

  return (
    <div>
      <Line options={options} data={data} />
      
    </div>
  )
}

export default HistoryChart
