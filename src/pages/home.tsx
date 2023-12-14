
import TabelaDeTimes from '@/Components/TabelaDeTimes';
import Dashboard from "@/Components/Dashboard";
/*
const dadosDeExemplo = [
    { id: 1, name: "Marcos",  shortname: "Time A", won: 10 },
    { id: 2, name: "Edu",  shortname: "Time B", won: 15 },
    { id: 3, name: "Ricardo",  shortname: "Time B", won: 45 },
    { id: 4, name: "João", shortname: "Time B", won: 20 },
];
*/

function Home() {
 

  return (
    <div>

      <TabelaDeTimes />
      <Dashboard />
    

    </div>
  );
}

export default Home;
