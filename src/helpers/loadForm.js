import { db } from '../firebase/firebase-config';

export const loadForm = async ( uid ) => {
    const {docs} = await db.collection(`${uid}/contactos/data`).get();
    
    const form = [];
    docs.forEach( doc => {
        form.push({
            id: doc.data().email,
            ...doc.data()
        })
        
    })

    //console.log(form);
}
