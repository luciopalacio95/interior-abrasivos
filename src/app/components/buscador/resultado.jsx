'use client';
import { categorias } from "@/app/constants";
import Buscador from "../layouts/buscador";
import { useSearchParams } from 'next/navigation';

export default function ResultadoBuscar() {
    const searchParams = useSearchParams();
    const search = searchParams.get('query')?.toString();

    // Función para encontrar un producto
    function filterProduct(search) {
        let coincidencias = [];
        let myReg = new RegExp(search.toLowerCase() + ".*")

        categorias.filter(
            (cat) => {
                if((cat.name.toLowerCase()).match(myReg) || (cat.subTitle.toLowerCase()).match(myReg) || (cat.description.toLowerCase()).match(myReg)){
                    coincidencias.push(cat);
                }
                if(cat.hasSub === true){
                    cat.subcategorias.filter(
                        (subCat) => {
                            if((subCat.name.toLowerCase()).match(myReg) || (subCat.description.toLowerCase()).match(myReg)){
                                coincidencias.push(subCat);
                            }
                        }
                    );
                }
            }
        );
        return coincidencias;
    }
    const resultados = filterProduct(search);
    

    console.log(resultados);
    return(
        <section className="w-full flex flex-row mt-48 px-28">
            <div className="basis-3/4 pr-10">
                <h1 className="text-start text-4xl mb-6 text-gray-500">Resultados: {resultados.length ? resultados.length : 0}</h1>
                {!resultados.length ?
                    <p className="text-stone-900 text-lg">Lo sentimos, pero no se ha encontrado nada que coincida con tus términos de búsqueda. Vuelve a intentarlo con otras palabras clave.</p>
                :
                    resultados.map((result, index) => {
                        return(
                            <div key={index}>
                                <p className="text-stone-900 text-xl mt-4 mb-5">{result.name}</p>
                                {/* <div className="mt-1 mb-5 text-gray-500 text-lg h-14 overflow-hidden text-ellipsis" dangerouslySetInnerHTML={{ __html: result.description }}></div> */}
                                <a href={"/productos/"+result.slug} className="rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Ver</a>
                                <hr className="mt-5"></hr>
                            </div>
                        )
                    })
                }
            </div>
            <div className="basis-1/4">
                <Buscador query={search}/>
            </div>
        </section>
    )
}