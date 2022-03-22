import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";

export const startRegisterWithData = (formValues) => {
    return async(dispatch) => {
        const { email } = formValues;
        const doc = await db.collection(`peter-aspiazu/contactos/data`).add(formValues);
        Swal.fire('Enviado', email, 'success');
    }
};

export const orderByData = () => {
    return async(dispatch) => {
        const doc = db.collection(`peter-aspiazu/contactos/data`).orderBy('date', 'asc');
    }
}