import firebase from '../utils/firebase';

const url = 'https://identitytoolkit.googleapis.com/v1/accounts';
const api_key = 'AIzaSyAz5n8HLp7m1f7uHhE_wPi5jwDsgB3ZhIA';

/** metodo de registro  */
export const nuevoUsuario = async (usuario) => {

    try {
        /** infromación que hay que mandar en la petición para registrar un usuario. */
        const authData = {
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
        };
        // mandar una petición post de toda la url seguido de la key junto el cuerpo que recibe la petición

        return await firebase.auth().createUserWithEmailAndPassword(authData.email, authData.password)
            .then((result) => {
                if (result.ok) {
                    result.json().then(
                        (obj) => {
                            alert(`Bienvenido ${obj.email} `)
                        }
                    )
                }
            })

        // return await fetch(`${url}:signUp?key=${api_key}`, {
        //     method: 'POST',
        //     body: JSON.stringify(authData)
        // }).then((result) => {
        //     if (result.ok) {
        //         result.json().then(
        //             (obj) => {
        //                 console.log(`Bienvenido ${obj.email} `)
        //             }
        //         )
        //     }
        // })
    } catch (error) {
        alert( error )
    }

}