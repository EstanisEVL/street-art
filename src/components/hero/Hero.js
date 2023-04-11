import HeroBtn from "../buttons/HeroBtn";
import heroImg from "../../assets/imgs/uncompressed/hero-img-frida.jpg";
import { ReactComponent as HeroLogo } from "../../assets/svg/hero-logo.svg";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero_img-container">
          <img src={heroImg} />
        </div>
        <div className="hero_wrapper-txt">
          <div className="title">Street art project</div>
          <HeroLogo />
        </div>
      </div>
      <HeroBtn />
    </>
  );
};

export default Hero;
