import Image from "next/image";
import afiche from '../../../images/afiche.jpg';
import Buscador from "../layouts/buscador";
import { categorias } from "@/app/constants";

export default function ProductoSection() {
    return(
        <section className="w-full flex flex-row mt-48 px-28">
            <div className="basis-3/4">
                <h1 className="text-start text-4xl text-gray-500">Nuestros Productos</h1>
                <div className="w-full flex flex-wrap flex-row mt-10 pr-12">
                    {categorias.map((categoria, index) => {
                        return ( 
                            <div className="basis-1/2 px-5" key={index}>
                                <a href={"/productos/"+categoria.slug}>
                                    <Image 
                                        src={categoria.img.src}
                                        className='img-responsive border-2 mt-12 object-contain w-auto h-64'
                                        alt='logo'
                                        width={400}
                                        height={600}
                                    />
                                    <legend className="text-center text-lg font-medium py-2 text-white bg-slate-500">{categoria.name}</legend>
                                </a>
                            </div>
                        )
                    }) }
                </div>
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