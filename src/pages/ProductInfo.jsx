import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Productinfo() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    if (!product) return null;

    return (
        <div className="row d-flex justify-content-center">
            <div className="card col-8 ">
                <div className="col d-flex justify-content-center p-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                        style={{ maxHeight: "300px", objectFit: "contain" }}
                    />
                </div>
                <div className="col text-center  p-4">
                    <h2>{product.title}</h2>
                    <p className="text-muted">{product.category}</p>
                    <p>{product.description}</p>
                    <h4 className="border rounded">{product.price}€</h4>
                </div>
            </div>
        </div>
    );
}
