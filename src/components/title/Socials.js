/*---- Imported array ----*/
import { SocialItemList as socials } from "./SocialItemList";

const Socials = ({ className }) => {
  return (
    <ul className={`share ${className}`}>
      {socials.map((social, index) => {
        return (
          <li className={social.class} key={index}>
            <a index={social.id} href={social.href} target="true">
              {social.svg}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
