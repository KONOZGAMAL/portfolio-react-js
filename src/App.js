import {React , useState , useEffect} from 'react'
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import PreLoader from './Components/PreLoader/PreLoader'
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/contact/Contact';
import Pagenotfound from './Pages/Pagenotfound';
import { Route, Routes } from "react-router";
function App() {
  const [loading , setLoading]= useState(false)
  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])
  return (
    <div className="App">
      {
        loading?
        <PreLoader load={loading}/>:
        <div>
        <Header/>
           <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} /> 
          <Route path="*" element={<Pagenotfound/>} /> 
       </Routes>
        </div>
  }
    </div>
  );
}
export default App;