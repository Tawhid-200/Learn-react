import React, { useEffect } from "react";

const Header = ({ infos }) => {
  useEffect(() => {
    console.log("Header component mounted");
  }, []);

  if (!infos) return null;

  const { title, links } = infos;
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        {links.map((link, index) => (
          <a href="#" key={index} style={{ margin: "0 10px" }}>
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
