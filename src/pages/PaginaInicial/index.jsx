import { LayoutComponents } from "../../components/LayoutComponents";
import {Link} from 'react-router-dom';
import tickets from '../../assets/tickets.png';

export const PaginaInicial = () => {

    return (
        <LayoutComponents>
            <div className="container">
                <section className="conteudo-principal">
                    <div className="conteudo-principal-escrito">
                        <h1 className="conteudo-principal-escrito-titulo">Vem de Carona</h1>
                        <h2 className="conteudo-principal-escrito-subtitulo">Venha pegar carona com colegas universitários</h2>
                        
                            <Link to="/login"className="conteudo-principal-escrito-botao">Login</Link>
                                         
                    </div>

                    <span><img src={tickets} alt="tickets" width='400px'/></span>
                </section>

                <section className="conteudo-secundario">
                    <h3 className="conteudo-secundario-titulo">Como trabalhamos</h3>
                    <p className="conteudo-secundario-paragrafo">Site em que estudantes universitários poderão oferecer e/ou receber caronas de outros estudantes para ir até a universidade.</p>
                    <p className="conteudo-secundario-paragrafo">Cadastre-se para conseguir receber caronas</p>
                    <p className="conteudo-secundario-paragrafo">Após se cadastrar, registre seu carro para oferecer caronas</p>
                </section>

                <footer className="rodape">
                    <p className="rodape-escrito">Developed by</p>
                    <p className="rodape-escrito-nome">Augusto Lima, Emanoel Santos, Gustavo Alves, Marcos Vinicius</p>
                    
                </footer>
            </div> 
        </LayoutComponents>
    );
} 

