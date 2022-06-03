import Routing from "./router/Routing";
import Navbar from "./components/navbar/Navbar";
import './utils/styles/css/Global.css'

function App() {
    return (
        <>
          <Routing>
              <Navbar/>
          </Routing>
        </>
    );
}

export default App;
