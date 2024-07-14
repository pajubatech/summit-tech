import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
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
          <Link to="/agenda"> Agenda </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Início </Link>
        <Link to="/agenda"> Agenda </Link>
        <Button variant="contained">
          Inscrições
        </Button>
        </div>  
        <button className="togglebutton" onClick={toggleNavbar}>
          <DragHandleRoundedIcon />
        </button>
    </div>
  );
}

export default Navbar;
