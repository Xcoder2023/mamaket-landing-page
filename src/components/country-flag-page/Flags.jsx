import React from "react";
import "./Flags.css";
import Ghana from "../../assets/country-flags/Frame 2.png";
import IvoryCoast from "../../assets/country-flags/Mask group.png";
import Jamica from "../../assets/country-flags/🦆 icon _Jamaica_.png";
import Nigeria from "../../assets/country-flags/🦆 icon _Nigeria_.png";
import Kenya from "../../assets/country-flags/🦆 icon _Kenya_.png";
import Egypt from "../../assets/country-flags/🦆 icon _Egypt_.png";
import Morocco from "../../assets/country-flags/🦆 icon _Morocco_.png";
import Cameroon from "../../assets/country-flags/🦆 icon _Cameroon_.png";
import Rwanda from "../../assets/country-flags/🦆 icon _Rwanda_.png";

const links = [
  {
    id: 1,
    link: "Ghana",
    image: Ghana,
  },
  {
    id: 2,
    link: "Ivory Coast",
    image: IvoryCoast,
  },
  {
    id: 3,
    link: "Jamaica",
    image: Jamica,
  },
  {
    id: 4,
    link: "Nigeria",
    image: Nigeria,
  },
];

const flag = [
  {
    ids: 5,
    link: "Kenya",
    image: Kenya,
  },
  {
    ids: 6,
    link: "Egypt",
    image: Egypt,
  },
  {
    ids: 7,
    link: "Morocco",
    image: Morocco,
  },
  {
    ids: 8,
    link: "Cameroon",
    image: Cameroon,
  },
  {
    ids: 9,
    link: "Rwanda",
    image: Rwanda,
  },
];
const Flags = () => {

  return (
    <div>
      <div className="flags-vessel">
        <div className="culture">
          <p>Culture</p>
        </div>
        <div className="flags">
          {links.map(({ ids, link, image }) => (
            <div key={ids} className="flags-btn">
              <img src={image} alt={link} />
              {link}
            </div>
          ))}
        </div>
        <div className="flag">
          {flag.map(({ id, link, image }) => (
            <div className="test" key={id}>
              <div className="flag-btn">
                <img src={image} alt={link} />
                {link}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flags;
