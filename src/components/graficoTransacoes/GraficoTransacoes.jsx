import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const GraficoTransacoes = ({ transacoes }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const chartCanvas = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const transacoes = [
      { date: '2023-10-01', valor: 100 },
      { date: '2023-10-02', valor: 200 },
      // Outros objetos de transação
    ];

    const dadosPorData = transacoes.reduce((dados, transacao) => {
      const data = transacao.date;
      const valor = transacao.valor;

      if (!dados[data]) {
        dados[data] = { receitas: 0, despesas: 0 };
      }

      if (transacao.tipo === 'Receita') {
        dados[data].receitas += valor;
      } else {
        dados[data].despesas -= valor;
      }

      return dados;
    }, {});

    const labels = Object.keys(dadosPorData);
    const receitas = labels.map(data => dadosPorData[data].receitas);
    const despesas = labels.map(data => dadosPorData[data].despesas);

    chartInstance.current = new Chart(chartCanvas, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Receitas',
            data: receitas,
            borderColor: '#00ff00',
            borderWidth: 2,
            pointBackgroundColor: '#00ff00',
            pointBorderColor: '#00ff00',
            pointRadius: 3,
            pointHoverRadius: 5,
            tension: 0.4,
            backgroundColor:  '#00ff00' 
          },
          {
            label: 'Despesas',
            data: despesas,
            borderColor: '#ff0000',
            borderWidth: 2,
            pointBackgroundColor: '#ff0000',
            pointBorderColor: '#ff0000',
            pointRadius: 3,
            pointHoverRadius: 5,
            tension: 0.4,
            backgroundColor: '#ff0000'
          }
        ]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Data',
              color: '#000000'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Valor',
              color: '#000000'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#000000'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#000000'
            }
          }
        }
      }
    });
  }, [transacoes]);

  return (
    <canvas ref={chartRef} width="400px" height="200px"></canvas>
  );
};

export default GraficoTransacoes;
