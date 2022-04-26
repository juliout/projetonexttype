import React from 'react';
import { DivHeader, BtnLink } from './styled';


export default function Header() { 
  
  return (
    <DivHeader>
      <img src='/images/logo.png' alt=""  className='Logo'/>
      <ul>
        <BtnLink href="/" backgroudChose={'/images/nikebgtitle.png'}>
          <li>Nike</li>
        </BtnLink>
        <BtnLink href="/" backgroudChose={'/images/adidasbgtitle.png'}>
          <li>Adidas</li>
        </BtnLink>
        <BtnLink href="/" backgroudChose={'/images/pumabgtitle.png'}>
          <li>Puma</li>
        </BtnLink>
      </ul>

      <a href='/' className='registerLogin'>
        Login / Register
      </a>

      <img src="/images/carrinho.png" alt="" className='marketCart' />
    </DivHeader>
  );
}