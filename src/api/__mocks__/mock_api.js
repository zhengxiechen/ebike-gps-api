export class MockApi {
    constructor(){
        this.data = {
            "lng": "-76.936972",
            "lat": "38.990794",
            "alt": "12.830212",
            "cour": "course",
            "spd": "5.2",
            "vol": "5.012",
            "amp": "1.023"
        };
    }

    getData() {
        return this.data;
    }

}

export default MockApi;