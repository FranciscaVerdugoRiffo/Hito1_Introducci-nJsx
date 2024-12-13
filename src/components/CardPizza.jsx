const CardPizza = ({ name, price, ingredients, img }) => (
    <div className="col-md-4 mb-4">
        <div className="card h-100">
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>Ingredientes: </p>
                     <p>{ingredients.join(', ')}</p>
                <p className="card-text">Precio: ${price.toLocaleString()}</p>
                <button className="btn btn-light me-2">Ver más</button>
                <button className="btn btn-dark">Añadir 🛒</button>
            </div>
        </div>
    </div>
);

export default CardPizza;