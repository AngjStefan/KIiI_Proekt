import './App.css'
import CarsPage from "./ui/pages/CarsPage/CarsPage.jsx";
import HomePage from "./ui/pages/HomePage/HomePage.jsx";
import Layout from "./ui/components/layout/Layout/Layout.jsx";
import {BrowserRouter, Route, Routes} from "react-router";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="cars" element={<CarsPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;


