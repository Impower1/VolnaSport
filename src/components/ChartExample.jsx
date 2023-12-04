import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const VisitorChart = () => {
  // Данные для линейного графика
  const lineChartData = {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    datasets: [
      {
        label: 'Количество посетителей',
        data: [240, 215, 245, 220, 260, 230, 210],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  // Данные для столбчатой диаграммы
  const barChartData = {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    datasets: [
      {
        label: 'Количество посетителей',
        data: [240, 215, 245, 220, 260, 230, 210],
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
        <div>
        <Line data={lineChartData} />
      </div>
      <div>
        <Bar data={barChartData} />
      </div>
      </>
  );
};

export default VisitorChart;