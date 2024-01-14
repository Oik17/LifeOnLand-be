const axios = require('axios');


const apiKey = process.env.API_KEY;
const keyword = 'wildlife'; // Replace with your desired keyword

async function getNews(req, res) {
    try {


    const options = {
    method: 'GET',
    url: 'https://newsapi.org/v2/everything',
    params: {
        apiKey,
        q: keyword, // Specify the keyword
        language: 'en', // Language preference (optional)
    },
    };

    axios.request(options)
    .then(response => {
        console.log(response.data.articles);
    })
    .catch(error => {
        console.error(error);
    });
    res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = getNews;
