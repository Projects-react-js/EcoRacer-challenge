import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastrar() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); 

    const handleCadastro = (e) => {
        e.preventDefault();

 
        if (!nome || !email || !senha) {
            setMessage('Preencha todos os campos.');
            return;
        }

        const historicoUsuarios = localStorage.getItem(email);
        if (historicoUsuarios) {
            setMessage("Usuário já cadastrado.");
            return;
        }

        localStorage.setItem(email, JSON.stringify({ nome, email, senha }));
        setMessage('Cadastro realizado com sucesso!');

        setNome('');
        setEmail('');
        setSenha('');
    };

    return (
        <div>
            <h2>Cadastro</h2>
            <form onSubmit={handleCadastro}>

                <label htmlFor="text">Nome</label>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </form>

            {message && <p>{message}</p>}

            <button onClick={() => navigate('/login')}>Já tem uma conta? Faça login</button>
        </div>
    );
}