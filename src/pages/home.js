import React from "react";
import Card from '@mui/joy/Card';
import "../styles/home.css"; 

function Home() {
  return (
    <div className="home">
      <div className="telaInit">
        
      </div>
      <div className="manifesto">
        <h4>Manifesto Lorem Ipsum</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lacus vel felis molestie commodo. Maecenas vehicula vestibulum tellus, ut finibus mi tempor varius. Phasellus sed semper erat, a condimentum eros. Proin porta massa nulla, a consectetur lorem posuere vel. Nullam finibus id mi ac facilisis.</p>
      </div>
      <div className="carrossel"> 
          <Card/>
      </div>
      <div className="patrocinadores">

      </div>
    </div>
  );
}

export default Home;
