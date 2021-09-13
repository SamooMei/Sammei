import React, { useState } from "react";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import "./index.scss";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className={"navbar"}>
      <div className={"navbar__switch"}>
        {nav ? (
          <RiArrowUpSLine className={"icons"} onClick={() => setNav(!nav)} />
        ) : (
          <RiArrowDownSLine className={"icons"} onClick={() => setNav(!nav)} />
        )}
      </div>
      <div className={`navbar__content ${nav ? "active" : ""}`}>
        <a href={"https://github.com/SamooMei"}>
          <RiGithubLine className={"icons"} />
        </a>
        <a href={"https://linkedin.com/in/samuelmei/"}>
          <RiLinkedinLine className={"icons"} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
