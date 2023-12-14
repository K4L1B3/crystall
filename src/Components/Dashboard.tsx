import React, { useState } from "react";
import SelecaoDeTime from "./SelecaoDeTime";
import GraphBar from "./GraphBar";
import GraphPizza from "./GraphPizza";
import GraphLine from "./GraphLine";


const Dashboard: React.FC = () => {
   
    
    const [selectedTimeId1, setSelectedTimeId1] = useState<string>('');
    const [selectedTimeId2, setSelectedTimeId2] = useState<string>('');

    const handleIdsSelected = (id1:string, id2:string) => {
        setSelectedTimeId1(id1);
        setSelectedTimeId2(id2);
        
    }

    return (
        <div>
            <SelecaoDeTime onIdsSelected={handleIdsSelected} />
            <GraphBar selectedTimeId1={selectedTimeId1} selectedTimeId2={selectedTimeId2} />
            <GraphPizza selectedTimeId1={selectedTimeId1} selectedTimeId2={selectedTimeId2} />
            <GraphLine selectedTimeId1={selectedTimeId1} selectedTimeId2={selectedTimeId2} />
        </div>
    );
};

export default Dashboard;
