import { useState, useEffect } from "react";

import Item from "./Item";
import Flex from "../Flex/Flex";
import obtenerProductos, { getProdByCategory } from "../../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [prods, setProds] = useState([]);
let {categoryid} = useParams();

  useEffect(() => {
    if (!categoryid){
    obtenerProductos()
      .then((respuesta) => {
        setProds(respuesta);
      })
      .catch((error) => alert(error));
    }
    else {
      getProdByCategory(categoryid)
      .then((respuesta) => {
        setProds(respuesta);
      })
    }
  }, [categoryid]);

  return (
    <Flex>
      {prods.map((itemIterado) => {
        return (
          <Item id={itemIterado.id} key={itemIterado.id} item={itemIterado} />
        );
      })}
    </Flex>
  );
}

export default ItemListContainer;