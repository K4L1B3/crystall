import axios from 'axios';

const apiBaseUrl = 'https://projetoestatistica-oznm94ou.b4a.run';

export async function obterTimes() {
    try {
        const response = await axios.get(`${apiBaseUrl}/teams`);
        return response.data.teams;
    } catch (error) {
        console.error("Erro ao obeter times:", error);
        return null;
    }
}


export async function calcularOdds(idsTimes: { id: string }[]) {
    try {
        const response = await axios.post(`${apiBaseUrl}/calculate`, idsTimes);
        return response.data;
    } catch (error) {
        console.error("Erro ao calcular odds:", error);
        return null;
    }
}