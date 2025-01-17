import { Row, Col, Container } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
import { AiTwotoneStar } from 'react-icons/ai';
import { BsTruck } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { FcCheckmark } from 'react-icons/fc';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Buynow.css';
import Login from './Login';
import Register from './Register';
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
// import useRazorpay from "react-razorpay";
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { addItemsToCart } from "../redux/actions/cartAction"

function Buynow() {
    const dispatch = useDispatch();
    const ID = useParams();
    const navigate = useNavigate()

    const [user, setUser] = useState([]);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [quantity, setquantity] = useState(100)

    const incrementHandlar = () => {
        if (user.product_stock <= quantity) return
        setquantity(quantity + 50)
    }

    const decrementHandlar = () => {
        if (quantity > 1) {
            setquantity(quantity - 50)
        }
    }

    const addToCartHandler = () => {
        dispatch(addItemsToCart(ID.id, quantity));
        alert("product add into cart")
    }

    const inquire = () => {
        dispatch(addItemsToCart(ID.id, quantity));
    }
    
    useEffect(() => {
        axios.get(`http://localhost:5000/getsingleproduct/${ID.id}`)

            .then(function (response) {
                // console.log(response.data);
                setUser(response.data);
                setEmail(response.data);
                var ID = response.data._id;
                localStorage.setItem("id", ID);

                var productID = localStorage.getItem("id");
                console.log(productID);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])



    return (
        <>
            <Header />

            <Container>
                <Row>
                    <Col className="product_view view" lg={7} md={6}>
                        <img src={user.product_image} />
                    </Col>
                    <Col className='product_view' lg={5} md={6}>
                        <h5>{user.product_name}</h5>
                        <AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><br></br>
                        <p>Rs. {user.product_price}</p>

                        <div className='d-flex align-items-center mt-3'>
                            <div className='p-Quntity'>
                                <h5>Quntity:&nbsp;&nbsp;&nbsp;</h5>
                            </div>
                            <div className='singleproduct-incrementbutton d-flex align-items-center'>
                                <button style={{ padding: "0 5px", height: "30px" }} onClick={incrementHandlar}>&#43;</button>
                                {/* <span>{increment}</span> */}
                                <input type="text" readOnly value={quantity} style={{ width: "60px", border: "1px solid #ccc", padding: "2px 13px", marginTop: "-15px" }} />
                                <button style={{ padding: "0 5px", height: "30px" }} onClick={decrementHandlar}>&#45;</button>
                            </div>
                        </div>
                        <button onClick={addToCartHandler}>ADD TO CART</button>
                        <button onClick={inquire}>inquire</button>
                        {/* <button id="buynow">BUY IT NOW</button> */}
                        <div>  {user.product_description}</div>
                        <h6><BsTruck className='me-2' />Spent <b>Rs. 23,214.11</b> more for free shipping</h6>
                        <h6><BiTimeFive className='' />Estimated Delivery between <b>Friday 10 June</b> and <b>Thursday 16 June</b>.</h6>
                        <h6><FcCheckmark className='me-2' />Free Shipping & Return <FcCheckmark className='ms-4 me-2' />  Money back guarantee</h6>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default Buynow;