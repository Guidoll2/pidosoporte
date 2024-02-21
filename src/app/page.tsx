import Image from 'next/image'
import Navbar from './navbar';
import Body from './body';
import About from './aboutus';
import Identidad from './identidad';
import IconoFlecha from './flecha';
import LogoWp from './logowp';


export default function Home() {
  return (
    
<main className="max-w-screen">


<LogoWp></LogoWp>

<IconoFlecha></IconoFlecha>


{/**
      <a href= 'https://wa.me/+5491133324034' target='_blank'>
      <img 
      className='fixed right-2 bottom-10 animate-[bounce_3s_ease-in-out_infinite] z-[100] md:w-20'
      src='whatsappcheto.svg'
      width={50}
      height={50}
      alt='whatsapplogo'/></a>  */}

 

      <div className=''>
      <Body/></div>
      
    </main>
  )
}
