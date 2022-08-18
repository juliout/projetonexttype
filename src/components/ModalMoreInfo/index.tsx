import React, { useState, useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { BaseModal, ModalInfo } from './modalStyled';
import {BsFillCartPlusFill} from 'react-icons/bs'
import {ImCancelCircle} from 'react-icons/im'
import {CxColor, CxSize} from './modalStyled'

type modalProps = {
    name: string,
    type: string,
    price: string,
    gender: string,
    size: string[],
    fill: string[],
    image: string,
    closeModal?: any
}

const ModalMoreInfo = ({ name, type, price, gender, size, fill , image, closeModal}:modalProps) => {
    
    const [selectColor, setSelectColor] = useState<string>('color')
    const [selectSize, setSelectSize] = useState<string>('size')

    size = ['select', ...size]
    fill = ['select', ...fill]

    const { cart, setCart } = useContext(CartContext)

    console.log(selectSize,selectColor)

    function addCart(){

        setCart([...cart,{
            name: name,
            type: type,
            price: price,
            gender: gender,
            size: selectSize,
            fill: selectColor,
            image: image
        }])
        console.log(cart)
    }
  
    return (
        <BaseModal>
            <ModalInfo backgroundInfo={`${image}`}>
                <div className="leftImage"/>
                <div className="rightInfo">
                    <div className='rTop'>
                        <h1>{name}</h1>
                        <p>type: {type} / {gender}</p>
                        <p>Price: R$ {price}</p>
                        <div className='dColors'>
                            <span>Colors:</span>
                            <select className='divCxColor' onChange={(e)=> setSelectColor(e.target.value)}>
                                { fill.map( cf => {
                                    return <CxColor backgroundInfo={cf} key={cf}>{cf}</CxColor>
                                })}                               
                            </select>
                        </div>
                    </div>
                    <div className='rBton'>
                        <div className='dSize-rbton'>
                            <h2>size:</h2>
                            <select className='dSizeCx' onChange={(e)=> setSelectSize(e.target.value)}>
                            {  size.map(sz => {
                                    return ( 
                                        <CxSize>{sz}</CxSize>
                                    )
                                })
                                    
                            }
                            </select>

                        </div>
                        <div className='btnInfoModal'>
                            <button className='btnCart' onClick={() => {
                                addCart()
                                closeModal(false)
                                }}>
                                Add to cart <BsFillCartPlusFill size={'30px'} className='btnIcon'/>
                            </button>
                            <button className='btnCancel' onClick={()=> {
                                closeModal(false)
                            }}>
                                Cancel <ImCancelCircle className='btnIcon'/>
                            </button>
                        </div>
                    </div>
                </div>
            </ModalInfo>
        </BaseModal>
      
  )
}

export default ModalMoreInfo;