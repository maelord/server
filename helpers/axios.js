const axios = require('axios')

const instance = axios.create({
    baseURL: `https://superheroapi.com/api/${process.env.API_TOKEN}`
});

module.exports = instance