'use client';
import Image from "next/image";
import afiche from '../../../images/afiche.jpg';
import Buscador from "../layouts/buscador";

import Lightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Video from 'yet-another-react-lightbox/plugins/video'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

export default function Producto(props) {
    const producto = props.producto;

    return(
        <section className="w-full flex flex-row mt-48 px-28">
            <div className="basis-3/4">
            {!producto ?
                <h1 className="text-start text-4xl text-gray-500">Sin resultados</h1>
            :
                <>
                    <h1 className="text-start text-4xl text-gray-500">{producto.name}</h1>
                    <div className="mt-5 text-stone-900 text-xl pr-16" dangerouslySetInnerHTML={{ __html: producto.description }}>
                    </div>
                    <br></br>
                    <a className="text-stone-900 text-xl font-semibold mt-4" href="/productos">&lt;&lt; volver</a>
                </>
            }
            </div>
            <div className="basis-1/4">
            <Buscador/>
                <Image 
                  src={afiche.src}
                  className='img-responsive mt-20'
                  alt='afiche empresa'
                  width={400}
                  height={600}
                />
            </div>
        </section>
    )
}