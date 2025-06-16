"use client";

import { useEffect, useState } from "react";
import FlipCard from "@/app/components/FlipCard";
import FavoriteButton from "@/app/components/FavoriteButton";

export default function DetailPage({ params }) {
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const res = await fetch(`/api/pokemon/${pokemonId}`);
        if (!res.ok) throw new Error("포켓몬 상세 정보를 불러올 수 없습니다.");
        const data = await res.json();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPokemonDetail();
  }, [pokemonId]);

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  if (!pokemon) {
    return <p className="text-center mt-10">로딩 중...</p>;
  }

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center px-4 py-10">
      <div className="bg-white drop-shadow-[0_18px_30px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_24px_36px_rgba(0,0,0,0.6)] transition-shadow duration-300 rounded-xl px-6 py-8 w-full max-w-sm text-center">
        <div className="text-[30px] font-bold mb-[10px]">
          {pokemon.name}
          <FavoriteButton pokemonId={pokemon.id} />
        </div>
        <div className="text-lg text-center px-4">{pokemon.description}</div>
        <div className="flex justify-center p">
          <FlipCard front={pokemon.front} back={pokemon.back} />
        </div>
      </div>
    </div>
  );
}
