import React from "react";

const planos = [
  { nome: "Gratuito", preco: "R$0", fotos: 3, badge: "-", destaque: "-" },
  { nome: "Destaque", preco: "R$19,90/mês", fotos: 10, badge: "Destaque", destaque: "Melhor posição" },
  { nome: "Premium", preco: "R$39,90/mês", fotos: 30, badge: "Premium", destaque: "Topo da busca + Analytics" }
];

export default function PlanosView() {
  return (
    <main className="p-4 bg-grayLight min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Planos</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {planos.map((plano) => (
          <div key={plano.nome} className="bg-white p-4 rounded shadow text-center">
            <h2 className="text-xl font-bold mb-2">{plano.nome}</h2>
            <p className="mb-2">{plano.preco}</p>
            <p>Fotos: {plano.fotos}</p>
            <p>Badge: {plano.badge}</p>
            <p>Destaque: {plano.destaque}</p>
            <a href="/anunciar" className="bg-black text-yellow px-4 py-2 rounded mt-2 inline-block">
              Assinar
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
