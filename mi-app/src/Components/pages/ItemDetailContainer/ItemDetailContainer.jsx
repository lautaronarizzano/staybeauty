import React from "react";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  return (
    <main className="detail-main">
      <section className="detail-section">
        <div className="detail-item">
          <img
            src="https://essential.vtexassets.com/arquivos/ids/655909-800-auto?v=638040472244100000&width=800&height=auto&aspect=true"
            alt=""
          />
          <div className="detail-info">
            <h3>Producto</h3>
            <h4>Descripcion</h4>
            <h3>Precio</h3>
          </div>
        </div>
        <div className="detail-count">
					<h3 className="cantidad">Cantidad</h3>
          <div className="item-count">
            <button>-</button>
            <input type="number" value='1'/>
            <button>+</button>
          </div>
        </div>
				<div className="detail-buy">
					<button>Añadir al Carrito</button>
				</div>
      </section>
    </main>
  );
};

export default ItemDetailContainer;
