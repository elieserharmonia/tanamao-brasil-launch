import React from "react";
import { Link } from "react-router-dom";

export default function HomeView() {
  return (
    <main className="flex-1 p-4 bg-grayLight">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">O Brasil encontra aqui</h1>
        <div className="flex gap-4">
          <input type="text" placeholder="Procure um profissional" className="flex-1 p-2 border rounded"/>
          <button className="bg-black text-yellow px-4 rounded">Buscar</button>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Categorias</h2>
        <div className="flex gap-4">
          <Link to="/search/sorocaba/eletricista" className="p-4 bg-white rounded shadow">Eletricista</Link>
          <Link to="/search/sorocaba/encanador" className="p-4 bg-white rounded shadow">Encanador</Link>
          <Link to="/search/sorocaba/pintor" className="p-4 bg-white rounded shadow">Pintor</Link>
        </div>
      </section>

      <section className="mb-8 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">Profissionais em Destaque</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-2 border rounded text-center">
            João Silva<br/>
            Eletricista<br/>
            <a href="https://wa.me/5511999999999" className="text-blue-500">WhatsApp</a>
          </div>
          <div className="p-2 border rounded text-center">
            Maria Souza<br/>
            Encanadora<br/>
            <a href="https://wa.me/5511988888888" className="text-blue-500">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="text-center mt-8">
        <h2 className="text-xl font-bold mb-2">Receba novos clientes todos os dias</h2>
        <Link to="/anunciar" className="bg-black text-yellow px-6 py-3 rounded">Cadastre-se Grátis</Link>
      </section>
    </main>
  );
}
