import { matrixRain } from "./MatrixRain";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import Logo from "../assets/images/Logo.png";

export const HeaderLogo = () => {
  return (
    <div className="main_container">
      <img className="api_logo" src={Logo} alt="API Logo" />
      <ReactP5Wrapper sketch={matrixRain} />
    </div>
  );
};
