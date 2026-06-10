import React from "react";
import { useParams } from "react-router-dom";

export default function SeoLocalView() {
  const { serviceSlug, citySlug } = useParams<{ serviceSlug: string; citySlug: string }>();

  return (
    <main className="p-4 bg-grayLight min-h-screen">
      <h1 className="text-3xl font-bold mb-4">
        {serviceSlug?.charAt(0).toUpperCase() + serviceSlug?.slice(1)} em {citySlug?.replace("-", " ")}
      </h1>
      <p>Encontre profissionais qualificados em {citySlug?.replace("-", " ")} para {serviceSlug}</p>
      <a href="/anunciar" className="bg-black text-yellow px-6 py-3 rounded mt-4 inline-block">
        Cadastre seu serviço
      </a>
    </main>
  );
}
