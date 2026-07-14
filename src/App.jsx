import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Works from './components/works'

function App() {    
    return(
        <div className="app">
            <Navbar />
            <Hero />
            <About />
            <Works />
        </div>
    )
}

export default App