import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Componentes/Main/Main";
import Login from "./Componentes/Login/Login.jsx";
import Registrar from "./Componentes/Registrar/Registrar.jsx";
import Formulario from "./Componentes/Formulario/Formulario.jsx";
import Tarjeta from "./Componentes/Tarjeta/Tarjeta.jsx";
import PageNotFound from "./Componentes/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/registrar" element={<Registrar />}></Route>
          <Route path="/formulario" element={<Formulario />}></Route>
          <Route path="Pokemons/:id" element={<Tarjeta />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
