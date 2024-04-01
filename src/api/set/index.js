import axios from 'axios';
import { BASE_URL } from '../const';

export const addTodo = async (data) => {
  const response = await axios.post(`${BASE_URL}/todo`, data);
  return response;
};
