import React from "react";

export default function ProfileDetailsView() {
  return (
    <main className="p-4 bg-grayLight min-h-screen">
      <section className="bg-white p-4 rounded shadow mb-4">
        <h1 className="text-2xl font-bold">João Silva</h1>
        <p>Eletricista em Sorocaba</p>
        <a href="https://wa.me/5511999999999" className="text-blue-500 mt-2 inline-block">
          Chamar no WhatsApp
        </a>
      </section>

      <section className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-xl font-bold mb-2">Sobre</h2>
        <p>Profissional com 10 anos de experiência em instalações elétricas residenciais e comerciais.</p>
      </section>

      <section className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-xl font-bold mb-2">Portfólio</h2>
        <div className="grid grid-cols-3 gap-2">
          <img src="https://via.placeholder.com/150" alt="Projeto 1" />
          <img src="https://via.placeholder.com/150" alt="Projeto 2" />
          <img src="https://via.placeholder.com/150" alt="Projeto 3" />
        </div>
      </section>

      <section className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-xl font-bold mb-2">Serviços</h2>
        <ul className="list-disc list-inside">
          <li>Instalação elétrica</li>
          <li>Manutenção elétrica</li>
          <li>Reparo de curto-circuito</li>
        </ul>
      </section>

      <section className="text-center mt-4">
        <a href="/anunciar" className="bg-black text-yellow px-6 py-3 rounded">Cadastre-se Grátis</a>
      </section>
    </main>
  );
}
