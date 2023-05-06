import axios from 'axios';


// const API_BASE_URL = `http://ec2-3-27-72-83.ap-southeast-2.compute.amazonaws.com/api`;
const API_BASE_URL = `http://localhost:3333/api`;


export default class Api {

    static user = {
        addUser: (payload) => axios.post(`${API_BASE_URL}/auth/signup`, payload ),
        login:(payload) => axios.post(`${API_BASE_URL}/auth/signin`, payload ),
        getUsers: (email) => axios.get(`/email=${email}`),
      };

      static cars = {
        getcars: () => axios.get(`/api/v1/vehicle`),
      };

      static street = {
        getstreets: () => axios.get(`/api/v1/street`),
      };

      static city = {
        getcities: () => axios.get(`/api/v1/city`),
      };

      static cost = {
        getTripCost: () => axios.get('/api/v1/trip-cost')
      }

      static booking = {
        makeBooking: (payload) => axios.post('/api/v1/booking', payload)
      }
    }