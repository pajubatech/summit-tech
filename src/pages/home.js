import React from "react"
import "../styles/home.css"
import { listaPatrocinadores } from "../components/listaPatrocinadores"
import Carrossel from "../components/carousel"
import Logo from "../assets/teste.png"
import ex1 from "../assets/ex1.jpeg"
import ex2 from "../assets/ex2.jpeg"

function Home() {
  return (
    <div className="home">
      <div className="telaInit">
        <h1></h1>
      </div>
      <div className="manifesto">
        <h4>Manifesto Lorem Ipsum</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lacus vel felis molestie commodo. Maecenas vehicula vestibulum tellus, ut finibus mi tempor varius. Phasellus sed semper erat, a condimentum eros. Proin porta massa nulla, a consectetur lorem posuere vel. Nullam finibus id mi ac facilisis.</p>
      </div>
      <div className="carrossel">
        <h4>Como foi em 2023?</h4>
        <div className="container-carrossel"> 
          <Carrossel>
            <img src={ex1} alt="Imagem 1" />
            <img src={ex2} alt="Imagem 2" />
            <img src={Logo} alt="Imagem 3" />
          </Carrossel>
        </div>
      </div> 
      <div className="patrocinadores">
      <h4>Quem está conosco?</h4>
      <div className="container-Patrocinadores">
      {listaPatrocinadores.map((organizer) => (
          <div className="section" key={organizer.id}>
            <img src={organizer.image} alt={`Imagem ${organizer.id}`} />
          </div>
        ))}
        </div>   
      </div>
    </div>
  );
}

export default Home;
