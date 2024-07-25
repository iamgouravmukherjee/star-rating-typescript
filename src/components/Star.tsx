interface StarProps {
  isFilled: boolean;
  starIndex: number;
  handleOnClick: (index: number) => void;
  handleMouseOver: (index: number) => void;
  handleMouseOut: () => void;
}

export function Star({
  isFilled,
  starIndex,
  handleOnClick,
  handleMouseOver,
  handleMouseOut,
}: StarProps) {
  const handleClick = () => {
    handleOnClick(starIndex + 1);
  };
  const handleHoverIn = () => {
    handleMouseOver(starIndex + 1);
  };
  const handleHoverOut = () => {
    handleMouseOut();
  };
  return (
    <span
      className={`star ${isFilled ? "filled" : ""}`}
      onClick={handleClick}
      onMouseOver={handleHoverIn}
      onMouseOut={handleHoverOut}
      data-testid="star"
    >
      ★
    </span>
  );
}
