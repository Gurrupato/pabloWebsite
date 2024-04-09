import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import i18n from "./traducciones/i18n";
import { I18nextProvider } from "react-i18next";
import ".//assets/fuentes.css";
// Imports de los Components
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/home/home";
import { Sobremi } from "./components/sobreMi/sobreMi";
import { Experiencias } from "./components/experiencias/experiencias";
import { Contacto } from "./components/contacto/contacto";
import { Formacion } from "./components/formacion/formacion";
import { Voluntariado } from "./components/voluntariado/voluntariado";
// Fin de los imports de los Components

function AppWrapper() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  );
}

function App() {
  let location = useLocation();

  return (
    <div className="appContainer">
      <Navbar></Navbar>

      <div className="containerInterior">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/experiencias" element={<Experiencias />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/sobremi" element={<Sobremi />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/voluntariado" element={<Voluntariado />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppWrapper;
