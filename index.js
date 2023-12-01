// Load environment variables from a .env file.
require('dotenv').config();

// Import the Axios library for making HTTP requests.
const axios = require('axios');

// Create an Axios client for Unsplash API with default settings.
const unsplashClient = axios.create({
    // Set the base URL for all requests to the Unsplash API.
    baseURL: 'https://api.unsplash.com',
    // Set the headers for all requests, including the Authorization header
    // with the access token from environment variables.
    headers:{
        Authorization: `Client-ID ${process.env.ACCESS_TOKEN}`
    }
}); 

// Define an asynchronous function to get a random picture from Unsplash.
async function getRandomPicture(){
    try{
        // Make a GET request to the '/photos/random' endpoint of Unsplash API.
        // Await the response and store it in 'response'.
        const response = await unsplashClient.get('/photos/random');
        // Return the data part of the response which contains the picture details.
        return response.data;      

    }catch(error){
        // If an error occurs during the request, log the error response.
        console.error(error.response);
    }
}

// Immediately-invoked function expression (IIFE) to execute the code.
(async()=>{
    // Call the 'getRandomPicture' function and await its result.
    const photo = await getRandomPicture();
    // Log the received photo object to the console.
    console.log(photo);

})()
