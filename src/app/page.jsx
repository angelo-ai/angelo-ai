'use client'
import Image from 'next/image'

import image_1 from "../../public/image_1.png"
import image_2 from "../../public/image_2.png"
import image_3 from "../../public/image_3.png"
import image_4 from "../../public/image_4.png"
import image_5 from "../../public/image_5.png"
import image_6 from "../../public/image_6.png"
import image_7 from "../../public/image_7.png"
import image_8 from "../../public/image_8.png"
import image_9 from "../../public/image_9.png"
import image_10 from "../../public/image_10.png"
import image_11 from "../../public/image_11.png"
import github from "../../public/github.svg"
import logo from "../../public/logo.png"
import { useEffect, useRef, useState } from 'react'
import NavMenu from '@/components/nav-menu'

export default function Home() {

  const headerRef = useRef();
  const circleRef = useRef();
  const circle2Ref = useRef();
  const gridRef = useRef();
  const containerRef = useRef();
  const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {

    const eventListener = window.addEventListener("scroll", e => {

      const scroll = window.pageYOffset || document.documentElement.scrollTop;

      scroll > 200 ? setPageScroll(true) : setPageScroll(false);

      const containerHeight = containerRef.current.offsetHeight;
      const containerWidth = containerRef.current.offsetWidth;

      circleRef.current.style.right = (scroll / containerHeight) * containerWidth - 96 + "px";
      circle2Ref.current.style.left = (scroll / containerHeight) * containerWidth - 96 + "px";
      circle2Ref.current.style.top = (scroll / containerHeight) * 1000 - 96 + "px";
      gridRef.current.style.left = (scroll / containerHeight) * containerWidth + 48 + "px";

    });

    return () => { window.removeEventListener("scroll", eventListener) }

  }, []);

  return (
    <div className='w-full min-h-screen flex flex-col justify-between items-center relative font-inter overflow-hidden' ref={containerRef}>


      <div id="background" className='h-screen w-screen absolute opacity-50 -z-10'>
        <div className='fixed w-72 md:w-2/5 max-w-md aspect-square rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-md -right-24' ref={circleRef}>
        </div>

        <div className='flex items-center justify-center fixed w-72 md:w-2/5 max-w-md aspect-square rounded-full ring-8 ring-purple-500 blur -left-24 -top-8' ref={circle2Ref}>
          {/* <div className='w-4/5 aspect-square bg-background rounded-full m-auto'></div> */}
        </div>

        <div className='fixed bottom-12 left-12 grid grid-rows-2 grid-cols-2 w-56 md:w-2/5 max-w-xs aspect-square gap-6' ref={gridRef}>
          <div className='w-full aspect-square bg-gradient-to-br from-pink-500 to-purple-500 blur-md'></div>

          <div className='w-full aspect-square bg-gradient-to-br from-pink-500 to-purple-500 blur-md'></div>
          <div className='w-full aspect-square bg-gradient-to-br from-pink-500 to-purple-500 blur-md'></div>
        </div>
      </div>

      {
        pageScroll &&
        <header className='w-full h-fit bg-[#fefefe]/10 backdrop-blur fixed animate-appear flex justify-between items-center p-6' ref={headerRef}>
          <Image src={logo} className='w-full max-w-[150px] md:max-w-[200px]' />

          <NavMenu></NavMenu>
        </header>
      }


      <main className="w-full flex-1 flex flex-col scroll-">

        <section id='intro' className='w-full min-h-screen text-center md:text-left flex flex-col gap-6 p-6 md:px-24 justify-center items-center md:flex-row md:justify-between'>
          <div className='md:flex-1 flex-col items-center justify-center'>
            <h1 className=' py-1 leading-normal text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-transparent bg-clip-text animate-gradient bg-300%'>
              Angelo
            </h1>
            <p className=' leading-relaxed mt-6 text-3xl font-bold text-[#fefefe] bg-clip-text bg-300%'>
              Crie, edite, transforme e
              <br />
              melhore.
            </p>
          </div>

          <div className='w-fit grid grid-rows-3 grid-cols-2 gap-6 md:grid-cols-3'>

            <figure className='w-fit flex aspect-square justify-center items-center md:col-start-1 md:row-start-2' >
              <Image src={image_1} className='w-full max-w-[100px] md:max-w-[200px]' alt="Imagem gerada por IA" />
            </figure>
            <figure className='w-fit flex aspect-square justify-center items-center md:col-start-3 md:row-start-1' >
              <Image src={image_2} className='w-full max-w-[100px] md:max-w-[200px]' alt="Imagem gerada por IA" />
            </figure>
            <figure className='w-fit flex aspect-square justify-center items-center md:col-start-2 md:row-start-1' >
              <Image src={image_3} className='w-full max-w-[100px] md:max-w-[200px]' alt="Imagem gerada por IA" />
            </figure>
            <figure className='w-fit flex aspect-square justify-center items-center md:col-start-3 md:row-start-3' >
              <Image src={image_4} className='w-full max-w-[100px] md:max-w-[200px]' alt="Imagem gerada por IA" />
            </figure>
            <figure className='w-fit flex aspect-square justify-center items-center md:col-start-2 md:row-start-2' >
              <Image src={image_5} className='w-full max-w-[100px] md:max-w-[200px]' alt="Imagem gerada por IA" />
            </figure>
            <figure className='w-fit flex aspect-square justify-center items-center md:col-start-3 md:row-start-2' >
              <Image src={image_6} className='w-full max-w-[100px] md:max-w-[200px]' alt="Imagem gerada por IA" />
            </figure>

          </div>
        </section>

        <section id='proposal' className='w-full min-h-screen text-center md:text-left flex flex-col gap-6 p-6 md:px-24 justify-center items-center md:flex-row md:justify-between'>

          <div className='md:max-w-3xl md:flex-1 flex-col items-center justify-center'>
            <h1 className='py-1 leading-normal text-5xl md:text-7xl font-bold'>

              <span>
                Conheça o poder da
              </span>
              <span className='ml-5 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text'>
                IA
              </span>
            </h1>
            <p className='leading-relaxed mt-6 text-3xl font-bold text-[#fefefe]'>
              Utilizamos técnicas de
              inteligência artificial
              para criar, editar e melhorar
              a resolução de imagens.
            </p>
          </div>

          <div className=' w-fit grid grid-rows-2 grid-cols-2 gap-6'>
            <figure className='w-fit flex aspect-square justify-center items-center' >
              <Image src={image_10} className='w-full max-w-[100px] md:max-w-[200px]' alt="Imagem gerada por IA" />
            </figure>
            <figure className='w-fit flex aspect-square justify-center items-center' >
              <Image src={image_9} className='w-full max-w-[100px] md:max-w-[200px]' alt="Imagem gerada por IA" />
            </figure>
            <figure className='w-fit flex aspect-square justify-center items-center' >
              <Image src={image_8} className='w-full max-w-[100px] md:max-w-[200px]' alt="Imagem gerada por IA" />
            </figure>
            <figure className='w-fit flex aspect-square justify-center items-center' >
              <Image src={image_7} className='w-full max-w-[100px] md:max-w-[200px]' alt="Imagem gerada por IA" />
            </figure>
          </div>

        </section>

        <section id='products' className='w-full min-h-screen text-center md:text-left flex flex-col gap-6 p-6 md:px-24 justify-center items-center md:flex-row md:justify-between'>

          <figure className='w-fit md:flex-1 flex aspect-square justify-center items-center sr-only md:not-sr-only' >
            <Image src={image_11} className='w-full' alt="Imagem gerada por IA" />
          </figure>

          <div className='md:flex-1 w-full flex-col items-center justify-center'>
            <h1 className='w-full py-1 leading-normal text-5xl md:text-7xl font-bold'>
              <span className='w-full'>
                Melhore ou crie seus próprios
              </span>
              <span className='block md:inline w-full md:ml-5 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text'>
                datasets
              </span>
            </h1>
            <p className='leading-relaxed mt-6 text-3xl font-bold text-[#fefefe]'>
              Encontre datasets para treinar seus modelos de ML, realize o balanceamento de seus dados ou encomende bancos de imagens personalizados.
            </p>
          </div>
        </section>

        <section id='contact' className='w-full min-h-screen text-left flex flex-col gap-6 p-6 md:px-24 justify-center items-center'>
            <h1 className='w-full py-1 leading-normal text-5xl md:text-7xl font-bold'>
              Contatos
            </h1>
            <a href='https://github.com/angelo-ai' target='_blank' className='self-start cursor-pointer text-3xl font-bold text-[#fefefe] flex gap-6 justify-center items-center'>
              <Image src={github} className='w-12'/>
              <span>angelo</span>
            </a>
            <a href='https://github.com/carlosedurochas' target='_blank' className='self-start cursor-pointer text-3xl font-bold text-[#fefefe] flex gap-6 justify-center items-center'>
              <Image src={github} className='w-12'/>
              <span>carlosedurochas</span>
            </a>
            <a href='https://github.com/lucas-wa' target='_blank' className='self-start cursor-pointer text-3xl font-bold text-[#fefefe] flex gap-6 justify-center items-center'>
              <Image src={github} className='w-12'/>
              <span>lucas-wa</span>
            </a>
        </section>

      </main>
      <footer>

      </footer>
    </div>
  )
}
