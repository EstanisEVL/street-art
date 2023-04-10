import { NavBarCategories as categories } from "./NavBarCategories";
import brandLogo from "../../assets/imgs/brand-logo.png";

const NavBar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <img src={brandLogo} className="brand" />
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
    </header>
  );
};

export default NavBar;
