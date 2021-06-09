import axios from 'axios';
import configData from "../config.json";

export const authenticate = async(email, password) => {
    try {
        return await axios.post( configData.AUTHENTICATE_SERVICE_URL, {
            email: email,
            password: password
        } )
    } catch (error) {
      console.error(error)
    }
}