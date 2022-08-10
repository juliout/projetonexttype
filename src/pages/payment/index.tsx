import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import { PaymentDiv, LeftPayment, RightPayment } from './paymentStyle'
import { AiOutlineDelete } from 'react-icons/ai'
import {IoMdColorFill} from 'react-icons/io'

export default function Payment(){

    const { cart, setCart } = useContext(CartContext)
    console.log(cart)
    return (
        <> 
            <Header/>
            <PaymentDiv>
                <LeftPayment>
                    <h2>My Cart</h2>
                    <div className='cartList'>
                        <div className='cardCart'>
                            <div className='divImage'/>
                            <div className="divInfosProduct">
                                <h2>name: </h2>
                                <p>type: casual</p>
                                <p>size: 56</p>
                                <p>color:  <IoMdColorFill className='IoMdColorFill'/></p>
                                <p>Price: <span>$2000</span></p>
                            </div>
                            <div className="btnProducts">
                                <button><AiOutlineDelete size={'70%'} className='AiOutlineDelete'/></button>
                            </div>                        
                            
                        </div>
                    </div>
                </LeftPayment>
                <RightPayment>
                    <h1>Sumary</h1>
                </RightPayment>
            </PaymentDiv>
            <Footer/>
        </>
    )
}