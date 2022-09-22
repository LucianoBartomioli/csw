import Header from './Header'
import Head from 'next/head'
import Footer from './Footer'

const Layout = ({children, title}) => {
  return (
    <>
    <div>
        <Head>
            <title>CSW - {title}</title> 
        </Head>

        <Header />

        
      {children}

      <Footer
      ></Footer>
    </div>
    </>
  )
}

export default Layout;
