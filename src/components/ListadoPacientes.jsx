import React from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ()=> {

    return(
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll mt-5">
            <h1 className="font-black text-2xl text-center"> Listado pacientes</h1>
            <p className=" text-md text-center font-bold ">Administra tus {' '}  
            <span className=" text-indigo-600">Pacientes</span>
            </p>
            <Paciente/>
            <Paciente/>
            <Paciente/>
            <Paciente/>
        </div>

    )
}

export default ListadoPacientes;