import { LayoutComponents } from "../../components/LayoutComponents";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Cadastro = () => {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCPF] = useState("")
    const [email, setEmail] = useState("")
    const [celular, setCelular] = useState("")
    const [endereco, setEndereco] = useState("")
    const [password, setPassword] = useState("")
    const [passworddnv, setPasswordNovamente] = useState("")
    return (
        <LayoutComponents>
            <form className="conteudo-principal-escrito">

                <span className="conteudo-principal-escrito-subtitulo flex"> Insira suas inforçaões para se cadastrar no site:</span>

                <div className="flex">
                    <input
                        placeholder="Nome"
                        className={nome !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={nome}
                        onChange={e => setNome(e.target.value)}/>
                </div>

                <div className="flex">
                    <input
                         placeholder="Sobrenome"
                        className={sobrenome !== "" ? 'has-val input' : 'input'}
                        type="text"
                        value={sobrenome}
                        onChange={e => setSobrenome(e.target.value)}/>
                </div>

                <div className="flex">
                    <input
                        placeholder="CPF"
                        className={cpf !== "" ? 'has-val input' : 'input'}
                        type="text"
                        maxLength={11}
                        minLength={11}
                        value={cpf}
                        onChange={e => setCPF(e.target.value)}/>
                </div>

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
                        placeholder="Celular"
                        className={celular !== "" ? 'has-val input' : 'input'}
                        type="tel"
                        value={celular}
                        onChange={e => setCelular(e.target.value)}/>
                </div>   

                <div className="flex">
                    <input
                        placeholder="Endereço"
                        className={endereco !== "" ? 'has-val input' : 'input'}
                        type="tel"
                        value={endereco}
                        onChange={e => setEndereco(e.target.value)}/>
                </div>    

                <div className="flex">
                    <input 
                        placeholder="Senha"
                        className={password !== "" ? 'has-val input' : 'input'}
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div className="flex">
                    <input
                        placeholder="Senha novamente"
                        className={passworddnv !== "" ? 'has-val input' : 'input'}
                        type="password"
                        value={passworddnv}
                        onChange={e => setPasswordNovamente(e.target.value)}
                    />
                    <span className="focus-input" data-></span>
                </div>                 

                <div className="flex">
                    <form>
                        <input className='login-form-btn' type="submit" value="Cadastrar"
                        onClick = {
                            async e => {
                                e.preventDefault();
                                const resp = await fetch("https://localhost:7184/api/tickets/AdicionarUsuario", {
                                    method: "POST",
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({                                   
                                        name: nome,
                                        surname: sobrenome,
                                        cpf: cpf,
                                        email: email,
                                        password: password,
                                        passworddnv: passworddnv,
                                        celular: celular,
                                        endereco: endereco
                                    })
                                });
                                console.log(resp.status);
                                if (resp.status === 201){
                                    window.location.href = '/';
                                }
                        }}/>
                    </form>
                </div>        

                <div className='flex'>
                    <span className='criar-conta'>Já possui conta? </span>
                    <Link className='criar-conta-cadastro' to='/login'> Entre por aqui.</Link>
                </div>

                <footer className="rodape">
                    <p className="rodape-escrito">Developed by</p>
                    <p className="rodape-escrito-nome">Augusto Lima, Emanoel Santos, Gustavo Alves, Marcos Vinicius</p>     
                </footer>

            </form>
        </LayoutComponents>
    );
}