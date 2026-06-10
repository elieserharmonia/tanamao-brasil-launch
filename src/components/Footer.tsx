import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-yellow p-4 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>© 2026 TáNaMão Brasil</div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="/plans">Planos</a>
          <a href="/anunciar">Anunciar</a>
          <a href="/sp/eletricista/sao-paulo">Eletricista SP</a>
        </div>
      </div>
    </footer>
  );
}
