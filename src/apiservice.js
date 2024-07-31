import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com'; // Replace with the base URL from the Postman documentation

export const getSomeData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/your-endpoint`); // Adjust endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};