import { AppSlider } from "./AppSlider"
import { Footer } from "./Footer"
import { WhatsApp } from "./WhatsApp"

export const Projects = () => {
    return(
        <>
            <div className="container-proyectos">
                <h1>Proyectos</h1>
                <AppSlider />
            </div>
            <Footer />
            <WhatsApp />
        </>
    )
}