import Image from "next/image";
import afiche from '../../../images/afiche.jpg';
import Buscador from "../layouts/buscador";

export default function Historia() {
    return(
        <section className="w-full flex flex-row mt-48 px-28">
            <div className="basis-3/4">
                <h1 className="text-start text-4xl text-gray-500">Empresa</h1>
                <p className="text-stone-900 text-xl mt-8 pr-10">
                    <b>Abrasivos R.INTERIOR</b>, es una empresa familiar que fabrica Piedras de Esmeriles, fundada en el año 1987, radicada en la provincia de cordoba. En sus inicios la base de nuestra industria fue la fabricación de puntas montadas y ruedas de interior, especializándonos en trabajos sobre plano, en diferentes calidades y formatos.
                    <br></br><br></br>
                    Con el paso del tiempo, con el fin de satisfacer a un mercado cada vez más exigente y de brindar al cliente una solución total en cuanto a abrasivos, se incorporaron maquinarias y tecnología para la elaboración de productos tales como: limas abrasivas, copas rectas y cónicas, segmentos doble faz y todo tipo de ruedas especiales y a pedido. Tenemos desarrollada una línea específica para cortadoras de fiambre siendo los únicos con una línea especializada y maquinas especificas para su fabricación.
                    <br></br><br></br>
                    Contamos con atención especializada y directa hacia nuestros clientes y ofrecemos servicios para desarrollar abrasivos para su empresa.
                    <br></br><br></br>
                    Avalados por años de experiencia y un importante servicio técnico, RINTERIOR brinda la mejor solución, en el menor tiempo posible, asesorando al cliente para lograr la mejor calidad y costos para su empresa.
                </p>
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