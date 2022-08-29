import './App.css';
import Footer from './component/Footer';
import Header from './component/Header'
import Home from './component/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './component/About';
import Trainers from './component/Trainers';
import Contact from './component/Contact';

function App() {
  return (
    <div className="app">
<BrowserRouter>

<Header/> 
<Routes>
<Route path="/" element={ <Home/>}/>
<Route path="/about" element={ <About/>}/>
<Route path="/trainers" element={ <Trainers/>}/>
<Route path="/contact" element={ <Contact/>}/>
      
       </Routes>
</BrowserRouter>

<Footer/>
     
    </div>
  );
}

export default App;
