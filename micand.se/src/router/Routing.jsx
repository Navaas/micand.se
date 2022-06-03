import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutingPath from "./RoutingPath";
import AboutView from '../views/aboutView/AboutView'
import ContactView from '../views/contactView/ContactView'
import HomeView from '../views/homeView/HomeView'
import PortfolioView from '../views/portfolieView/PortfolieView'

const Routing = (props) => {
    return (
        <BrowserRouter>
            {props.children}
            <Routes>
                <Route path={RoutingPath.aboutView} element={<AboutView/>} />
                <Route path={RoutingPath.homeView} element={<HomeView/>} />
                <Route path={RoutingPath.portfolioView} element={<PortfolioView/>} />
                <Route path={RoutingPath.contactView} element={<ContactView/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing