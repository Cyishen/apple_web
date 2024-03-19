import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

function App() {

  return (
    <main className="">
      <Navbar />
      <Hero />
      <Highlights />
      <div className='hidden sm:block'>
        <Model />
      </div>
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default App
