import { useState } from "react";
import Contador from "./Contador";

export default function Carbons() {
  const emissionCarbonoSecund = 0.04;
  const [carbonsCoins, setCarbonsCoins] = useState(0);

  const calcularCarbons = (totalSeconds) => {
    const emailLogado = localStorage.getItem('email');

    if (emailLogado) {
      const dadosUsuario = localStorage.getItem(emailLogado);

      if (dadosUsuario) {
        const usuario = JSON.parse(dadosUsuario);

        const saldoExistente = usuario.carbonsCoins || 0;

        const novosCarbonsCoins = totalSeconds * (Math.LOG10E * emissionCarbonoSecund);

        const saldoAtualizado = saldoExistente + novosCarbonsCoins;

        const dadosAtualizados = {
          ...usuario,
          carbonsCoins: saldoAtualizado
        };

        localStorage.setItem(emailLogado, JSON.stringify(dadosAtualizados));

        setCarbonsCoins(saldoAtualizado);

        console.log(`Novo saldo de Carbons Coins: ${saldoAtualizado}`);

      }
    }
  };

  return (
    <>
      <p>Saldo Carbons Coins: {carbonsCoins.toFixed(2)} pts</p>
      <Contador onFinish={calcularCarbons} />
    </>
  );
}