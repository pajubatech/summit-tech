import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import "../styles/navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
          <p alt="logo">Summit Tech</p>
        </Link>
        <div className="hiddenLinks">
          <Link to="/"> Início </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Início </Link>
        <Button variant="contained">
          Inscrições
        </Button>
        
      </div>
    </div>
  );
}

export default Navbar;
