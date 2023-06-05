
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { PaginaInicial } from '../pages/PaginaInicial';
import { CadastroTicket } from '../pages/CadastroTicket';
import { Cadastro } from '../pages/Cadastro';


export const AppRouter = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<PaginaInicial />} />
                <Route path="/cadastroTicket" exact element={<CadastroTicket />} />
                <Route path="/cadastro" exact element={<Cadastro />} />      
            </Routes>
        </Router>
    );
}

    