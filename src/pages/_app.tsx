import type { AppProps } from 'next/app'
import { CartProvider } from '../../context/CartContext'
import GlobalStyles from '../styles/globalStyles'


export default function MyApp({ Component, pageProps}: AppProps) {
  return (
  <CartProvider>    
    <GlobalStyles/>
    <Component {...pageProps} />
  </CartProvider>  
  
  )
}
