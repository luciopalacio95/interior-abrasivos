'use client';
export default function Buscador(props){

    return (
        <form className="mt-10 bg-slate-100 p-10 w-96" role="search" method="get" action="/buscar" >
        <div className="space-y-12">
            <div>
            <h2 className="border-b border-gray-900/10 right-0 pb-4 text-lg/7 font-semibold text-gray-900">Buscador</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-6">
                    <div className="mt-2 flex">
                        <input type="search"
                            name="query"
                            required
                            id="query"
                            autoComplete="given-search"
                            placeholder="Buscar..."
                            defaultValue={props.query}
                            className="block w-full text-2xl border-none border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                        <button type="submit" className=" bg-white px-3 py-2 border-none text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </form>
    )
}