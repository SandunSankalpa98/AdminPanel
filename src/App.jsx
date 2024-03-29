import Expenses from "./Components/NavBar/Expenses/Expenses";
import Navbar from "./Components/NavBar/Navbar";

export default function App() {
  return (
    <>
        <div className="flex h-screen">
            
            <Navbar/>
            <Expenses/>
                         
            
        </div> 
    </>
  )
}