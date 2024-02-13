import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import axios from "axios";

Chart.register(CategoryScale);
function DonationsBarsChart(props) {

  const { dateFom, dateTo} = props;


  useEffect(() => {
    const urlBaseAxios = import.meta.env.VITE_ENV === 'DEV' ? import.meta.env.VITE_URL_DEV : import.meta.env.VITE_URL_PROD;
    axios.get(`${urlBaseAxios}/donations?dateFrom=${dateFom}&dateTo=${dateTo}`)
      .then((resp) => {

        let respData = resp.data.data.map((item) => {
          return {
            id: item.id,
            year: new Date(item.createdAt).getFullYear(),
            userGain: item.amount,
          }
        });

        respData = respData.sort((a, b) => a.userGain - b.userGain)

        const sumaPorYear = {};
        respData.forEach(objeto => {
          const year = objeto.year;
          if (!sumaPorYear[year]) {
            sumaPorYear[year] = 0;
          }
          sumaPorYear[year] += objeto.userGain;
        });


        const totales = Object.entries(sumaPorYear).map(([year, userGain]) => {
          return {
            year: parseInt(year),
            userGain: userGain
          }
        } )

        setChartData({
          labels: totales.map((data) => data.year), 
          datasets: [
            {
              label: "Donaciones ",
              data: totales.map((data) => data.userGain),
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0"
              ],
              borderColor: "black",
              borderWidth: 2
            }
          ]
        })
      })
  }, []);

  const [chartData, setChartData] = useState({
    labels: [].map((data) => data.year), 
    datasets: [
      {
        label: "Donaciones ",
        data: [].map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  return (
    <div className="chart-container">
      
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: `Donaciones entre ${dateFom} a ${dateTo}`
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
export default DonationsBarsChart;