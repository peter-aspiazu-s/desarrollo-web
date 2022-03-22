import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../action/form";
import { useForm } from "../hooks/useForm";
import { Footer } from "./Footer";
import { WhatsApp } from "./WhatsApp";
import validator from 'validator';
import { orderByData, startRegisterWithData } from "../action/contact";
import 'animate.css'

export const Contact = () => {

    const { loading } = useSelector( state => state.form );
    const {msgError} = useSelector(state => state.form);
    
    const dispatch = useDispatch();
    
    const [ formValues, handleInputChange, reset ] = useForm({
        nombre: '',
        email: '',
        mensaje: '',
        telefono: '',
        date: new Date()
    });

    const { nombre, email, mensaje, telefono } = formValues;
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(isFormValid()){ 

            dispatch(removeError());
            dispatch(startRegisterWithData(formValues));
            setTimeout(() => {
                reset();
            }, 1000);
            dispatch(orderByData());
            
        }
    }

    const isFormValid = () => {
        if(nombre.trim().length === 0){
            dispatch( setError('El nombre es requerido') )
            return false;
        } else if(!validator.isEmail(email)){
            dispatch( setError('El correo es incorrecto') )
            return false;
        } else if(mensaje.length < 10){
            dispatch( setError('El mensaje es requerido y debe tener 10 o más caracteres') )
            return false;
        } else if(telefono){
            if(Number(telefono) && telefono.length >= 10){
                return true;
            } else {
                dispatch( setError('Debe ser numero y la longitud mayor o igual a 10') )
                return false;
            }
        }
        return true;
    }

    return (
        <>
        <div className="container-contacto animate__animated animate__fadeIn">
            <h1>Contacto</h1>
            <form onSubmit={ handleSubmit }>

                {
                    msgError &&
                    (
                        <div className="msg-error">
                            {msgError}
                        </div>
                    )
                }

                <label htmlFor="nombre">Nombre* :</label>
                <input 
                    type="text"
                    autoComplete="off" 
                    id="nombre" 
                    name="nombre" 
                    placeholder="Peter Aspiazu..."
                    value={ nombre }
                    onChange={ handleInputChange }
                />

                <label htmlFor="email">Email* :</label>
                <input 
                    type="email" 
                    autoComplete="off"
                    id="email" 
                    name="email" 
                    placeholder="paspiazusabando@gmail.com" 
                    value={ email }
                    onChange={ handleInputChange }
                />

                <label htmlFor="phone">Telefono :</label>
                <input 
                    type="tel" 
                    autoComplete="off"
                    id="telefono" 
                    name="telefono" 
                    placeholder="593 967454468" 
                    value={ telefono }
                    onChange={ handleInputChange }
                />

                <label htmlFor="mensaje">Tu mensaje* :</label>
                <textarea 
                    id="mensaje" 
                    name="mensaje" 
                    placeholder="Escribeme tu mensaje"
                    value={ mensaje }
                    onChange={ handleInputChange }
                ></textarea>
                <input 
                    className="btn-input" 
                    type="submit" 
                    value="Enviar"
                    disabled={ loading }
                />
            </form>

        </div>
        <Footer />
        <WhatsApp />
        </>
    )
}