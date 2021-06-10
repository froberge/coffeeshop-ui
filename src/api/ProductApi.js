import axios from 'axios';
import configData from "../config.json";

function createData(name, size, price ) {
    return { name, size, price };
}
  
const emptyRows = [
createData('', '', ''),
]; 

const rows = [
    createData('Latte', 'Small', '4.00'),
    createData('Latte', 'Large', '4.75'),
];

export const getProductList = async() => {
    const baseUrl = configData.PRODUCT_SERVICE_BASE_URL

    try {
        // Check if the service is up
        console.log(baseUrl);
        const res = await axios.get( baseUrl + "/health" );

        if ( res.status === 200 ) {
            const productList = await axios.get( baseUrl ) 
            return productList.data
        } else {
            return emptyRows
        }

        return res
    } catch (error) {
        console.log( "SERVICE IS NOT REACHEABLE" )
        return emptyRows
    }
}