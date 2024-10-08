import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse reverse',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      }
    })

    animateWithGsap('#features_title', { y: 0, opacity: 1})

    animateWithGsap( '.g_grow', { scale: 1, opacity: 1, ease: 'power1' }, { scrub: 5.5 } );

    animateWithGsap( '.g_text', { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1}, { toggleActions: 'restart none noe reverse',} )
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">全精彩，全探索。</h1>
        </div>
        
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 w-full">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone，</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">鈦金之作。</h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video 
                playsInline 
                id="exploreVideo" 
                className="w-full h-full object-cover object-center"
                preload="none" 
                muted 
                autoPlay 
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
                </div>

                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore2Img} alt="titanium 2" className="feature-video g_grow" />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro 是 {' '}
                    <span className="text-white">
                      首款採用航太等級鈦金屬設計的 iPhone
                    </span>，
                      使用的合金，與執行火星任務的太空船別無二致。
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    鈦金屬的強度重量比在眾金屬中名列前茅，因此打造出我們 {' '}
                    <span className="text-white">
                      歷來最輕盈的 Pro 機型
                    </span>
                    。它的不凡，當你握在手中就會察覺個中差異。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features