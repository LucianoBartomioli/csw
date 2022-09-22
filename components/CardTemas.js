import Image from 'next/image'
import Link from 'next/link'


const CardTemas = ({tema, nombreLogo, numero, descripcion}) => {
  return (
    <Link href={"/"+tema}>
    <div className="justify-center">
        <div className='flex flex-col text-center m-5 items-center bg-gray-300 p-5 rounded-md ml-4 mr-1 shadow-md'>

        <h2 className='font-bold text-4xl text-zinc-800 p-2'>{numero}</h2>
        <Image className="rounded-xl px-5" alt="1" layout={"fixed"} width={200} height={200} src={"/img/" + nombreLogo}/>
        <p className="text-3xl font-extrabold uppercase p-2">{tema}</p>
        <p>{descripcion}</p>
        </div>
    </div>
    </Link>
  )
}

export default CardTemas
