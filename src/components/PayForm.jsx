import {useState} from "react";
function PayForm({emptyCart, setPaymentCompleted}){
    const [creditCardNumber, setCreditCardNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [formData, setFormData] = useState({
        first_name: "",
        surnames: "",
        adress: "",
        zip_code: "",
        state: "",
        city: "",
        email: "",
        phone: "",
        cardholder: "",
        card_number: "",
        cvv: "",
        expiration_date: ""
    })
    const states = [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
    ]
    function handleInputCardNumber(e){
        //Recogemos el valor del campo:
        let value = e.target.value;
        //Eliminar cualquier carácter que no sea un número
        value = value.replace(/\D/g, '');
        //Insertar espacios cada 4 caracteres
        value = value.replace(/(\d{4})(?!$)/g, '$1 ');
        //Limitar a 19 caracteres (16 números y 3 espacios)
        value = value.substring(0, 19);
        setCreditCardNumber(value);
        handleInputChange(e)
    }
    function handleExpirationDate(e){
        let value = e.target.value;
        value = value.replace(/\D/g, '');
        //Insertar la barra cada 2 caracteres
        value = value.replace(/(\d{2})(?!$)/g, '$1/');
        value = value.substring(0, 5);
        setExpirationDate(value);
        handleInputChange(e)
    }
    function handleSubmit(e){
        //Evitamos que la pagina se actualize
        e.preventDefault();
        //Eliminamos los datos
        setFormData({
            first_name: "",
            surnames: "",
            adress: "",
            zip_code: "",
            state: "Select an state...",
            city: "",
            email: "",
            phone: "",
            cardholder: "",
            card_number: "",
            cvv: "",
            expiration_date: ""
        })
        setCreditCardNumber("");
        setExpirationDate("");
        //Decimos que se ha completado el pago
        setPaymentCompleted(true);
    }
    function handleInputChange(e){
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <h4>Pay Form</h4>
            <h6>*Required</h6>
            <div className="row">
                <div className="col">
                    <h5>Name*</h5>
                    <input type="text" className="form-control mb-3" placeholder="Name" name="first_name" onChange={handleInputChange} value={formData.first_name} required />
                </div>
                <div className="col">
                    <h5>Surnames*</h5>
                    <input type="text" className="form-control mb-3" placeholder="Surnames" name="surnames" onChange={handleInputChange} value={formData.surnames} required />
                </div>
            </div>
            <div className="row">
                <div className="col-9">
                    <h5>Adress*</h5>
                    <input type="text" className="form-control mb-3" placeholder="Adress" name="adress" onChange={handleInputChange} value={formData.adress} required />
                </div>
                <div className="col-3">
                    <h5>Zip code*</h5>
                    <input type="text" className="form-control mb-3" placeholder="12345" name="zip_code"  maxLength="5" onChange={handleInputChange} value={formData.zip_code} required />
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <h5>State*</h5>
                    <select className="form-control mb-3" name="state" onChange={handleInputChange} value={formData.state} required>
                        <option disabled selected>Select an state...</option>
                        {
                            states.map((state) => {
                                return(
                                    <option value = {state}>{state}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="col-4">
                    <h5>City*</h5>
                    <input type="text" className="form-control mb-3" placeholder="City" name="city" onChange={handleInputChange} value={formData.city} required />
                </div>
            </div>
            <div className="row">
                <div className="col-7">
                    <h5>Email*</h5>
                    <input type="email" className="form-control mb-3" placeholder="example@example.com" name="email" onChange={handleInputChange} value={formData.email} required />
                </div>
                <div className="col-5">
                    <h5>Phone*</h5>
                    <input type="tel" className="form-control mb-3" placeholder="Phone" name="phone" onChange={handleInputChange} value={formData.phone} required />
                </div>
            </div>
            <h4>Card Data</h4>
            <div className="row">
                <div className="col-8">
                    <h5>Cardholder*</h5>
                    <input type="text" className="form-control mb-3" placeholder="Cardholder" name="cardholder" onChange={handleInputChange} value={formData.cardholder} required />
                </div>
                <div className="col-4">
                    <h5>CVV*</h5>
                    <input type="text" className="form-control mb-3" placeholder="123" name="cvv" maxLength="3" onChange={handleInputChange} value={formData.cvv} required />
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <h5>Card Number*</h5>
                    <input type="text" className="form-control mb-3" placeholder="1234 5678 9012 3456" name="card_number" onChange={handleInputCardNumber} value={creditCardNumber} required />
                </div>
                <div className="col-4">
                    <h5>Expiration Date*</h5>
                    <input type="text" className="form-control mb-3" placeholder="MM/YY" name="expiration_date" onChange={handleExpirationDate} value={expirationDate} required />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="submit" className="btn btn-primary w-50" onClick={emptyCart}>Pay</button>
                </div>
            </div>
        </form>
    )
}
export default PayForm;