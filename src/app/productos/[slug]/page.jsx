'use client';
import Producto from "@/app/components/productos.jsx/producto";
import { categorias } from "@/app/constants";

export default function Page({params}) {

    // Función para encontrar un producto por su slug
    function findProductBySlug(slug) {
        return categorias.find(product => product.slug === slug);
    }
    const product = findProductBySlug(params.slug);
    
    return(
        <div className="mt-40 items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
            <Producto producto={product} />
        </div>
    )
}