import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { useSelector } from "react-redux";

Chart.register(CategoryScale);
function DonationsBarsChart() {


  const {donations, dateFrom, dateTo } = useSelector((state) => state.rootReducer.estadisticas);
  
  const donationsLocal = [...donations];

  const unDia = 1000 * 60 * 60 * 24; // Milisegundos en un día
  useEffect(() => {

    let rango = 'anual';
    const diferenciaEnMs = Math.abs( dateTo - dateFrom);

    // Calcular la diferencia en meses y años
    const diferenciaEnMeses = Math.round(diferenciaEnMs / (unDia * 30.4375)); // Aproximadamente 30.4375 días en un mes
    const diferenciaEnAnios = Math.round(diferenciaEnMeses / 12);

    // Determinar en qué rango cae la diferencia
    if (diferenciaEnMeses < 2) {
      rango = 'diario';
    } else if (diferenciaEnMeses >= 2 && diferenciaEnAnios < 2) {
        rango = 'mensual';
    } else {
        rango = 'anual';
    }

    if ( rango === 'diario') {
      let currentDate = new Date(dateFrom);
      let current = String(currentDate.getMonth()).padStart(2, '0') + '-' + String(currentDate.getDate()).padStart(2, '0');

      const lastDay = String(new Date(dateTo).getMonth()).padStart(2, '0') + '-' + String(new Date(dateTo).getDate()).padStart(2, '0');
      while ( current <= lastDay ) {
        if ( donations.filter((d) => {
          return String(new Date(d.createdAt).getMonth()).padStart(2, '0') + '-' + String(new Date(d.createdAt).getDate()).padStart(2, '0') === current
        }).length === 0 ) {
          donationsLocal.push({
            id: 0,
            createdAt: new Date(currentDate),
            amount: 0,
          })
        }

        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
        current = String(currentDate.getMonth()).padStart(2, '0') + '-' + String(currentDate.getDate()).padStart(2, '0');
      }
    }

    
    let respData = donationsLocal.map((item) => {
      let time = null;
      const date = new Date(item.createdAt);
      switch (rango) {
        case 'diario': 
          time = date.getDate() + '/' + ( 1 + date.getMonth() );
          break;
        case 'mensual': {
          time = date.toLocaleString('es-ES', { month: 'long' });
          break;
        }
        default: {
          time = date.getFullYear();
        }
      }
      return {
        id: item.id,
        time,
        numMonth: rango === 'mensual' ? new Date(item.createdAt).getMonth() : null,
        amount: item.amount,
      }
    });

    
    if ( rango === 'mensual' ) {
      respData = respData.sort((a, b) => a.numMonth - b.numMonth)
    }
    

    const sumaPorTime = {};
    respData.forEach(objeto => {
      const time = objeto.time;
      if (!sumaPorTime[time]) {
        sumaPorTime[time] = 0;
      }
      sumaPorTime[time] += objeto.amount;
    });

    
    let totales = Object.entries(sumaPorTime).map(([time, amount]) => {
      return {
        time: rango === 'mensual' ? time.charAt(0).toUpperCase() + time.slice(1) : time,
        amount: amount
      }
    } )

       
    
    if ( rango === 'diario' ) {
      totales = totales.sort((a, b) => {
        let aTimeDia = a.time.split('/')[0]
        let aTimeMes = a.time.split('/')[1]
        aTimeDia = aTimeDia.length === 1 ? '0' + aTimeDia : aTimeDia;
        aTimeMes = aTimeMes.length === 1 ? '0' + aTimeMes : aTimeMes;
        const aTime = aTimeMes+aTimeDia;

        let bTimeDia = b.time.split('/')[0]
        let bTimeMes = b.time.split('/')[1]
        bTimeDia = bTimeDia.length === 1 ? '0' + bTimeDia : bTimeDia;
        bTimeMes = bTimeMes.length === 1 ? '0' + bTimeMes : bTimeMes;
        const bTime = bTimeMes+bTimeDia;
        if (aTime < bTime) {
          return -1;
        }
        if (aTime > bTime) {
            return 1;
        }
        return 0;
      })
    }




    setChartData({
      labels: totales.map((data) => data.time), 
      datasets: [
        {
          label: "Donaciones ",
          data: totales.map((data) => data.amount),
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgb(153, 102, 255)',
          borderWidth: 1
        }
      ]
    })
  }, [donations]);

  const [chartData, setChartData] = useState({
    labels: [].map((data) => data.time), 
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
              text: `Monto donado anualizado`
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
export default DonationsBarsChart;