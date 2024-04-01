import axios from "axios";
import { BASE_URL } from "../const";

// export const updateTodo = async (data) => {
//   const response = await axios.put(`${BASE_URL}/todo${data.id}`, data);
//   return response;
// };
export const updateTodo = (updatedData) => {
  axios
    .put(`${BASE_URL}/todo/${updatedData.id}`, updatedData)
    .then((response) => {
      console.log("Todo updated successfully:", response.data);
      // Optionally, you can perform any additional actions after updating the todo
    })
    .catch((error) => {
      console.error("Error updating todo:", error);
      // Optionally, handle errors here
    });
};
