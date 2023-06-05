
import {Link} from 'react-router-dom';
import "../styles.css";


export const LayoutComponents = (props) => {
    return (
        <div className="container">
            <div className='header'>
                <div className='left-side'>
                <h1 className="conteudo-principal-escrito-subtitulo">CLANDESTICKET</h1>
                </div>
          
                <div className='right-side'>
                    <nav>
                        <ul class="nav">
                            <li id="nav-botao"><Link to="/">Home</Link></li>
                            <li id="nav-botao"><Link to="/cadastroTicket">Cadasto Ticket</Link></li>
                            <li id="nav-botao"><Link to="/cadastro">Cadastro Usuario</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="container-login">

                <div className="wrap-login">
                    {props.children}
                </div>

            </div>

        </div>
    )
}