"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFavoritePokemons } from "@/store/selecter";
import { fetchMultiplePokemonById } from "@/store/thunk";
import { Card } from "@/app/components/Card";

export default function FavoritePage() {
  const dispatch = useDispatch();
  const favoriteList = useSelector(selectFavoritePokemons);
  const isLoading = useSelector((state) => state.pokemon.loading);

  useEffect(() => {
    dispatch(fetchMultiplePokemonById());
  }, [dispatch]);

  if (isLoading) {
    return (
      <p className="text-center mt-10">포켓몬 정보를 불러오는 중입니다...</p>
    );
  }

  if (favoriteList.length === 0) {
    return <p className="text-center mt-10">찜한 포켓몬이 없습니다.</p>;
  }

  return (
    <main className="min-h-screen bg-gray-200 flex flex-wrap justify-center gap-x-6 gap-y-4 py-6">
      {favoriteList.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </main>
  );
}
