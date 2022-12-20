import React from 'react'

function Paciente() {
  return (
    <div className=" bg-gray-200 mx-4 my-4 shadow-md px-5 py-6 rounded-md">
        <p className=" font-bold text-gray-700 uppercase">Nombre:
            {' '}
        <span className=" font-normal normal-case">Dominga</span>  
        </p>
        <p className=" font-bold text-gray-700 uppercase"> Nombre papá/mamá:
            {' '}
            <span className=" font-normal normal-case">Juanita</span>  
        </p>
        <p className=" font-bold text-gray-700 uppercase">Email:
            {' '}
            <span className=" font-normal normal-case">nombre@correo.cl</span>  
        </p>
        <p className=" font-bold text-gray-700 uppercase"> fecha de alta:
            {' '}
            <span className=" font-normal normal-case">12/12/22</span>  
        </p>
        <p className=" font-bold text-gray-700 uppercase">Sintomas:
            {' '}
            <span className=" font-normal normal-case">Lo rem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor voluptatibus aliquid nisi. Vero eligendi dolores illum incidunt libero, blanditiis nihil nisi cum aspernatur reiciendis modi rem nostrum ducimus id!</span>  
        </p>
    </div>
  )
}

export default Paciente


