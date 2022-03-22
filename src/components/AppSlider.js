import { useState } from "react"

export const AppSlider = () => {

    const images = [ 'BlackJack', 'Proyecto-Replica-D-Cuero-Shoes', 'Proyecto-Replica-D-Prati', 
                    'Gestor-de-tareas', 'react-gifexpertapp', 'Journal-App' ];

    const [ selectedIndex, setSelectedIndex ] = useState(0);

    const [ selectedImage, setSelectedImage ] = useState(images[0]);

    const [ loaded, setLoaded ] = useState(false);

    const selectNewImage = (index, images, next = true) => {

        setLoaded(false);

        setTimeout( () => {
            const condition = next ? selectedIndex < images.length -1 : selectedIndex > 0;
    
            const nextIndex = next ? condition ? selectedIndex + 1 : 0
                                : condition ? selectedIndex - 1 : images.length -1 ;
    
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
        }, 500);

    }

    const previous = () => {

        selectNewImage(selectedIndex, images, false);
    }

    const next = () => {

        selectNewImage(selectedIndex, images);
    }

    return (
        <div className="container-carrusel">
            <img 
                className={ loaded ? "carrusel-img loaded" : "carrusel-img" } 
                src={`./assets/img/${selectedImage}.jpg`} 
                alt="slide-proyectos" 
                onLoad={ () => setLoaded(true) }
            />
            <a 
                href={`https://peter-aspiazu-s.github.io/${ selectedImage }/`} 
                target="_blank"
            >
                Ir al proyecto
            </a>
            
            <i className="previous fas fa-arrow-alt-circle-left" onClick={previous}></i>
            <i className="next fas fa-arrow-alt-circle-right" onClick={next}></i>
        </div>
    )
}