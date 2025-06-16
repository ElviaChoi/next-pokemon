"use client";

import { useEffect, useState } from "react";
import { Card } from "./components/Card";

export default function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch("/api/pokemon");
        if (!res.ok) throw new Error("포켓몬 데이터를 불러올 수 없습니다.");
        const data = await res.json();
        setPokemonList(data.pokemonData);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPokemon();
  }, []);

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  return (
    <main className="flex flex-wrap justify-center gap-4 py-10 bg-gray-200 min-h-screen">
      {pokemonList.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </main>
  );
}
