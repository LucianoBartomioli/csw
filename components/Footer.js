import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-black absolute b-0 w-full flex'>
      <nav className="m-5 text-white flex">
            
                <div className='px-5 transition-all hover:text-orange-200 hover:-translate-y-1 '>
                <Link href="/">Inicio</Link>
                </div>
                <div className='px-5 transition-all hover:text-orange-200 hover:-translate-y-1 '>
                <Link href="/react">React</Link>
                </div>
                <div className='px-5 transition-all hover:text-orange-200 hover:-translate-y-1 '>
                <Link href="/apis">Apis</Link>
                </div>
                <div className='px-5 transition-all hover:text-orange-200 hover:-translate-y-1 '>
                <Link href="/next">Next</Link>
                </div>
                
  
            </nav>
            
    </footer>
  )
}

export default Footer
