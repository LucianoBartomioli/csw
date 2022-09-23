import React from 'react'
import Link from "next/link"
import Layout from '../components/Layout'
import Diapositiva from '../components/Diapositiva'
import DiapositivaInversa from '../components/DiapositivaInversa'

const react = () => {
  return (
    <>
    <Layout
        title="React"
        >
        <Diapositiva
        pregunta={"¿Qué es react?"}
        descripcion={"React es una librería de código abierto que se utiliza principalmente para construir interfaces."}
        nombreImagen={"react_inicio.png"}
        >
        </Diapositiva>
        <DiapositivaInversa
        pregunta={"¿Cómo funciona React?"}
        descripcion={"Lo que hace React es, a través de este código JSX, crear una representación en memoria del DOM; denominada “Virtual DOM”, a partir de la cual luego crea el DOM definitivo en el navegador. Este “Virtual DOM”, a diferencia del DOM común, pesa muy poco y utiliza escasos recursos para ser creado. Así que, en caso de que un componente cambiase su estado, y con ello la información a renderizar, React compararía los cambios realizados en el Virtual DOM, vería qué elemento o elementos han cambiado, y actualizaría solo esas partes en el DOM real. Al tratarse solo y exclusivamente de código JavaScript, el compilado y renderizado de todos estos cambios se realiza rápidamente."}
        nombreImagen={"react_inicio_2.png"}
        >
        </DiapositivaInversa>

        <Diapositiva
        pregunta={"¿Cómo se instala React?"}
        descripcion={"Para poder instalar react necesitamos instalar el entorno Node.js y con ello vendra el gestor de paquetes NPM. Una vez instalado node, ya podremos crear nuestro proyecto. Debemos escojer una herramienta para crear nuestro proyecto, como pueden ser create-react-app, next.js, vite entre otros."}
        nombreImagen={"node_1.png"}
        >

        </Diapositiva>

        <DiapositivaInversa
        pregunta={"¿Cómo es la estructura de react?"}
        descripcion={"Dentro de un proyecto de react, independientemente de la herramienta que hayamos utilizado para crearlo, contendra los siguientes archivos y estara ordenado de la siguiente manera... (Proyecto creaado en Vite)"}
        nombreImagen={"react_inicio.png"}
        >
            
            <div className='flex justify-center'>
                <a href='https://github.com/LucianoBartomioli/citas-react'
                    
                > 
                    <button className="bg-cyan-700 m-3 p-3 text-xl rounded-md text-white font-bold" >Código</button></a>
                    <a href='https://632c563e33c5aa1d232e2149--helpful-gelato-d12416.netlify.app/'
                    
                > 
                    <button className="m-3 bg-indigo-700 p-3 text-xl rounded-md text-white font-bold" >Página</button></a>
            </div>

        </DiapositivaInversa>
        

    </Layout>
    </>
  )
}

export default react;
