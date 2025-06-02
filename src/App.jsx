import Header from "./components/Header";
import Indicadores from './components/Indicadores';
import Nosotros from './components/Nosotros';
import Status from './components/Status';
import Programacion from './components/Programacion';
import SeccionRE from './components/SeccionRE';
import SeccionBacklog from './components/SeccionBacklog';


function App() {
  return (
    <>
    {/* Aquí irán las demás secciones */}
      <Header />
      <Indicadores />
      <Nosotros/>
      <Status />
      <Programacion /> 
      <SeccionRE />
       <SeccionBacklog />
  
      
    </>
  );
}

export default App;
