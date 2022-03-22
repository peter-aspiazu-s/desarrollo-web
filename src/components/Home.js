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
                    <p>Hola que tal, tengo 25 años estudie una tecnologia en Redes de datos donde vimos muy poco de 
                        desarrollo web y bases de datos, pero me interese del tema y lo que hice fue por mi propia cuenta
                        aprender HTML5 y CSS3, y cositas de javascript cuando necesitaba algo como menu hamburguesa, carrusel
                        de imagenes y validacion basica de formulario del lado del front. Ahora se que se puede hacer mucho
                        más con Javascript. Tengo mas de 2 años de experiencia en maquetacion con CSS3. Hace aproximadamente 7 meses
                        empece a aprender Javascript y ahora React tecnología que aún no domino obviamente pero
                        se hacer unas cuantas cosas como CRUD, rutas protegidas, login y en la pagina de proyectos
                        pueden ver en que he trabajado, algunos son proyectos hechos por mi mismo sin una guía y otros son de los
                        que desarrollamos en cursos que he adquirido.
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