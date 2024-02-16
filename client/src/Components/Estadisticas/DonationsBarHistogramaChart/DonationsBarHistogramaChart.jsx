import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { useSelector } from "react-redux";

Chart.register(CategoryScale);
function DonationsBarHistogramaChart() {


  const {donations } = useSelector((state) => state.rootReducer.estadisticas);

  useEffect(() => {

    

    let respData = donations.map((item) => {
      return {
        amount: item.amount,
      }
    });


    const valoresMontos = respData.map(d => d.amount);
    const minMonto = Math.min(...valoresMontos);
    const maxMonto = Math.max(...valoresMontos);

    const numRangos = 6; // Cambia esto al número deseado de rangos
    const paso = (maxMonto - minMonto) / numRangos;
    
    const rangos = [];
    for ( let i = 0; i < numRangos; i += 1 ) {
      rangos.push([i*paso + minMonto, (i+1) * paso + minMonto])
    } 

    
    rangos[numRangos-1][1] =rangos[numRangos-1][1] + 1;
    const frecuencia = rangos.map(([rangoMin, rangoMax]) => respData.filter(d => d.amount >= rangoMin && d.amount < rangoMax).length)
    const frecuenciaRelativa = frecuencia.map(v => v / donations.length)

    setChartData({
      labels: rangos.map(([rangoMin, rangoMax]) => `${rangoMin.toFixed(0)}-${rangoMax.toFixed(0)}`),
      datasets: [
        {
          label: "Donaciones ",
          data: frecuenciaRelativa,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1
        }
      ]
    })
  }, [donations]);

  const [chartData, setChartData] = useState({
    labels: [].map((data) => data.year), 
    datasets: [
      {
        label: "Donaciones ",
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
              // text: `Donaciones entre ${getDateString(dateFrom)} a ${getDateString(dateTo)}`
              text: `Histograma de Frecuencias - Monto donado`
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
export default DonationsBarHistogramaChart;