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
        <div className='flex items-center flex-col w-full h-screen bg-custom-radial relative lg:px-20 lg:py-20 lg:gap-5 md:px-40 md:py-30 md:gap-5 px-10 py-20'>
            <h2 className='text-white font-russo text-4xl sm:text-5xl md:text-6xl'>Cadastro</h2>
            <p className='text-primary-color mt-4'>{message}</p>

            <form onSubmit={handleCadastro} className='flex flex-col gap-3 w-full max-w-xs sm:max-w-md md:max-w-lg'>

                <label htmlFor="nome" className='text-white'>Nome</label>
                <input
                    type="text"
                    id="nome"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className='bg-transparent border-2 rounded-3xl border-white text-white px-4 py-2 sm:py-3 sm:px-5 md:py-4 md:px-6'
                />

                <label htmlFor="email" className='text-white'>E-mail</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='bg-transparent border-2 rounded-3xl border-white text-white px-4 py-2 sm:py-3 sm:px-5 md:py-4 md:px-6'
                />

                <label htmlFor="password" className='text-white'>Senha</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className='bg-transparent border-2 rounded-3xl border-white text-white px-4 py-2 sm:py-3 sm:px-5 md:py-4 md:px-6'
                />

                <button type="submit" className='bg-white text-primary-color font-bold rounded-3xl px-4 py-2 sm:py-3 sm:px-5 md:py-4 md:px-6'>Cadastrar</button>
            </form>

            <button onClick={() => navigate('/login')} className='text-white border-b-2 border-white mt-4'>Já tem uma conta? Faça login</button>
        </div>
    );
}