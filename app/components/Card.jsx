"use client";

import { useState, memo } from "react";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/navigation";

const CardContainer = styled.section`
  width: 220px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  background: white;

  /* 부드러운 그림자 적용 */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);

  /* 호버 시 그림자 더 진하게 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 28px rgba(0, 0, 0, 0.25);
  }

  img {
    width: 150px;
  }
`;

export const Card = memo(({ pokemon }) => {
  console.log("card", pokemon.id);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const router = useRouter();
  return (
    <CardContainer onClick={() => router.push(`/detail/${pokemon.id}`)}>
      {isImageLoading ? (
        <div className="w-[120px] h-[120px] leading-[120px] text-center">
          로딩중...
        </div>
      ) : null}
      <img
        onLoad={() => setIsImageLoading(false)}
        src={pokemon.front}
        style={{ display: isImageLoading ? "none" : "block" }}
      />
      <div className="text-[21px] font-bold text-center">
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </CardContainer>
  );
});
