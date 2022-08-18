import React, { useContext,useEffect, useState } from 'react';
import { CartContext } from '../../../context/CartContext';

import Header from '../../components/Header'
import Footer from '../../components/Footer';
import { PaymentDiv, LeftPayment, RightPayment } from '../../styles/paymentstyle'

import { AiOutlineDelete } from 'react-icons/ai'
import { IoMdColorFill } from 'react-icons/io'
import { BsDot } from 'react-icons/bs'
import { TbCurrencyReal } from 'react-icons/tb'
import { RiCoupon3Line, RiSendPlane2Line } from 'react-icons/ri'

export default function Payment(){

    const [coupon, setCoupon] = useState<boolean>(false)

    function sendCoupon(){
        setCoupon(false)
    }

    const DivCupon = () => {
        return (
            <div className='inputCoupon'>
                <input type="text" placeholder='Coupon'/> <RiSendPlane2Line className='sendcoupon' onClick={() => sendCoupon()}/>
            </div>
        )
    }


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
                    <div className="sumary">
                        <h2> <BsDot/>Order Sumary</h2>
                        <div className='valuePay'>
                            <p>Balance amount: 
                                <span>
                                    <TbCurrencyReal/> 800,00
                                </span>
                            </p> 
                            <p>VA(2%): <span><TbCurrencyReal/> 800,00</span></p>
                            <div className='p couponLine'>Coupon { !coupon ? <RiCoupon3Line className='btnCoup' onClick={()=>setCoupon(true)}/> : <DivCupon/> }</div>
                        </div>
                        <div className="totalpay">
                            <p>Total : 
                                <span> 
                                    <TbCurrencyReal/> 200,00
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="PaymentMethod">
                        
                    </div>


                </RightPayment>
            </PaymentDiv>
            <Footer/>
        </>
    )
}