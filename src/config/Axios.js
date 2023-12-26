import  axios from 'axios';


// Lorsque le serveur sera mis en place, nous utliserons ceci pour faire les requêtes

const fetchPexels = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // headers: {
    //     'Authorization': client,
    // },
});

export const fetchingData = async () => {
    try{
        const response = await fetchPexels.get('/albums/1/photos');
        const data = response.data;
        console.log("/////////////////");
        console.log("[FETCH]data fetch");
        console.log("/////////////////");
        return data;
    }
    catch(message){
        console.log(message);
        return message;
    }
    r
}


