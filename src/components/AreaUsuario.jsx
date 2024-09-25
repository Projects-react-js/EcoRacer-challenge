import { useState, useEffect } from "react";
import Carbons from "./Carbons";
import Sections from "./Sections"
import Description from "./Description";

export default function AreaUsuario( {description} ) {

  const styleOfSections = [
    {
    style: 'flex relative w-full h-screen min-w-56 bg-black lg:px-20 lg:py-40 lg:gap-5 md:px-30 md:py-30 md:gap-5 px-10 py-20'
    }
  ]

  const textAndStyleDescription = [
    {
    text: 'Corra e ganhe carbons coins!'
    },
  ]

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
      <Sections forSections={styleOfSections}>
        <div>
          <h2 className="text-white font-russo lg:text-4xl md:text-3xl sm:text-2xl text-2xl lg:py-5 md:py-4 sm:py-3 py-2">Bem-vindo {`${nome}`} !</h2>

          <Description forDescription={textAndStyleDescription}/>

          <div className="flex flex-col gap-10 ">
            <Carbons/>
          </div>
        </div>

        <div>
          
        </div>
      </Sections>
    </>
  );
}