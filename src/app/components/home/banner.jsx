'use client'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import sl1 from '../../../images/rag-banner.jpg'
import slm1 from '../../../images/rag-banner.jpg'
import sl2 from '../../../images/industria_banner.jpg'
import slm2 from '../../../images/industria_banner.jpg'

export default function Banner(){
    return (
        <section className='top-10'>
          <Carousel
            showArrows={false}
            emulateTouch
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            swipeable={false} 
            useKeyboardArrows
            margin={0}
            padding={0}
            autoPlay={false}
            interval={5000}
            transitionTime={800}
          >    
            <div>
              <picture>
                <source media='(max-width: 600px)' srcSet={slm1.src} />
                <img src={sl1.src} alt='slider 1' />
              </picture>

              <div className='absolute right-0 z-10 -mt-80 w-5/12 p-6 bg-black bg-opacity-40'>
                  <button className='text-4xl text-start leading-10'>Poderosas soluciones de uso fácil, permitiendo la utilización en diversos tipos de materiales.</button>
              </div>
            </div>
    
            <div>
              <picture>
                <source media='(max-width: 600px)' srcSet={slm2.src} />
                <img src={sl2.src} alt='slider 2' />
              </picture>
              <div className='absolute left-0 z-10 -mt-80 w-6/12 p-6 bg-black bg-opacity-60'>
                  <button className='text-4xl text-start pl-10 leading-10'>Tecnología de punta que tiene como objetivo ayudar a mejorar y construir su vida.</button>
              </div>
            </div>
          </Carousel>
        </section>
      )
}