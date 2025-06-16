import { useState } from "react";
import styled from "styled-components";

const FlipImageContainer = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
  transform-style: preserve-3d;
  transition: 0.5s;
  transform: ${(props) =>
    props.$flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const FrontImage = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
`;

const BackImage = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  transform: rotateY(180deg);
`;

export default function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="text-center">
      <FlipImageContainer $flipped={flipped}>
        <FrontImage src={front} />
        <BackImage src={back} />
      </FlipImageContainer>
      <button
        onClick={() => setFlipped((prev) => !prev)}
        className="mt-2 px-4 py-1 hover:bg-gray-200 transition"
      >
        뒤집기
      </button>
    </div>
  );
}
