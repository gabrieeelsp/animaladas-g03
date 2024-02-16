import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { useSelector } from "react-redux";

Chart.register(CategoryScale);
function AdoptionsBarHistogramaChart() {


  const {adoptions } = useSelector((state) => state.rootReducer.estadisticas);

  useEffect(() => {

    

    let respData = adoptions.map((item) => {
      const diferenciaEnMs = Math.abs(new Date(item.resolveDate).getTime() - new Date(item.createdAt).getTime());
      const diasDeDiferencia = Math.ceil(diferenciaEnMs / (1000 * 60 * 60 * 24));
      return {
        resolveDelay: diasDeDiferencia
      }
    });
    

    const valoresTiempo = respData.map(d => d.resolveDelay);
    const minTiempo = Math.min(...valoresTiempo);
    const maxTiempo = Math.max(...valoresTiempo);

    const numRangos = 6; // Cambia esto al número deseado de rangos
    const paso = (maxTiempo - minTiempo) / numRangos;

    const rangos = [];
    for ( let i = 0; i < numRangos; i += 1 ) {
      rangos.push([i*paso + minTiempo, (i+1) * paso + minTiempo])
    
    } 
    rangos[numRangos-1][1] =rangos[numRangos-1][1] + 1;

    const frecuencia = rangos.map(([rangoMin, rangoMax]) => respData.filter(d => d.resolveDelay >= rangoMin && d.resolveDelay < rangoMax).length)
    const frecuenciaRelativa = frecuencia.map(v => v / adoptions.length)
    setChartData({
      labels: rangos.map(([rangoMin, rangoMax]) => `${rangoMin.toFixed(0)}-${rangoMax.toFixed(0)}`),
      datasets: [
        {
          label: "Adopciones ",
          data: frecuenciaRelativa,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1
        }
      ]
    })
  }, [adoptions]);

  const [chartData, setChartData] = useState({
    labels: [].map((data) => data.year), 
    datasets: [
      {
        label: "Adopciones ",
        data: [].map((data) => data.amount),
      }
    ]
  });

  return (
    <div className="m-2">
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: `Histograma de Frecuencias - Tiempo de resolución`
            },
            legend: {
              display: false
            }
          },
          indexAxis: 'x',
          scales: {
            x: {
              beginAtZero: true
            }
          }
        }
      }
      />
    </div>
  );
}
export default AdoptionsBarHistogramaChart;