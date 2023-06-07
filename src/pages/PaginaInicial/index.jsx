import { LayoutComponents } from "../../components/LayoutComponents";
import {Link} from 'react-router-dom';
import tickets from '../../assets/tickets.png';

export const PaginaInicial = () => {

    return (
        <LayoutComponents>
            <div className="container">
                <section className="conteudo-principal">
                    <div className="conteudo-principal-escrito">
                        <h1 className="conteudo-principal-escrito-titulo">CLANDESTICKET</h1>
                        <h2 className="conteudo-principal-escrito-subtitulo">Venha vender ou comprar os ingressos do momento</h2>
                        
                            <Link to="/cadastro"className="conteudo-principal-escrito-botao">Login</Link>
                                         
                    </div>

                    <span><img src={tickets} alt="tickets" width='400px'/></span>
                </section>

                <section className="conteudo-secundario">
                    <h3 className="conteudo-secundario-titulo">Como trabalhamos</h3>
                    <p className="conteudo-secundario-paragrafo">Site em que você "PODE" vender seus ingressos de shows o qual não poderá ir!</p>
                    <p className="conteudo-secundario-paragrafo">Perdeu a compra? aqui você pode comprar ingressos dos eventos do momento.</p>
                </section>

                <footer className="rodape">
                    <p className="rodape-escrito">Developed by</p>
                    <p className="rodape-escrito-nome">Augusto Lima, Emanoel Santos, Gustavo Alves, Marcos Vinicius</p>
                    
                </footer>
            </div> 
        </LayoutComponents>
    );
} 

