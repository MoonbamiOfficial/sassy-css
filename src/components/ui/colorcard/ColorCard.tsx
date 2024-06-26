import { useState } from "react";
import colorCardStyles from "./color-card.module.scss";
import useDynamicTextColor from "../../../hooks/useDynamicTextColor";

type ColorCardProps = {
  backgroundColor: string;
};

const ClickToCopy = (text: string) => {
  navigator.clipboard.writeText(text);
};

const ColorCard = ({ backgroundColor }: ColorCardProps) => {
  const { getTextColor } = useDynamicTextColor();
  const [isCopied, setIsCopied] = useState(false);
  const copied = () => setIsCopied(false);

  const displayIsCopied = setTimeout(copied, 1000);
  const releaseDisplayedIsCopied = () => clearTimeout(displayIsCopied);

  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className={`${colorCardStyles.color}`}
      onClick={() => {
        ClickToCopy(backgroundColor);
        setIsCopied(true);
        releaseDisplayedIsCopied();
      }}
    >
      <p
        style={{ color: getTextColor(backgroundColor) }}
        className={`${colorCardStyles.color_hex}`}
      >
        {isCopied ? "copied to clipboard" : backgroundColor}
      </p>
    </div>
  );
};

export default ColorCard;
