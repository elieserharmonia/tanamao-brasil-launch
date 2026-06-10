import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-yellow text-black p-4 flex justify-between items-center">
      <div className="font-bold text-xl">TáNaMão Brasil</div>
      <nav className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/plans">Planos</Link>
        <Link to="/anunciar" className="bg-black text-yellow px-4 py-2 rounded">
          Cadastre-se Grátis
        </Link>
      </nav>
    </header>
  );
}
