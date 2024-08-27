import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const fetchDataC = async () => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_CUSTOMER_URL,
      {
        // Body content for the POST request (if required)
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(`${process.env.NEXT_PUBLIC_API_USERNAME}:${process.env.NEXT_PUBLIC_API_PASSWORD}`), 
        },
      }
    );
    return response.data; 
  } catch (error) {
    console.error('Error fetching data:', error);
    return {}; 
  }
};
