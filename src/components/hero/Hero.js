import HeroBtn from "../buttons/HeroBtn";
import { ReactComponent as HeroLogo } from "../../assets/svg/hero-logo.svg";
import { useEffect, useState } from "react";

const Hero = () => {
  // LIMITAR EL USEEFFECT CON INTERSECTION OBSERVER ASIGNANDO UNA REFERENCIA AL CONTENEDOR PARA CUANDO ÉSTE NO ESTÉ EN PANTALLA DEJE DE ACTIVARSE EL USEEFFECT
  const [value, setValue] = useState(1);

  useEffect(() => {
    const reduceOpacity = () => {
      setValue(1 - `${window.scrollY / 1000}`);
      console.log(value);
    };

    window.addEventListener("scroll", reduceOpacity);
    return () => {
      window.removeEventListener("scroll", reduceOpacity);
    };
  }, []);

  return (
    <div className="hero_bg-container">
      <div className="hero-container" style={{ opacity: value }}>
        <div className="hero_wrapper-txt">
          <div className="title">Street art project</div>
          <HeroLogo />
        </div>
        <HeroBtn />
      </div>
    </div>
  );
};

export default Hero;
