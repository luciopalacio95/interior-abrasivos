import Image from "next/image";
import lijador from '../../../images/lijador.jpg';

export default function Servicios() {
    console.log(lijador)
    return(
        <section className="flex flex-row mt-48 w-full px-28">
            <div className="basis-2/4">
                <h1 className="text-start text-4xl text-stone-900">Servicios</h1>
                <ul className="text-stone-900 text-xl mt-8 pr-10">
                    <li style={{lineHeight:2}}>☆ Entrega</li>
                    <li style={{lineHeight:2}}>☆ Despachos al interior</li>
                    <li style={{lineHeight:2}}>☆ Fabricación de productos especiales según plano</li>
                    <li style={{lineHeight:2}}>☆ Amplio stock</li>
                    <li style={{lineHeight:2}}>☆ Conversión de bandas material 3M en 24 horas</li>
                    <li style={{lineHeight:2}}>☆ Prueba de productos en su empresa sin cargo</li>
                    <li style={{lineHeight:2}}>☆ Desarrollo de sistemas de pulido acorde a su necesidad de trabajo</li>
                    <li style={{lineHeight:2}}>☆ Asesoramiento sobre criterios de máxima producción a menor costo</li>
                    <li style={{lineHeight:2}}>☆ Conversión de Bandas</li>
                    <li className="mt-4"><b>Y MÁS DE 3.000 PRODUCTOS EN STOCK PERMANENTE</b></li>
                </ul>
            </div>
            <div className="basis-2/4">
                <Image 
                  src={lijador.src}
                  className='img-responsive mt-10'
                  alt='afiche empresa'
                  width={800}
                  height={600}
                />
            </div>
        </section>
    )
}