import { useState, useEffect } from "react";
import Contador from "./Contador";
import Carbons from "./Carbons";

export default function AreaUsuario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');  

  useEffect(() => {
    const emailSalvo = localStorage.getItem('email');

    if (emailSalvo) {
      setEmail(emailSalvo); 
      const dadosUsuario = localStorage.getItem(emailSalvo);

      if (dadosUsuario) {
        const usuario = JSON.parse(dadosUsuario);
        setNome(usuario.nome);
      }
    }
  });

  return (
    <>
      <section className="bg-black flex items-center flex-col w-full h-screen md:h-auto relative lg:px-20 lg:py-20 lg:gap-5 md:px-40 md:py-30 md:gap-5 px-10 py-20" >
        <div>
          <h2 className="text-white">{`Bem-vindo, ${nome}!`}</h2>
          <div>
            <Carbons/>
          </div>

        </div>
      </section>
    </>
  );
}