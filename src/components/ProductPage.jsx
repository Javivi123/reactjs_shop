import {useParams, Link} from "react-router-dom";
import ImageGallery from "react-image-gallery";
function ProductPage({onAddToCart}){
    //Recogemos los datos de la url con el mismo nombre del parámetro de la ruta
    const {productData} = useParams();
    //Convertimos los datos a JS
    const product = JSON.parse(productData);
    //Accedemos a las imágenes del producto
    var images = [];
    for(let i = 0; i < product.images.length; i++){
        images.push({original: product.images[i], thumbnail: product.images[i]})
    }
    return(
        <div className="container mt-5">
            <div id="link" className="mb-4">
                <Link to="/" id="back" className="fw-bold">Back</Link>
            </div>
            <div className="row">
                <div className="col">
                    <ImageGallery items={images} />
                </div>
                <div className="col">
                    <h4 className="text-start">{product.title}</h4>
                    <p className="text-start mt-5"><span className="fw-bold">Brand: </span>{product.brand}</p>
                    <p className="text-start"><span className="fw-bold">Description: </span>{product.description}</p>
                    <p className="text-start"><span className="fw-bold">Price: </span>{product.price}$ <span className="text-danger">-{product.discountPercentage}%</span></p>
                    <p className="text-start"><span className="fw-bold">Rating: </span>{product.rating}/5</p>
                    <div className="card card-category">
                        <div className="card-body">
                            {product.category}
                        </div>  
                    </div>
                    <div className="d-flex justify-content-start mt-5">
                        <button type="button" className="btn btn-primary" onClick={()=>onAddToCart(product)}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductPage