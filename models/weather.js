module.exports = class weather{
    // apiKey = "";
    constructor(apiKey){
        this.url = "https://www.meteosource.com/api/v1/free";
        this.apiKey = apiKey;
    }

    getPlace(place){
        let params = {
            text: place,
            key: this.apiKey
        };
        const queryString = new URLSearchParams(params).toString();
        const a = `${this.url}/find_places?${queryString}`;
        console.log(a);
        fetch(a, {
            method: 'GET',
        })
        .then(response => {
            if (!response.ok) {
                console.log("Error!");
                throw new Error('Error en la respuesta del servidor');// Lanza un error si la respuesta no es OK
            }
            return response.json();// Devuelve la promesa de la conversión a JSON
        })
        .then(data => {
            console.log('Data:  -> ', data);// Maneja los datos una vez que se han convertido a JSON
        })
        .catch(error => {
            console.error("Error en la solicitud:", error);// Manejo de errores
        });
    }
}


// weatherObj = new weather('APIKEY');
// weatherObj.getPlace('Tampico');