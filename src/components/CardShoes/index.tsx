import React, { useState } from 'react';
import ModalMoreInfo from '../ModalMoreInfo';
import { CardItem, BackGroundDivCard} from './CardStyle'

type cardProps = {
    id: number,
    name: string,
    types: string,
    price: string,
    gender: string,
    tamanho: string[],
    colors: string[],
    image: string,
}

const CardShoes = ({id, name, types, price, gender, tamanho, colors, image,}:cardProps) => {

  const [openModal, setOpenModal] = useState(false)
  
    return (
    <>
        <CardItem key={id}>
            <BackGroundDivCard backgroundImage={`${image}`}/>
            <p>{name}</p>
            <span>{gender}</span>
            <span>$ {price}</span>
            <button onClick={()=> setOpenModal(true)}>+ info</button>
        </CardItem>
        {openModal ? <ModalMoreInfo name={name} type={types} price={price} gender={gender} size={tamanho} fill={colors} image={image} closeModal={setOpenModal}/> : null}
    </>
    );
}

export default CardShoes;