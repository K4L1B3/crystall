import React, { useEffect, useState } from "react";
import { Bar, Line } from 'react-chartjs-2';
import { calcularOdds } from "../../services/api";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement, // Importação para o gráfico de linha
    LineElement   // Importação para o gráfico de linha
  } from 'chart.js';
  
  // Registro dos componentes necessários
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement, // Registro para o gráfico de linha
    LineElement   // Registro para o gráfico de linha
  );
  


interface ITeam {
    id: number;
    name: string;
    shortname: string;
    won?: number;
    lost?: number;
    draw?: number;
    goalFor?: number;
    goalDifference?: number;
}

interface GraphLineProps {
    selectedTimeId1: string;
    selectedTimeId2: string;
}



function GraphLine({selectedTimeId1, selectedTimeId2}: GraphLineProps) {
    
    const [times, setDadosDosTimes] = useState<ITeam[]>([]);
    

    // Função que calcula as informações necessárias para o gráfico de barras
    useEffect(() => {
         const handlePostData = async () => {
        if (selectedTimeId1 && selectedTimeId2) {
            const dadosParaAPI = [
                { id: selectedTimeId1 },
                { id: selectedTimeId2 }
            ];

            try {
                const oddsDosTimes = await calcularOdds(dadosParaAPI);
                if (oddsDosTimes && oddsDosTimes.teamStats) {
                    setDadosDosTimes([oddsDosTimes.teamStats.teamA, oddsDosTimes.teamStats.teamB]);
                }
                console.log(times, "ARRAY DOS TIMES");
            } catch (error) {
                console.error("Failed to calculate odds:", error);
            }
        }
         };
        handlePostData();
    },[selectedTimeId1, selectedTimeId2])
   
   
    
    const dadosDoGrafico = {
        labels: times.map(time => time.name),
        datasets: [
            {
                label: 'Vitórias',
                data: times.map(time => time.won ?? 0),
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderWidth: 1,
                fill: false, // Define como false para que a área abaixo da linha não seja preenchida
            },
            {
                label: 'Derrotas',
                data: times.map(time => time.lost ?? 0),
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderWidth: 1,
                fill: false,
            },
            // Adicione mais datasets se necessário
        ]
    };
      
    

    console.log(dadosDoGrafico, "LINHA 87");

    return (
        <>
            
            <Line data={dadosDoGrafico} />
        </>
    );
}



export default GraphLine;