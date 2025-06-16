import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const id = params.pokemonId;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  const data = await res.json();

  const result = {
    id,
    name: data.names.find((el) => el.language.name === "ko").name,
    description: data.flavor_text_entries
      .find((el) => el.language.name === "ko")
      ?.flavor_text.replace(/\n/g, " "),
    front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`,
  };

  return NextResponse.json(result);
}
