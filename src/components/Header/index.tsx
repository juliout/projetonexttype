import React from 'react';
import { DivHeader, BtnLink } from './styled';


export default function Header() { 
  
  return (
    <DivHeader>
      <a href="/">
        <img src='/images/logo.png' alt="logo"  className='Logo'/>
      </a>
      <ul>
        <BtnLink href="/shoes/nike" backgroudChose={'/images/nikebgtitle.png'}>
          <li>Nike</li>
        </BtnLink>
        <BtnLink href="/shoes/adidas" backgroudChose={'/images/adidasbgtitle.png'}>
          <li>Adidas</li>
        </BtnLink>
        <BtnLink href="/shoes/puma" backgroudChose={'/images/pumabgtitle.png'}>
          <li>Puma</li>
        </BtnLink>
      </ul>

      <a href='/' className='registerLogin'>
        Login / Register
      </a>

      <a href="/payment" className='marketCart'>
        <img src="/images/carrinho.png" alt="kartIcon" />
      </a>
    </DivHeader>
  );
}