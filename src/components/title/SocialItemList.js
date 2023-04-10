import { v4 as uuidv4 } from "uuid";

/*---- Imported icons ----*/
import { ReactComponent as Googleplus } from "../../assets/svg/google+icon.svg";
import { ReactComponent as Twitter } from "../../assets/svg/twitter.svg";
import { ReactComponent as Facebook } from "../../assets/svg/facebook.svg";

export const SocialItemList = [
  {
    class: "button_share google",
    id: uuidv4(),
    href: "https://plus.google.com/share?url=https://streetart.withgoogle.com/en/online-exhibitions",
    svg: <Googleplus />,
  },
  {
    class: "button_share twitter",
    id: uuidv4(),
    href: "https://twitter.com/intent/tweet?text=Browse%20online%20exhibitions%20featuring%20leading%20street%20artists%20and%20their%20work%2C%20with%20%40googleart%20https%3A//streetart.withgoogle.com/en/online-exhibitions%20%23streetartproject",
    svg: <Twitter />,
  },
  {
    class: "button_share facebook",
    id: uuidv4(),
    href: "http://www.facebook.com/sharer.php?s=100&p[url]=https://streetart.withgoogle.com/en/online-exhibitions",
    svg: <Facebook />,
  },
];
