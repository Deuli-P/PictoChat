import  axios from 'axios';
import { createClient } from 'pexels';



//const client = 'eNec3KnX89LiCVfuNH9hur03jzIWyNVJxGcQ4s1elLeTNg0CTjwkJAAu';

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
        console.log("[FETCH]data",data);
        console.log("/////////////////");
        return data;
    }
    catch(message){
        console.log(message);
        return message;
    }
    r
}


