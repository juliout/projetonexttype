import React, { useState } from 'react';
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
    
    const [SendColor, setSendColor] = useState<string>('')
  
  
    return (
      <>
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
                            <select className='divCxColor'>
                                { fill.map( c => {
                                    return <CxColor backgroundInfo={c} key={c} onClick={()=> setSendColor(c)}>{c}</CxColor>
                                })}                               
                            </select>
                        </div>
                    </div>
                    <div className='rBton'>
                        <div className='dSize-rbton'>
                            <h2>size:</h2>
                            <select className='dSizeCx'>
                                {size.map(ca => {
                                    return ( 
                                        <CxSize>{ca}</CxSize>
                                    )
                                })}
                            </select>

                        </div>
                        <div className='btnInfoModal'>
                            <button className='btnCart'>
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
      </>
  )
}

export default ModalMoreInfo;