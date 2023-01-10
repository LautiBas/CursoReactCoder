import React, { useState, useEffect } from "react";
import { getProd } from "../../ItemList/ItemList";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [prod, setProd] = useState([]);
  let params = useParams();
  console.log(params);

  useEffect(() => {
    getProd(params.itemid)
      .then((respuesta) => {
        setProd(respuesta);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <ItemDetail
    title={prod.name}
    imgurl={prod.imgurl}
    desc={prod.desc}
    price={prod.price}
    />
);
}

export default ItemDetailContainer;