import { Link } from "react-router-dom"
import { SocialNetwork } from "./SocialNetwork";

export const NavBar = () => {

    let nav;
    let navLink;


    const handleClickInicio = () => {
        const navInicio = navLink.textContent == 'Inicio';

        if(navInicio){
            nav.children[0].classList.add('nav-active');
            nav.children[1].classList.remove('nav-active');
            nav.children[2].classList.remove('nav-active');
        }
    }

    const handleClickProyectos = () =>{
        const navProyectos = navLink.textContent == 'Proyectos';

        if (navProyectos){
            nav.children[1].classList.add('nav-active');
            nav.children[0].classList.remove('nav-active');
            nav.children[2].classList.remove('nav-active');
        }
    } 

    const handleClickContacto = () => {
        const navContacto = navLink.textContent == 'Contacto';

        if (navContacto){
            nav.children[2].classList.add('nav-active');
            nav.children[0].classList.remove('nav-active');
            nav.children[1].classList.remove('nav-active');
        }
    }

    return (
        <>
        <span 
            className="btn-menu"
            onClick={ () => {
                nav = document.querySelector('.nav');
                nav.classList.toggle('nav-hidden');
            }}
            >
                <i className="fas fa-bars"></i>
        </span>

        <nav className="nav nav-hidden"> 
            
            <Link 
                className="inicio nav-link nav-active" to="/desarrollo-web/" 
                onClick={ () => {
                    nav = document.querySelector('.nav');
                    nav.classList.toggle('nav-hidden');
                    navLink = document.querySelector('.inicio');
                    
                    handleClickInicio();
                }}
            >
                Inicio
            </Link>
            <Link 
                className="proyectos nav-link" to="/desarrollo-web/proyectos"
                onClick={ () => {
                    nav = document.querySelector('.nav');
                    nav.classList.toggle('nav-hidden');
                    navLink = document.querySelector('.proyectos');
                    
                    handleClickProyectos()
                }}
            >
                Proyectos
            </Link>
            <Link 
                className="contacto nav-link" to="/desarrollo-web/contacto" 
                onClick={ () => {
                    nav = document.querySelector('.nav');
                    nav.classList.toggle('nav-hidden');
                    navLink = document.querySelector('.contacto');
                    
                    handleClickContacto()
                }}
            >
                Contacto
            </Link>
            
            <SocialNetwork />
        </nav>
        </>
    )
}