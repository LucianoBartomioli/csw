import React, { Children } from 'react'
import Image from 'next/image'

function DiapositivaInversa({pregunta, descripcion, nombreImagen, children}) {
  return (
    <div className=' shadow-md flex items-center bg-orange-200 m-10 rounded-3xl p-5 flex-row-reverse hover:translate-x-2 hover:orange-100  transition-all'>
       <div className='w-2/5 px-3'>
        <Image className="rounded-xl px-5" width={400} height={400} src={"/img/" + nombreImagen}/>  
      </div>
      <div className='flex flex-col w-3/5'>
        <h2 className="text-6xl font-black text-center">{pregunta}</h2>
        <p className='m-4 text-2xl'>{descripcion}</p>
       

      
        {children}

        
      </div>
      
    </div>
  )
}

export default DiapositivaInversa
