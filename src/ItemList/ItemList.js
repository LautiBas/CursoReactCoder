const database = [
    {
      id: 1,
      title: "Air Force 1",
      category: "Calzado",
      stock: 7,
      imgurl: "https://static.nike.com/a/images/t_default/expzgdg8hmhmow5q6eme/calzado-air-force-1-shadow-kTgn9J.png",
      detail: "AF",
      price: 60000,
      desc: "Descripcion del producto 1",
    },
    {
      id: 2,
      title: "Remera VIKATI",
      category: "Indumentaria",
      stock: 7,
      imgurl: "https://vikati.net/wp-content/uploads/2022/10/OVERSIZE-BRO-vikati-N.png",
      detail: "VIKATI",
      price: 5000,
      desc: "Descripcion del producto 2",
    },
    {
      id: 3,
      title: "Jean Basic",
      category: "Indumentaria",
      stock: 5,
      imgurl: "https://www.pngplay.com/wp-content/uploads/7/Cotton-Pant-Transparent-PNG.png",
      detail: "BASIC",
      price: 12000,
      desc: "Descripcion del producto 3",
    },
    {
      id: 4,
      title: "Cap NY White",
      category: "Accesorios",
      stock: 6,
      imgurl: "https://www.courir.es/dw/image/v2/BCCL_PRD/on/demandware.static/-/Sites-master-catalog-courir/default/dw0c561bdf/images/hi-res/001501544_101.png?sw=300&sh=300&sm=fit&frz-v=31",
      detail: "CAP",
      price: 4500,
      desc: "Descripcion del producto 4",
    },
    {
      id: 5,
      title: "Gafas Oakey Radar",
      category: "Accesorios",
      stock: 3,
      imgurl: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw9cb86900/images/full/10004335_O/2020/10004335_Oakley_Radar_EV_Path_Prizm_Road_bk_full.png",
      detail: "RADAR",
      price: 4000,
      desc: "Descripcion del producto 5",
    },
    {
      id: 6,
      title: "Air Jordan 1",
      category: "Calzado",
      stock: 10,
      imgurl: "https://static.nike.com/a/images/t_default/a098a48a-25e6-4b93-84bf-06e684a549f3/air-jordan-1-mid-shoes-3DR8L9.png",
      detail: "JDN1",
      price: 150000,
      desc: "Descripcion del producto 6",
    },
    {
      id: 7,
      title: "Pack Medias Nike",
      category: "Accesorios",
      stock: 2,
      imgurl: "https://static.nike.com/a/images/t_default/wqdt6wcrmqe3lffuotyx/calcetines-largos-de-entrenamiento-3-pares-performance-lightweight.png",
      detail: "SOCKS",
      price: 3500,
      desc: "Descripcion del producto 7",
    },
    {
      id: 8,
      title: "Gafas Regular",
      category: "Accesorios",
      stock: 10,
      imgurl: "https://cdn.shopify.com/s/files/1/1075/3858/products/Regular_smoky_grey_red_frontal_1500x750.png?v=1569404314",
      detail: "REG",
      price: 3400,
      desc: "Descripcion del producto 8",
    },
    {
      id: 9,
      title: "Remera W.I.S",
      category: "Indumentaria",
      stock: 7,
      imgurl: "https://d22fxaf9t8d39k.cloudfront.net/7341fc24f87766b3c486c4e8815dcc4420d2c4bcd8903979da377143c9e5eb2632772.png",
      detail: "WIS",
      price: 5000,
      desc: "Descripcion del producto 9",
    },
    {
      id: 10,
      title: "Reloj Navigil",
      category: "Accesorios",
      stock: 10,
      imgurl: "https://www.navigil.com/wp-content/uploads/2019/05/5.png",
      detail: "RELOJ",
      price: 8500,
      desc: "Descripcion del producto 10",
    },
  ];
  
  const obtenerProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(database);
      }, 3000);
    });
  };

  const getProd = (idURL) => {
    return new Promise((resolve, reject) => {
      const reqItem = database.find((item)=>{ 
        console.log(item.id, idURL);
        return item.id === parseInt(idURL); });

      setTimeout(() => {
        resolve(reqItem);
      }, 2000);
    });
  };
  
  const getProdByCategory = (categoryURL) => {
    return new Promise((resolve, reject) => {
      let reqItem = database.filter((item)=> item.category === categoryURL);
      setTimeout(() => {
        resolve(reqItem);
      }, 2000);
    });
  };

  export default obtenerProductos;
  
  export { getProd, getProdByCategory };