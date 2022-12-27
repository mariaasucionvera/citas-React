import React, { useEffect } from "react";
import Paciente from "./Paciente";


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente} )=> {

    
    return(
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll mt-5">

            {pacientes && pacientes.length ? 
            
            <>

                <h1 className="font-black text-2xl text-center"> Listado pacientes</h1>
                <p className=" text-md text-center font-bold ">Administra tus {' '}  
                <span className=" text-indigo-600">Pacientes</span>
                </p>
            

                { pacientes.map((paciente) =>{

                    return (

                        <Paciente
                        key={paciente.id}
                        paciente = {paciente}
                        setPaciente = {setPaciente}
                        eliminarPaciente = {eliminarPaciente}
                        />
                    )

                })}  
            
            </> 
            : 
            <>
            
                <h1 className="font-black text-2xl text-center"> No hay pacientes </h1>
                <p className=" text-md text-center font-bold ">Comienza agregando tus pacientes y {' '}  
                <span className=" text-indigo-600">apareceran en este lugar </span>
                </p>
            
            </>}
           

            
            
        </div>

    )
}

export default ListadoPacientes;