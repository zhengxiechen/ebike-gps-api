require('dotenv').config();
const GET_URL = process.env.REACT_APP_GET_URL;
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = proxyurl + GET_URL;

export class GPSApi {
    getData() {
        try {
            var data = fetch(url)
            .then(response => response.json())
            .then(res => {
                return res;
            }, 
            err => {
                console.log(err);
                throw err;
            });
        } catch(error){
            console.warn(error);
        }
        console.info(`Updated data.`);
        return data;
    }
}

export default GPSApi;