import React from "react";

const Formulario = ()=>{

    return(
        <div className="w-1/2 lg:w-2/5" >
            <h1 className="font-black text-2xl text-center">Formulario</h1>

            <p className="font-bold text-1xl text-center">
                Añade pacientes y {" "}
                <span className="text-bold tex-1xl text-center text-indigo-600">administralos</span>  
            </p>

            <form className=" bg-gray-200 shadow-md rounded-r-lg py-5 px-7 mt-4">
                <div className=" mt-5 ">
                    <label  htmlFor="mascota" className=" block text-gray-700 uppercase "> Nombre de la mascota </label>
                    <input id="mascota" type="text" className=" border-2 w-full mt-2 py-2 px-2 placeholder-gray-400 rounded-md"
                    placeholder="Nombre de la mascota "
                    />
                </div>

                <div className=" mt-5 ">
                    <label  htmlFor="papaMama" className=" block text-gray-700 uppercase "> Nombre Papá / Mamá </label>
                    <input id="papaMama" type="text" className=" border-2 w-full mt-2 py-2 px-2 placeholder-gray-400 rounded-md"
                    placeholder="Nombre Papá / Mamá"
                    />
                </div>

                <div className=" mt-5 ">
                    <label  htmlFor="email" className=" block text-gray-700 uppercase "> Email </label>
                    <input id="email" type="text" className=" border-2 w-full mt-2 py-2 px-2 placeholder-gray-400 rounded-md"
                    placeholder="Email"
                    />
                </div>

                <div className=" mt-5 ">
                    <label  htmlFor="fecha" className=" block text-gray-700 uppercase "> Fecha de alta </label>
                    <input id="fecha" type="date" className=" border-2 w-full mt-2 py-2 px-2 placeholder-gray-400 rounded-md"
                    placeholder="Fecha de alta"
                    />
                </div>

                <div className=" mt-5 ">
                    <label  htmlFor="sintomas" className=" block text-gray-700 uppercase "> Sintomas </label>
                    <textarea id="sintomas" type="date" className=" border-2 w-full mt-2 py-2 px-2 placeholder-gray-400 rounded-md"
                    placeholder="Describa los sintomas"
                    />
                </div>
                
                
            </form>
        </div>

    )
}

export default Formulario