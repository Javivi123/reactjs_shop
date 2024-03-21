import Modal from "react-bootstrap/Modal";
import {Link} from "react-router-dom"

function CartModal({show, handleClose, cartList, totalCart, emptyCart, deleteProduct}){
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>My Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    cartList.length > 0 ? (
                            cartList.map((product, index) => {
                                return(
                                    <div className="mb-2">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex justify-content-start">
                                                <img src={product.thumbnail} alt={product.title} width="60" height="60" className="image-cart mt-2"/>
                                                <p className="mx-3 mt-3">{product.title}</p>
                                                <p className="mt-3">{product.price*product.quantity}$</p>
                                                {
                                                    product.quantity > 1 ? (
                                                        <p className="mt-3 mx-3 fw-bold">{product.quantity} units</p>
                                                    ):(
                                                        <p className="mt-3 mx-3 fw-bold">{product.quantity} u</p>
                                                    )
                                                }
                                            </div>
                                            {
                                                product.quantity > 1 ? (
                                                    <p id="X" className="mt-3 fw-bold mx-4" onClick={() => deleteProduct(product)}>Delete 1 unit</p>
                                                    
                                                ):(
                                                    <p id="X" className="mt-3 fw-bold mx-4" onClick={() => deleteProduct(product)}>X</p>
                                                )
                                            }
                                            
                                        </div>
                                        
                                    </div>
                                )
                            })
                    ):(
                        <div>
                            <h3>This cart is empty</h3>
                            <h5>Please buy something :o</h5>
                        </div>
                    )
                }
            </Modal.Body>
            <Modal.Footer>
                <div className="d-flex justify-content-between">
                    <div className="mt-3 mx-5">
                        <p>Total: {totalCart}$</p>
                    </div>
                    <div className="d-flex justify-content-end">
                    {
                        cartList.length > 0 && (
                            <>
                            <button className="btn btn-outline-danger" onClick={emptyCart}>Empty Cart</button>
                            <Link to={"/paypage"} className="btn btn-primary mx-3">Go to pay</Link>
                            </>
                        )
                    }
                    </div>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default CartModal;