import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-506b1-default-rtdb.firebaseio.com/',
});

export default instance;
