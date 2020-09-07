import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID CLd2VLBqBTqxqccQQpvlE9XgKYZ4nJkQMYMqbaMwIz8'
      }
})