import axios from 'axios';

const fetchCatBreeds = () => {
    const breedUrl = 'https://api.thecatapi.com/v1/breeds';

    return axios({
        url: breedUrl,
        method: 'GET'
    });
};

const fetchCatsByBreed = (breed_id, limit = 10, page = 1) => {
    const breedUrl = `https://api.thecatapi.com/v1/images/search?page=${page}&limit=${limit}&breed_id=${breed_id}`;

    return axios({
        url: breedUrl,
        method: 'GET'
    });
};

const fetchBreedInfo = (breed_id) => {
    const breedUrl = `https://api.thecatapi.com/v1/images/${breed_id}`;
    return axios({
        url: breedUrl,
        method: 'GET'
    });
};

export { fetchCatBreeds, fetchCatsByBreed, fetchBreedInfo };