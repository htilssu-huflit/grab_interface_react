import NavBar from "./component/NavBar.tsx";
import Main from "./component/Main.tsx";
import Footer from "./component/Footer.tsx";


function App() {

  return (
    <div className={"min-h-[100vh] text-center"}>
        <NavBar/>
        <Main/>
        <Footer/>

    </div>
  )
}

export default App
