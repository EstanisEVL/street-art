import { NavBarCategories as categories } from "./NavBarCategories";

import { ReactComponent as BrandLogo } from "../../assets/svg/brand-logo.svg";
import useWindowSize from "../../hooks/useWindowSize";
import Socials from "../title/Socials";

const NavBar = () => {
  const size = useWindowSize();
  return (
    <header className="header">
      {size.width < 650 && (
        <nav className="nav">
          <div className="categories-container">
            <ul className="categories-ul">
              {categories.map((category, index) => {
                return (
                  <li key={index}>
                    <a>{category}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <BrandLogo className="brand" />
          <Socials className={"socials"} />
        </nav>
      )}
      {size.width >= 650 && (
        <nav className="nav">
          <BrandLogo className="brand" />
          <div className="categories-container">
            <ul className="categories-ul">
              {categories.map((category, index) => {
                return (
                  <li key={index}>
                    <a>{category}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
