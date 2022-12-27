import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, papaMama, email, fecha, sintomas, id} = paciente
    const handleEliminar = () => {
        const respuesta = confirm ("deseas eliminar este paciente?")

        if (respuesta) {
           
            eliminarPaciente(id)

        }
        
    }
    
  return (
    <div className=" bg-gray-200 mx-4 my-4 shadow-md px-5 py-6 rounded-md">
        <p className=" font-bold text-gray-700 uppercase">Nombre:
            {' '}
        <span className=" font-normal normal-case">{paciente.nombre} </span>  
        </p>
        <p className=" font-bold text-gray-700 uppercase"> Nombre papá/mamá:
            {' '}
            <span className=" font-normal normal-case">{paciente.papaMama} </span>  
        </p>
        <p className=" font-bold text-gray-700 uppercase">Email:
            {' '}
            <span className=" font-normal normal-case">{paciente.email} </span>  
        </p>
        <p className=" font-bold text-gray-700 uppercase"> fecha de alta:
            {' '}
            <span className=" font-normal normal-case">{paciente.fecha} </span>  
        </p>
        <p className=" font-bold text-gray-700 uppercase">Sintomas:
            {' '}
            <span className=" font-normal normal-case">{paciente.sintomas} </span>  
        </p>

        <div className= 'flex justify-between mx-3 mt-3'>

            <button type='button' 
            className=' py-2 px-10 bg-indigo-600 hover:bg-indigo-600 text-white font-bold uppercase rounded-md'
            onClick={()=> setPaciente(paciente)}
            > editar</button>
            
            <button type='button' 
            className=' py-2 px-10 bg-red-800 hover:bg-red-800 text-white font-bold uppercase rounded-md'
            onClick={handleEliminar}
            > eliminar</button>

        </div>

        
    </div>
  )
}

export default Paciente


