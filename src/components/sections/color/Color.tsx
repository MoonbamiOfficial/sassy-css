import { colors } from "../../../lib/colors";
import Grid from "../../common/grid/Grid";
import ColorCard from "../../ui/colorcard/ColorCard";
import colorStyles from "./color.module.scss";

export type TextColorProps = {
  hex: string;
};

const Color = () => {
  const renderColors = () => {
    if (colors)
      return colors
        .sort((a, b) => {
          if (a.hex.toLowerCase() < b.hex.toLowerCase()) return -1;
          if (a.hex.toLowerCase() > b.hex.toLowerCase()) return 1;
          return 0;
        })
        .map((color: TextColorProps, id) => (
          <ColorCard key={id} backgroundColor={color.hex} />
        ));
  };

  return <Grid className={`${colorStyles.color_grid}`}>{renderColors()}</Grid>;
};

export default Color;
