import axios from 'axios';

export const authenticate = async(email, password) => {
    console.log( "url " + process.env.REACT_APP_AUTHENTICATE_SERVICE )

    try {
        return await axios.post( process.env.REACT_APP_AUTHENTICATE_SERVICE, {
            email: email,
            password: password
        } )
    } catch (error) {
      console.error(error)
    }
}