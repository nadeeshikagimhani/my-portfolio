import { ReactLenis } from "lenis/react";

import Hero from '@/sections/Hero'
import Navbar from '@/layout/Navbar'
import About from '@/sections/About'
import Projects from '@/sections/Projects'
import Experience from '@/sections/Experience'
import Testimonials from '@/sections/Testimonials'
import Contact from '@/sections/Contact'
import Footer from './layout/Footer'

function App() {

  return (
    <ReactLenis root>
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />

      </main>
    </div>
    </ReactLenis>
  )
}

export default App
