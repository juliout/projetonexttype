import Header from '../components/Header'
import { BottomDiv, Slider } from '../styles/homeStyle'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Component, useEffect, useRef } from 'react'
import Footer from '../components/Footer'
import { CartProvider } from '../../context/CartContext'


const Home = () => {
  const SliderR = useRef<any>(null)
 
  const setaEsquerda = (event:any) => {
    event.preventDefault()

    let DivWidth = SliderR.current?.offsetWidth
    let MenosW = SliderR.current.scrollLeft -= DivWidth

    if (MenosW < 0){
      SliderR.current.scrollLeft += SliderR.current?.offsetWidth * 3
    }
    else {
      console.log(SliderR.current.scrollLeft - DivWidth)
      
    }

  }
  const setaDireita = (event:any) => {
    event.preventDefault()

    let DivWidth = SliderR.current?.offsetWidth
    let maisW = SliderR.current.scrollLeft += DivWidth
  
    if(maisW >= (DivWidth*3)){
      SliderR.current.scrollLeft = 0
    }
  }

  useEffect(()=>{
    clearInterval()
    function start() {
      let DivWidth = SliderR.current?.offsetWidth
      let maisW = SliderR.current.scrollLeft += DivWidth
  
      if(maisW >= (DivWidth*3)){
        SliderR.current.scrollLeft = 0
      }
    }
    setInterval(()=>{
      start()
    },7000)
    
  })
  return (
    <CartProvider>
      <Header/>
      <Slider ref={SliderR} id='SliderDiv'>
        <div className="slideContainer">

          <div className='slide first'>
            <img src="/images/banner1.png" alt="slideImage"  />
          </div>
          <div className='slide'>
            <img src="/images/banner2.png" alt="slideImage" />
          </div>
          <div className='slide'>
            <img src="/images/banner3.png" alt="slideImage" />
          </div>   
        </div>
        
        <BsFillArrowLeftCircleFill 
          size='40px' className='btnLeftSlide' onClick={setaEsquerda}
        />
        <BsFillArrowRightCircleFill 
          size='40px' className='btnRightSlide' onClick={setaDireita}
        />
      </Slider>

      <BottomDiv>
        <h1>Take the first step to new walks.</h1>
        <div>
          <a href="">meet us</a>
          <a href="">all products</a>
        </div>
      </BottomDiv>

      <Footer/>
      </CartProvider>  
  )
}
export default Home