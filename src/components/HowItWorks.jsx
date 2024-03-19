import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })

    gsap.to('#frameVideo', {
      scrollTrigger: {
        trigger: '#frameVideo',
        toggleActions: 'restart none noe reverse',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      }
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro 晶片。
            <br /> 玩遊戲，體驗完勝。
          </h2>

          <p className="hiw-subtitle">
            Apple GPU 史上最重大的革新設計，震撼現身。
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>

            <div className="hiw-video">
              <video 
                id="frameVideo" 
                className="pointer-events-none" 
                playsInline 
                preload="none"
                muted 
                autoPlay 
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">《崩壞：星穹鐵道》</p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              A17 Pro 是一款極致創新的 iPhone 晶片，繪圖處理效能顛覆極限， {' '}
              <span className="text-white">
                是 iPhone 歷來最強。
              </span>.
            </p>

            <p className="hiw-text g_fadeIn">
              {/* Mobile {' '} */}
              細膩豐富的場景和栩栩如生的人物角色，帶來令人
              <span className="text-white">
                全然沉浸其中的手機遊戲體驗
              </span>
              。同時，A17 Pro 以業界領先的速度和效率，讓一切執行都快速流暢。
            </p>
          </div>
            

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">全新</p>
            <p className="hiw-bigtext">Pro 級 GPU</p>
            <p className="hiw-text">配備 6 核心</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
