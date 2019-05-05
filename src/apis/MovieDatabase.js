import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: { 
        api_key: '0fb2b25309dc0a3166c545550b090cd3',
        language: 'en-US',
        region: 'us'
    }
});