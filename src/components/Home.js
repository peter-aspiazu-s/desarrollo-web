import { Footer } from "./Footer"
import { Skills } from "./Skills"
import { WhatsApp } from "./WhatsApp"
import 'animate.css'

export const Home = () => {
    return (
        <>
        
        <div className="container-home animate__animated animate__fadeIn">
            <h1>Bienvenido</h1>
            <div className="row-home">
                <div className="col1-home">
                    <img src="./assets/img/yo.jpg" alt="Imagen de Mi cara" />
                    <h3>Soy Peter Aspiazu</h3>
                </div>

                <div className="col2-home">
                    <p>Hola que tal, tengo 1 año desde que empece a aprender sobre desarrollo web y hasta ahora sigo aprendiendo
                        muchas cosas muy buenas e interesantes como lo son react y firebase, tengo conocimientos de HTML5,
                        CSS3, Javascript, SASS, Bootstrap, react y firebase. En este último año he aprendido sobre semantica,
                        diseños adaptables, el DOM, peticiones fetch, rutas con react y rutas protegidas, login y registros 
                        con firebase, tambien almacenar datos en firestore y subir mis proyectos a github con git y que se
                        muestren en github pages. Seguire aprendiendo y avanzando para poder conseguir mi primer
                        empleo como desarrollador.
                    </p>
                </div>
            </div>

            <hr />

            <Skills />

        </div>
            <Footer />

            <WhatsApp />
        </>
    )
}