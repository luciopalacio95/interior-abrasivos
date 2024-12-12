'use client';
import SubProducto from "@/app/components/productos/subProducto";
import { categorias } from "@/app/constants";

export default function Page({params}) {
    // Función para encontrar un producto por su subcategory
    function findProductBySlug(slug) {
        const cat =  categorias.find(product => product.slug === slug);
        if(cat.hasSub === true){
            const subCat = cat.subcategorias.find(product => product.slug === params.subcategory);
            return {"principal": cat, "secundario": subCat};
        }else{
            return false
        };
 
    }
    const product = findProductBySlug(params.category);
    
    return(
        <div className="mt-40 items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
            <SubProducto producto={product.principal} subProducto={product.secundario} />
        </div>
    )
}