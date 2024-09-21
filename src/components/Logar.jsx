import React, { useState } from 'react';

export default function Logar() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !senha) {
      setMessage('Preencha todos os campos.');
      return;
    }

    const historicoUsuarios = localStorage.getItem(email);

    if (!historicoUsuarios) {
      setMessage('Usuário não encontrado.');
      return;
    }

    const { senha: historicoUsuariosSenha } = JSON.parse(historicoUsuarios);

    if (historicoUsuariosSenha === senha) {
      setMessage('Login realizado com sucesso!');
    } else {
      setMessage('Senha incorreta.');
    }
  };

  return (
    <div className='flex items-center flex-col gap-20 px-20 py-20 absolute w-full h-screen bg-custom-radial'>
      <h2 className='text-white text-6xl'>Login</h2>
      <form onSubmit={handleLogin} className='flex flex-col gap-5'>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)} className='px-20' />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}