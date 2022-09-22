import React, { Children } from 'react'
import Image from 'next/image'

function Diapositiva({pregunta, descripcion, nombreImagen, children}) {
  return (
    <div className=' shadow-md flex bg-slate-200 m-10 rounded-3xl p-5 hover:translate-x-2 hover:bg-slate-100 transit'>
      <div className='w-2/5 px-3'>
      <Image className="rounded-xl px-5"  alt="1" width={300} height={300} src={"/img/" + nombreImagen}/>
      </div>
      <div className='flex flex-col w-3/5'>
        <h2 className="text-6xl font-black">{pregunta}</h2>
        <p className='m-4 text-2xl'>{descripcion}</p>
        {children}
        
      </div>
      
    </div>
  )
}

export default Diapositiva
