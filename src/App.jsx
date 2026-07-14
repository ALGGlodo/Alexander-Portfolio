import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Works from './components/works'
import Skills from './components/skills'
import Contact from './components/contact'

function App() {    
    return(
        <div className="app">
            <Navbar />
            <Hero />
            <About />
            <Works />
            <Skills />
            <Contact />
        </div>
    )
}

export default App