require('dotenv').config();
//const GET_URL = process.env.REACT_APP_GET_URL;
//console.log(GET_URL);
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://72.66.106.55:1880/LBB";

export class GPSApi {
    getData() {
        try {
            var data = fetch(proxyurl + url)
            .then(response => response.json())
            .then(res => {
                //console.log("Pased JSON " + JSON.parse(res));
                //return JSON.parse(res);
                return res;
            }, 
            err => {
                console.log(err);
                throw err;
            });
        } catch(error){
            console.warn(error);
        }
        return data;
    }
}

export default GPSApi;