import React, { useEffect, useState } from "react";
import { obterTimes } from "../../services/api";

interface ITeamObject {
    id: number;
    name: string;
}

function TabelaDeTimes() {
    const [timesDados, setTimesDados] = useState<ITeamObject[]>([]);

    useEffect(() => {
        const carregandoDados = async () => {
            const ObterTimes = await obterTimes();
            if (ObterTimes) {
                setTimesDados(ObterTimes);
            }
        }
        carregandoDados();
    }, [])
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>

                    {timesDados.map((time) => (
                        <tr key={time.id}>
                            <td>{time.id}</td>
                            <td>{time.name}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default TabelaDeTimes;
