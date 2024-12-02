"use client";
import { categorias } from "@/app/constants";
import Image from "next/image";

export default function Productos(){
    return (
        <section className="mt-28 px-28">
            <h1 className="text-center text-4xl text-stone-900">Nuestros Productos</h1>    
            <div className="w-full flex flex-wrap flex-row mt-10">
                {categorias.map((categoria, index) => {
                    return ( 
                        <div className="basis-1/3" key={index}>
                            <a href={"/productos/"+categoria.slug}>
                                <Image 
                                    src={categoria.img.src}
                                    className='img-responsive mt-5 w-auto h-72'
                                    alt='logo'
                                    width={400}
                                    height={600}
                                />
                                <legend className="text-center text-gray-600">{categoria.name}</legend>
                            </a>
                        </div>
                    )
                }) }
            </div>
        </section>
    )
}