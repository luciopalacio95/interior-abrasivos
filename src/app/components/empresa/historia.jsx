import Image from "next/image";
import afiche from '../../../images/afiche.jpg';

export default function Historia() {
    return(
        <section className="flex flex-row mt-48 px-28">
            <div className="basis-3/4">
                <h1 className="text-start text-4xl text-stone-900">Empresa</h1>
                <p className="text-stone-900 text-xl mt-8 pr-10">
                <b>R INTERIOR ABRASIVOS</b>, Industria Argentina de Elaboración de Piedras Esmeriles, es una empresa familiar fundada en el año 1948. En sus inicios la base de nuestra industria fue la fabricación de puntas montadas y ruedas de interior, especializándonos en trabajos sobre plano, en diferentes calidades y formatos.
                <br></br><br></br>
Con el transcurso del tiempo, a fin de satisfacer a un mercado cada vez más exigente y de brindar al cliente una solución total en cuanto a abrasivos se refiere, se incorporaron maquinarias y tecnología para la elaboración de productos tales como: limas abrasivas, copas rectas y cónicas, lijas montadas, discos de lija, ruedas y rodillos flap, copas de lija, conversión de bandas de lija, etc.
<br></br><br></br>
Siempre a la búsqueda de un mejor servicio complementamos los productos IAEPE con la distribución de las marcas 3M, Carborundum, Tyrolit, Abrasivos Argentinos, con el objetivo de que el cliente pueda encontrar en un solo lugar todas las alternativas en abrasivos.
<br></br><br></br>
En el año 2003, IAEPE instaló en la ciudad de Mendoza, un centro de comercialización con el objetivo de acortar tiempos de entrega en el interior de nuestro país.
<br></br><br></br>
Avalados por décadas de experiencia y un importante servicio técnico ampliamente capacitado, IAEPE brinda la mejor solución, en el menor tiempo posible, asesorando al cliente a efectos de que pueda lograr los mejores resultados en la terminación de sus trabajos evitando tiempo y esfuerzos improductivos.
                </p>
            </div>
            <div className="basis-1/4">
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