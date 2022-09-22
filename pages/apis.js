import Layout from "../components/layout"
import Diapositiva from '../components/Diapositiva'
import DiapositivaInversa from '../components/DiapositivaInversa'

const apis = () => {
  return (
    <>
    <Layout title={"Apis"}>
        <Diapositiva
        pregunta={"¿Qué es una API?"}
        descripcion={"Las API son mecanismos que permiten a dos componentes de software comunicarse entre sí mediante un conjunto de definiciones y protocolos. API significa “interfaz de programación de aplicaciones”. En el contexto de las API, la palabra aplicación se refiere a cualquier software con una función distinta. La interfaz puede considerarse como un contrato de servicio entre dos aplicaciones. "}
        nombreImagen={"api_1.jpg"}
        >
        </Diapositiva>

        <DiapositivaInversa
        pregunta={"¿Cómo es la estructura de una API?"}
        descripcion={"Las APIS utilizan el JSON para poder transferir informacion. Los JSONs son archivos que almacenan informacion de una manera similar a un diccionario, poseen la estructura clave:valor, y se utilizan para transmitir los datos entre dos lenguajes distintos"}
        nombreImagen={"json.svg"}
        >

        </DiapositivaInversa>


        
    </Layout>
    </>
  )
}

export default apis;
