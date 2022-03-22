import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Contact } from "./Contact"
import { Home } from "./Home"
import { NavBar } from "./NavBar"
import { Projects } from "./Projects"

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);

    useEffect(() => {

        setChecking(false);
        
    }, [dispatch])
   

    if( checking ){
        return (
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }

    return (
        <BrowserRouter>

            <NavBar />

            <Routes>
                <Route path="/desarrollo-web/proyectos" element={ <Projects /> } />
                <Route path="/desarrollo-web/contacto" element={ <Contact /> } />
                <Route path="/desarrollo-web/" element={ <Home /> } />

                <Route path="*" element={ <Home /> } />
            </Routes>
        </BrowserRouter>
    )
}