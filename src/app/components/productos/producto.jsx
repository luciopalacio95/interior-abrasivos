'use client';
import Image from "next/image";
import afiche from '../../../images/afiche.jpg';
import Buscador from "../layouts/buscador";

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
                    <div className="mt-5 text-stone-900 text-base pr-16" dangerouslySetInnerHTML={{ __html: producto.description }}>
                    </div>
                    <br></br>
                    <a className="text-indigo-600 text-xl font-semibold mt-4" href="/productos">&lt;&lt; volver</a>
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