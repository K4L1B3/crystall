import React from "react";
import { useState } from "react";

interface SelecaoDeTimesProps { 
    onIdsSelected: (id1: string, id2: string) => void;
}

function SelecaoDeTime({onIdsSelected}:SelecaoDeTimesProps) {
    
    const [localTimeId1, setLocalTimeId1] = useState('');
    const [localTimeId2, setLocalTimeId2] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onIdsSelected(localTimeId1, localTimeId2);
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={localTimeId1}
                    onChange={(e) => setLocalTimeId1(e.target.value)}
                    placeholder="ID do time 1"
                />
                <input
                    type="text"
                    value={localTimeId2}
                    onChange={(e) => setLocalTimeId2(e.target.value)}
                    placeholder="ID do time 2"
                />

                <button type="submit">Comparar Times</button>
            </form>         
            
        </div>
    )

}

export default SelecaoDeTime;