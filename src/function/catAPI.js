import axios from 'axios';

const fetchCatBreeds = () => {
    const breedUrl = 'https://api.thecatapi.com/v1/breeds';

    return axios({
        url: breedUrl,
        method: 'GET'
    });
};
export default fetchCatBreeds;