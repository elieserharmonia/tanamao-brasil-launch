import React from "react";

const produtos = [
  { nome: "Banner Patrocinado", preco: "R$29,90/semana" },
  { nome: "Categoria Patrocinada", preco: "R$99,90/mês" },
  { nome: "Cidade Patrocinada", preco: "R$149,90/mês" }
];

export default function MonetizationView() {
  return (
    <main className="p-4 bg-grayLight min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Produtos Patrocinados</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {produtos.map((produto) => (
          <div key={produto.nome} className="bg-white p-4 rounded shadow text-center">
            <h2 className="text-xl font-bold mb-2">{produto.nome}</h2>
            <p className="mb-2">{produto.preco}</p>
            <a href="/anunciar" className="bg-black text-yellow px-4 py-2 rounded mt-2 inline-block">
              Comprar
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
