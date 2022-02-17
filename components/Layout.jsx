import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='container mx-auto sm:p-4 p-2'>{children}</main>
      <Footer />
    </>
  )
}