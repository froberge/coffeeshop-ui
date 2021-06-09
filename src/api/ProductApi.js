import axios from 'axios';

const url = 'http://authentication-service-git-froberge-dev.apps.sandbox.x8i5.p1.openshiftapps.com/authenticate/product';

export const authenticate = async() => {
    try {
        return await axios.get( url )
    } catch (error) {
      console.error(error)
    }
}