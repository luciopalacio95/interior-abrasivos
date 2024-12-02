'use client'

import { useState } from "react";


export default function Contacto() {

    const [sended, setSended] = useState(false);


    async function handleSubmit(event) {
        event.preventDefault();


        const formData = new FormData(event.target);
        const object = Object.fromEntries(formData);
        console.log(object);
        const to ="luciopalacio@hotmail.com";
        const subject = "nueva consulta"; 
        const text = object.consulta;
        const res = await fetch('/api/send-email', { method: 'POST', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify({ to, subject, text }), }); 
        const data = await res.json(); 
        if (data.error) { console.error(data.error); } 
        else { console.log('Correo enviado:', data.message); }
    }


    return(
        <section className="w-full flex flex-row mt-48 px-28">
            <div className="basis-3/5">
                <h1 className="text-start text-4xl text-gray-500">Contáctenos</h1>
                <p className="text-stone-900 text-xl font-bold mt-12 pr-10">CASA CENTRAL</p>
                <p className="text-stone-900 text-xl font-semibold pr-10">Córdoba</p>
                <p className="text-stone-900 text-xl mt-8 pr-10">
                    <b>Dirección:</b> Juan Manuel Fangio 8299<br></br>
                    X5147 - Córdoba - Argentina
                    <br></br><br></br>
                    <b>Teléfono:</b> 0351 15-366-8600
                    <br></br><br></br>
                    <b>E-mail:</b><br></br>
                    <a className="text-indigo-600" href="mailto:mailito@mailexample.com">mailito@mailexample.com</a> <br></br>
                    <a className="text-indigo-600" href="mailto:mailito2@mailexample.com">mailito2@mailexample.com</a> <br></br>
                    <a className="text-indigo-600" href="mailto:mailito3@mailexample.com">mailito3@mailexample.com</a>
                    <br></br><br></br>
                    <b>WhatsApp:</b> <a className="text-indigo-600" href="https://wa.me/351153668600" target="_blank">0351 15-366-8600</a> (Sólo WhatsApp, no se atienden llamadas)
                </p>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13632.694234551778!2d-64.264581!3d-31.3265796!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329d5ffedba113%3A0x78c996de45ecacb9!2sAbrasivos%20R.interior!5e0!3m2!1ses!2sar!4v1731701649821!5m2!1ses!2sar" 
                    className="mt-8"
                    width="600" 
                    height="450" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">    
                </iframe>
            </div>
            <div className="basis-2/5">
                <form className="mt-10 bg-slate-100 p-10" onSubmit={handleSubmit}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="border-b border-gray-900/10 pb-4 text-lg/7 font-semibold text-gray-900">Consultas</h2>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-6">
                                <label htmlFor="nombre" className="block text-base/6 font-medium text-gray-900">Nombre</label>
                                <div className="mt-2">
                                    <input type="text"
                                        name="nombre"
                                        required
                                        disabled={sended ? true : false}
                                        id="nombre"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label htmlFor="telefono" className="block text-base/6 font-medium text-gray-900">Teléfono</label>
                                <div className="mt-2">
                                    <input 
                                        type="number"
                                        required
                                        disabled={sended ? true : false}
                                        name="telefono"
                                        min="0"
                                        id="telefono" 
                                        autoComplete="phone" 
                                        className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label htmlFor="email" className="block text-base/6 font-medium text-gray-900">E-mail</label>
                                <div className="mt-2">
                                    <input 
                                        id="email" 
                                        name="email" 
                                        type="email"
                                        disabled={sended ? true : false}
                                        required
                                        autoComplete="email" 
                                        className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="email" className="block text-base/6 font-medium text-gray-900">Consulta</label>
                                <div className="mt-2">
                                    <textarea 
                                        id="consulta" 
                                        name="consulta" 
                                        required
                                        autoComplete="consulta"
                                        disabled={sended ? true : false}
                                        className="block w-full resize-none h-28 pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="mt-6 flex items-center flex-col justify-end gap-x-6">
                        {sended ?
                            <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                                <div class="flex">
                                <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                                <div>
                                    <p class="font-bold">¡Gracias por contactar con nosotros!</p>
                                    <p class="text-sm">Nos pondremos en contacto contigo muy pronto.</p>
                                </div>
                                </div>
                            </div>
                            :
                            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
                        }
                    </div>
                </form>
            </div>
        </section>
    )
}