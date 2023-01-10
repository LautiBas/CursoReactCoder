import Card from "./Card";
import Button from "./Button/Button";
import Flex from "./Flex/Flex";

import ItemCount from "./ItemCount/ItemCount";

function Ejemplos() {
  const title = "¡¡¡Bienvenidos a React!!!!!!!";

  function hacerAlgo() {
    alert("Hola");
  }

  const miEstilo = {
    backgroundColor: "pink",
    margin: "30px",
    padding: "50px",
    textAlign: "center",
  };

  return (
    <>
      <Flex>
        <Card
          img="https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/remera-lisa-am-rj-111-3374707c83b41fb15515911954612335-1024-1024.jpg"
          title="Remera"
          price={500}
          detail="Remera Coderhouse"
        />
        <Card
          img="https://www.pngmart.com/files/7/Sneakers-PNG-Picture.png"
          title="Zapatillas"
          price={800}
          detail="Zapatillas Coderhouse"
        />
        <Card
          img="https://www.pngplay.com/wp-content/uploads/12/Jeans-PNG-HD-Images.png"
          title="Pantalon"
          price={700}
          detail="Pantalon Coderhouse"
        />
      </Flex>
    </>
  );
}

export default Ejemplos;