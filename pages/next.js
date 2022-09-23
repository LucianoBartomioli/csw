import React from 'react'
import Layout from '../components/Layout'
import Diapositiva from '../components/Diapositiva'
import DiapositivaInversa from '../components/DiapositivaInversa'

const next = () => {
  return (
    <>
    <Layout
        title={"Next"}
    >
        <Diapositiva
        pregunta={"¿Qué es Next.js?"}
        descripcion={"Next es un framework de JavaScript que utiliza las librerias de React que nos permite crear sitios web. A diferencia de React, next es una mejor opcion para webs que tienen mas de una pagina y varios componentes."}
        nombreImagen={"next_1.webp"}
        >
        </Diapositiva>

        <DiapositivaInversa
        pregunta={"¿Cómo se instala Next.js?"}
        descripcion={"Next se puede instalar por consola a travéz del gestor de paquetes NPM o YARM. El comando es: npm create next-app. Una vez ejecutado, nos pedirá el nombre de nuestro proyecto"}
        nombreImagen={"nextjs_2.svg"}
        >
        </DiapositivaInversa>

        <Diapositiva
        pregunta={"¿Cómo es la estructura de Next.js?"}
        descripcion={"Una vez creada la app, next generara una serie de carpetas principales(page, public y styles). A continuación vamos a ver como es la estructura dentro de un proyecto"}
        nombreImagen={"next_3.jpg"}
        >
        </Diapositiva>


        


    </Layout>
    </>
    
  )
}

export default next;
