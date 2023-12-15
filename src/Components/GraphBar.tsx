import React, { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import { calcularOdds } from "../../services/api";
import "../app/globals.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
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

interface GraphBarProps {
    selectedTimeId1: string;
    selectedTimeId2: string;
}



function GraphBar({selectedTimeId1, selectedTimeId2}: GraphBarProps) {
    
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
        datasets: [{
          label: 'Vitórias',
          data: times.map(time => time.won !== undefined ? time.won : 0),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        
        }]
      };
      
    

    console.log(dadosDoGrafico, "LINHA 87");

    return (
        <>
            
            <Bar className="GraphBar" data={dadosDoGrafico} />
        </>
    );
}



export default GraphBar;