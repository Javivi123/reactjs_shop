//import {Link} from "react-router-dom"
import {Link} from "react-router-dom"
import PayForm from "./PayForm";
import {useState} from "react";
function PayPage({cartList, totalCart, emptyCart, deleteProduct, totalProducts}){
    const [paymentCompleted, setPaymentCompleted] = useState(false);
    return(
        //Por si link apetece (mover derecha)
        //Hacer un mensaje de arriba diciendo que si estas seguro
        //<div className="container mt-5" id="link2">
            //<div className="mb-5">
                //<Link to="/" id="back" className="fw-bold">Return</Link>
            //</div>
        //</div>
        <div className="container mt-5">
            {paymentCompleted === false ? (
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <h4>Your products</h4>
                            {
                                cartList.length > 0 ? (
                                    cartList.map((product) => {
                                        return(
                                            <div className="mb-2">
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex justify-content-start">
                                                        <img src={product.thumbnail} alt={product.title} width="35" height="35" className="image-cart"/>
                                                        <p className="mx-3 mt-3 text-paypage">{product.title}</p>
                                                        <p className="mt-3 text-paypage">{product.price*product.quantity}$</p>
                                                        {
                                                            product.quantity > 1 ? (
                                                                <p className="mt-3 mx-3 fw-bold text-paypage">{product.quantity} units</p>
                                                            ):(
                                                                <p className="mt-3 mx-3 fw-bold text-paypage">{product.quantity} u</p>
                                                            )
                                                        }
                                                    </div>
                                                    {
                                                        product.quantity > 1 ? (
                                                            <p id="X" className="mt-3 fw-bold mx-4 text-paypage" onClick={() => deleteProduct(product)}>Delete 1 unit</p>
                                                    
                                                        ):(
                                                            <p id="X" className="mt-3 fw-bold mx-4 text-paypage" onClick={() => deleteProduct(product)}>X</p>
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
                        </div>
                        <div className="card-footer">
                            <h5 className="text-start">Total: {totalCart}$</h5>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card-body">
                            <PayForm 
                                emptyCart={emptyCart}
                                setPaymentCompleted={setPaymentCompleted}
                            />
                        </div>
                    </div>
                </div>
            </div>
            ):(
                <>
                <div className="alert alert-success mt-5">
                    Payment Completed!. Thanks for your purchase!.
                </div>
                <div className="container mt-5" id="link2">
                    <div className="mb-5">
                        <Link to="/" id="back" className="fw-bold">Return to home</Link>
                    </div>
                </div>
                </>
            )
            }
        </div>
    )
}
export default PayPage;