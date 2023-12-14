import React, { useEffect, useState } from "react";
import { Pie } from 'react-chartjs-2';
import { calcularOdds } from "../../services/api";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement 
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement 
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

interface GraphPizzaProps {
    selectedTimeId1: string;
    selectedTimeId2: string;
}



function GraphPizza({selectedTimeId1, selectedTimeId2}: GraphPizzaProps) {
    
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
        labels: ['Vitórias', 'Empates', 'Derrotas'],
        datasets: times.map(time => ({
            label: time.name,
            data: [time.won, time.draw, time.lost],
            backgroundColor: [
                'rgba(75, 192, 192, 0.5)',
                'rgba(255, 205, 86, 0.5)',
                'rgba(255, 99, 132, 0.5)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }))
    };
      
    
    

    console.log(dadosDoGrafico, "LINHA 87");

    return (
        <>
            
            <Pie data={dadosDoGrafico} />
        </>
    );
}



export default GraphPizza;