import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo_ch, smallHeroVideo_ch } from '../utils/index'
import { useEffect, useState } from 'react';

const Hero = () => {
  const pickVideo = window.innerWidth < 760 ? smallHeroVideo_ch : heroVideo_ch
  const[videoSrc, setVideoSrc] = useState(pickVideo)

  const handleVideo = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo_ch)
    } else {
      setVideoSrc(heroVideo_ch)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideo)

    return () => {
      window.removeEventListener('resize', handleVideo)
    } 
  },[])

  useGSAP(() => {
    gsap.to('#hero',{ opacity: 1, delay: 1, })

    gsap.fromTo('#price', {
      opacity: 0,
      y: -50,
    },
    {
      opacity: 1,
      y: -150,
      delay: 1.2,
      stagger: 0.1,
    })
  },[])

  return (
    <section className="w-full nav-height relative max-w-[1280px] mx-auto">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id='hero' className="hero-title">iPhone 15 Pro</p>

        <div className='md:w-full w-9/12'>
          <video autoPlay muted playsInline={true} key={videoSrc} className='pointer-events-none'>
            <source src={videoSrc} type='video/mp4'/>
          </video>
        </div>
      </div>

      <div className='flex flex-col items-center translate-y-20'>
        <a id='price' href='#highlights' className='btn'>購買</a>
        <p id='price' className='font-normal text-2xl'>NT$36,900 起</p>
      </div>
    </section>
  )
}

export default Hero