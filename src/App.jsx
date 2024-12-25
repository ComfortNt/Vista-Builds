import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Header } from "./Components/Header";



function App() {
  

  return (

    <Router>
        <Header/>
        <Routes>
            <Route element={<Home/>} path="/"/>
        </Routes>
    </Router>
  )
}

export default App
