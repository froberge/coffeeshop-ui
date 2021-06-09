import axios from 'axios';

const url = 'http://authentication-service-git-froberge-dev.apps.sandbox.x8i5.p1.openshiftapps.com/authenticate/';

export const authenticate = async(email, password) => {
    try {
        return await axios.post( url, {
            email: email,
            password: password
        } )
    } catch (error) {
      console.error(error)
    }
}