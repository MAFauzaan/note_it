import axios from "axios";

require('dotenv').config();

export const getNotes = () => {
   return axios.get(`${process.env.REACT_APP_BASE_URL}`)
}