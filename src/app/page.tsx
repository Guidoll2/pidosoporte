import Image from 'next/image'
import Navbar from './navbar';
import Body from './body';
import Footer from './footer';




export default function Home() {
  return (
    <main className="flex grid grid-cols-1">

      <a href= 'https://wa.me/+5491133324034' target='_blank'>
      <img 
      className='fixed right-2 bottom-10 animate-[bounce_3s_ease-in-out_infinite] z-[100]'
      src='whatsappcheto.svg'
      width={50}
      height={50}
      alt='whatsapplogo'/></a>


      <Navbar/> 

      <div className=''>
      <Body/></div>


      <div>
        <Footer/>
      </div>


      
    </main>
  )
}
