const CardPizza = ({ name, price, ingredients, img }) => (
    <div className="col-md-4 mb-4">
        <div className="card h-100">
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <hr style={{ border: '1px solid #ccc' }} />
                <p>Ingredientes: </p>
                     <p className="card-ingredients">🍕{ingredients.join(', ')}</p>
                <hr style={{ border: '1px solid #ccc' }} />
                <p className="card-text">Precio: ${price.toLocaleString()}</p>
                <button className="btn btn-light button-spacing">Ver más👀</button>
                <button className="btn btn-dark">Añadir 🛒</button>
            </div>
        </div>
    </div>
);

export default CardPizza;