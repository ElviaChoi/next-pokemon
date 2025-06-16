import { createSelector } from "@reduxjs/toolkit";

// 특정 포켓몬 ID로 포켓몬 데이터 선택
export const selectPokemonById = (pokemonId) =>
  createSelector(
    (state) => state.pokemon.data,
    (pokemon) => pokemon.find((el) => el.id === pokemonId)
  );

// 정규식으로 이름 필터링
export const selectPokemonByRegExp = (reg) =>
  createSelector(
    (state) => state.pokemon.data,
    (pokemon) => pokemon.filter((el) => el.name.match(reg))
  );

// 찜한 포켓몬만 필터링
export const selectFavoritePokemons = createSelector(
  (state) => state.pokemon.data,
  (state) => state.favorite,
  (pokemon, favorite) => {
    return pokemon.filter((el) => favorite.includes(el.id));
  }
);
