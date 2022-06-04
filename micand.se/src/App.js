import Routing from "./router/Routing";
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer'
import './utils/styles/css/Global.css'

function App() {
    return (
        <>
            <Routing>
                <Navbar/>
            </Routing>
            <Footer/>
        </>
    );
}

export default App;
