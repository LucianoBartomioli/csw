import Layout from '../components/layout'
import Presentacion from '../components/Presentacion'
import CardTemas from '../components/CardTemas'



export default function Home() {
  return (
    <Layout
      title="Home"  
        >
        <div class="container flex">
          <Presentacion>
           
            
          </Presentacion>
          <div className='flex w-max h-max'>
          
            <CardTemas
              numero={"1"}
              nombreLogo={"react_inicio.png"}
              tema={"react"}
              descripcion={""}
            />

            <CardTemas
              numero={"2"}
              nombreLogo={"api_1.jpg"}
              tema={"apis"}
              descripcion={""}
            />

            <CardTemas
              numero={"3"}
              nombreLogo={"next_1.webp"}
              tema={"next"}
              descripcion={""}
            />

<CardTemas
              numero={"+"}
              nombreLogo={"ejemplos_logo.jpg"}
              tema={"Ejemplos"}
              descripcion={""}
            />
            </div>

          </div>
    </Layout>
  )
}
