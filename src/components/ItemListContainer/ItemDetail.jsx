const ItemDetail = ( {item} ) => {
    return (
      <div className="container">
          <div>
              <img src={item.imagen} alt={item.titulo} />
              <div>
                  <h3>{item.titulo}</h3>
                  <p>{item.descripcion}</p>
                  <p>Categoría: {item.categoria}</p>
                  <p>${item.precio}</p>
              </div>
          </div>
      </div>
    )
  }
  
  export default ItemDetail;