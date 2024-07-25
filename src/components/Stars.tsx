import { useState } from "react";
import { Star } from "./Star";

interface StarsProps {
  numberOfStars: number;
}

export function Stars({ numberOfStars }: StarsProps) {
  const [hoverCount, setHoverCount] = useState<number>(0);
  const [clickCount, setClickCount] = useState<number>(0);

  const handleStarClick = (index: number) => {
    setClickCount(index === clickCount ? 0 : index);
  };

  const handleStarHover = (index: number) => {
    setHoverCount(index);
  };

  const handleStarUnfocus = () => {
    setHoverCount(0);
  };

  return new Array(numberOfStars).fill("").map((_, i) => {
    return (
      <Star
        key={i}
        isFilled={i < (hoverCount || clickCount)}
        handleOnClick={handleStarClick}
        handleMouseOver={handleStarHover}
        handleMouseOut={handleStarUnfocus}
        starIndex={i}
      />
    );
  });
}
