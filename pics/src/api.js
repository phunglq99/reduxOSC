import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos' , {
        headers: {
            Authorization: "Client-ID HwifZitpbKRqzP_25Rg9s3l4X7VbW1X2uExexYyCTek",
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;