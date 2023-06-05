
import { LayoutComponents } from '../../components/LayoutComponents';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const CadastroTicket = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <LayoutComponents>
      <form className="conteudo-principal-escrito">

        <span className="conteudo-principal-escrito-titulo flex"> Bem Vindo!</span>
        <span className="conteudo-principal-escrito-subtitulo flex"> Faça seu Login:</span>

        <div className="flex">
          <input 
            placeholder="E-mail"
            className={email !== "" ? 'has-val input' : 'input'}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}/>
        </div>

        <div className="flex">
          <input
            placeholder="Senha"
            className={password !== "" ? 'has-val input' : 'input'}
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}/>
        </div>

        <div className="flex">
          <form action="/tela_usuario">
            <input className='login-form-btn' type="submit" value="Entrar"/>
          </form>
        </div>

        <div className="flex">
          <span className="criar-conta">Não possui conta? </span>
          <Link className="criar-conta-cadastro" to='/cadastro'> Criar conta.</Link>
        </div>

        <footer className="rodape">
          <p className="rodape-escrito">Developed by</p>
          <p className="rodape-escrito-nome">Augusto Lima, Emanoel Santos, Gustavo Alves, Marcos Vinicius</p>     
        </footer>

      </form>
    </LayoutComponents>
  );
}