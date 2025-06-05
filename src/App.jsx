import Header from "./components/Header";
import Indicadores from './components/Indicadores';
import Nosotros from './components/Nosotros';
import Status from './components/Status';
import Programacion from './components/Programacion';
import SeccionRE from './components/SeccionRE';
import SeccionBacklog from './components/SeccionBacklog';

import Footer from './components/Footer';

function App() {
  return (
    <>
    {/* Aquí irán las demás secciones */}
      <main className="pt-20">
      <Header />
      <Indicadores />
      <Nosotros/>
      <Status />
      <Programacion /> 
      <SeccionRE />
      <SeccionBacklog />
      
      <Footer />
      </main>
    </>
  );
}
export default App;
