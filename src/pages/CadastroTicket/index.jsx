
import { LayoutComponents } from '../../components/LayoutComponents';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const CadastroTicket = () => {
  const [evento, setEvento] = useState("")
  const [descricao, setDescricao] = useState("")
  const [empresa, setEmpresa] = useState("")
  const [logradouro, setLogradouro] = useState("")
  const [complemento, setComplemento] = useState("")
  const [numero, setNumero] = useState("")
  const [cidade, setCidade] = useState("")
  const [bairro, setBairro] = useState("")
  const [uf, setUf] = useState("")
  const [cep, setCep] = useState("")
  return (
    <LayoutComponents>
      <form className="conteudo-principal-escrito">

        <span className="conteudo-principal-escrito-subtitulo flex"> Insira as informações para cadastrar o ticket:</span>

        <div className="flex">
          <input 
            placeholder="Nome evento"
            className={evento !== "" ? 'has-val input' : 'input'}
            type="text"
            value={evento}
            onChange={e => setEvento(e.target.value)}/>
        </div>

        <div className="flex">
          <input 
            placeholder="Descrição"
            className={descricao !== "" ? 'has-val input' : 'input'}
            type="text"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}/>
        </div>

        <div className="flex">
          <input 
            placeholder="Empresa"
            className={empresa !== "" ? 'has-val input' : 'input'}
            type="text"
            value={empresa}
            onChange={e => setEmpresa(e.target.value)}/>
        </div>

        <div className="flex">
          <input 
            placeholder="Logradouro"
            className={logradouro !== "" ? 'has-val input' : 'input'}
            type="text"
            value={logradouro}
            onChange={e => setLogradouro(e.target.value)}/>
        </div>

        <div className="flex">
          <input 
            placeholder="Complemento"
            className={complemento !== "" ? 'has-val input' : 'input'}
            type="text"
            value={complemento}
            onChange={e => setComplemento(e.target.value)}/>
        </div>

        <div className="flex">
          <input 
            placeholder="Número"
            className={numero !== "" ? 'has-val input' : 'input'}
            type="text"
            value={numero}
            onChange={e => setNumero(e.target.value)}/>
        </div>

        <div className="flex">
          <input 
            placeholder="Cidade"
            className={cidade !== "" ? 'has-val input' : 'input'}
            type="text"
            value={cidade}
            onChange={e => setCidade(e.target.value)}/>
        </div>

        <div className="flex">
          <input 
            placeholder="Bairro"
            className={bairro !== "" ? 'has-val input' : 'input'}
            type="text"
            value={bairro}
            onChange={e => setBairro(e.target.value)}/>
        </div>

        <div className="flex">
          <input 
            placeholder="UF"
            className={uf !== "" ? 'has-val input' : 'input'}
            type="text"
            value={uf}
            onChange={e => setUf(e.target.value)}/>
        </div>

        <div className="flex">
          <input 
            placeholder="CEP"
            className={cep !== "" ? 'has-val input' : 'input'}
            type="text"
            value={cep}
            onChange={e => setCep(e.target.value)}/>
        </div>

        <div className="flex">
                    <form>
                        <input className='login-form-btn' type="submit" value="Cadastrar"
                        onClick = {
                            async e => {
                                e.preventDefault();
                                const resp = await fetch("https://localhost:7184/api/tickets/AdicionarIngresso", {
                                    method: "POST",
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({                                   
                                        evento: evento,
                                        descricao: descricao,
                                        empresa: empresa,
                                        logradouro: logradouro,
                                        complemento: complemento,
                                        numero: numero,
                                        cidade: cidade,
                                        bairro: bairro,
                                        uf: uf,
                                        cep: cep
                                    })
                                });
                                console.log(resp.status);
                                if (resp.status === 201){
                                    window.location.href = '/';
                                }
                        }}/>
                    </form>
                </div>  

        <div className="flex">
          <span className="criar-conta">Já possui conta?</span>
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