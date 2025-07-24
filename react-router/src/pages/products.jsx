// src/pages/Products.jsx
import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Chiamata API al montaggio
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading products...</p>;

    return (
        <div>
            <h1 className="mb-4">Prodotti</h1>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card h-100">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="card-img-top p-3"
                                style={{ height: "200px", objectFit: "contain" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text text-truncate">{product.description}</p>
                                <div className="mt-auto">
                                    <strong>{product.price}€</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
