import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";



function App() {
  

  return (

    <Router>
        <Header/>
        <Routes>
            <Route element={<Home/>} path="/"/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App
