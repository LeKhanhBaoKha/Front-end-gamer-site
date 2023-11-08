
function ProductCard(props) {
    return (
        <div className="card h-100">
            <div className="card-body">
                <h4 className="card-title"><a href="#">{props.data.name} </a> </h4>
                <p className="card-text text-success">${props.data.price}</p>
                <p className="card-text">{props.data.description}</p>
            </div>
            <div className="card-footer bg-white border-0">
                <a href="#" className="btn btn-primary">Check out!</a>
            </div>
        </div>
    )
}

export default ProductCard;
