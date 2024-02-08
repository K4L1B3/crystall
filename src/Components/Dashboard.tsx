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
        <div className="container-graph-input">
            <div className="input-container">
                <SelecaoDeTime onIdsSelected={handleIdsSelected} />
            </div>
            <div className="graph-container">
                <div className="graph-container-bars">
                    <div className="Graph2">
                        <h3>Gráfico 2</h3>
                        <GraphLine selectedTimeId1={selectedTimeId1} selectedTimeId2={selectedTimeId2} />
                    </div>
                    <div className="Graph3">
                        <h3>Gráfico 2</h3>
                        <GraphBar selectedTimeId1={selectedTimeId1} selectedTimeId2={selectedTimeId2} />
                    </div>
                </div>
                <div className="graph-container-bars-2">
                    <div className="Graph1">
                        <h3>Gráfico 2</h3>
                        <GraphPizza selectedTimeId1={selectedTimeId1} selectedTimeId2={selectedTimeId2} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
