import React from "react";
import { useState, useEffect } from "react";

const Formulario = ({setPacientes})=>{

    const [nombre, setNombre] = useState('');
    const [papaMama, setPapaMama] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();

        //Validación de formulario

        if([nombre, papaMama, email, fecha, sintomas].includes('')){ 
        setError(true)

        }else{
            setError(false)
        } 

        //Objeto paciente

        const objetoPaciente = {
            nombre, 
            papaMama,
            email,
            fecha,
            sintomas
            
        }

        console.log(objetoPaciente)

        setPacientes(nombre)
    }
    

    return(
        <div className="md:w-1/2 lg:w-2/5" >
            <h1 className="font-black text-2xl text-center">Formulario</h1>

            <p className="font-bold text-1xl text-center">
                Añade pacientes y {" "}
                <span className="text-bold tex-1xl text-center text-indigo-600">administralos</span>  
            </p>

            <form className=" bg-gray-200 shadow-md rounded-r-lg py-5 px-7 mt-4"   onSubmit={handleSubmit}>

            {error && (<div>
                <p className=" bg-red-700 text-white rounded-xl font-bold mb-3 py-3 text-center uppercase">
                    Todos los campos se deben completar
                </p>
            </div>)}
                <div className=" mt-5 ">
                    <label  htmlFor="mascota" className=" block text-gray-700 uppercase "> Nombre de la mascota </label>
                    <input id="mascota" type="text" className=" border-2 w-full mt-2 py-2 px-2 placeholder-gray-400 rounded-md"
                    placeholder="Nombre de la mascota " value={nombre} onChange={ (e)=> setNombre(e.target.value) }
                    />
                </div>

                <div className=" mt-5 ">
                    <label  htmlFor="papaMama" className=" block text-gray-700 uppercase "> Nombre Papá / Mamá </label>
                    <input id="papaMama" type="text" className=" border-2 w-full mt-2 py-2 px-2 placeholder-gray-400 rounded-md"
                    placeholder="Nombre Papá / Mamá" value={papaMama} onChange={ (e)=> setPapaMama(e.target.value) }
                    />
                </div>

                <div className=" mt-5 ">
                    <label  htmlFor="email" className=" block text-gray-700 uppercase "> Email </label>
                    <input id="email" type="text" className=" border-2 w-full mt-2 py-2 px-2 placeholder-gray-400 rounded-md"
                    placeholder="Email"  value={email} onChange={ (e)=> setEmail(e.target.value)}
                    />
                </div>

                <div className=" mt-5 ">
                    <label  htmlFor="fecha" className=" block text-gray-700 uppercase "> Fecha de alta </label>
                    <input id="fecha" type="date" className=" border-2 w-full mt-2 py-2 px-2 placeholder-gray-400 rounded-md"
                    placeholder="Fecha de alta"  value={fecha} onChange={ (e)=> setFecha(e.target.value)}
                    />
                </div>

                <div className=" mt-5 ">
                    <label  htmlFor="sintomas" className=" block text-gray-700 uppercase "> Sintomas </label>
                    <textarea id="sintomas" type="date" className=" border-2 w-full mt-2 py-2 px-2 placeholder-gray-400 rounded-md"
                    placeholder="Describa los sintomas"  value={sintomas} onChange={ (e)=> setSintomas(e.target.value)}
                    />
                </div>

                <input type="submit"
                className=" bg-indigo-600 w-full text-white border-2 rounded-md mt-2"
                />
                
               
            </form>
        </div>

    )
}

export default Formulario