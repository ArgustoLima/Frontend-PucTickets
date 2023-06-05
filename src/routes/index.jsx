
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { PaginaInicial } from '../pages/PaginaInicial';
import { Login } from '../pages/Login';
import { Cadastro } from '../pages/Cadastro';


export const AppRouter = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<PaginaInicial />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/cadastro" exact element={<Cadastro />} />
                     
            </Routes>
        </Router>
    );
}

    