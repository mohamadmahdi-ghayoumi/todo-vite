import axios from "axios";
import { BASE_URL } from "../const";

// export const getTableRow = async (findItem = '', page = 1 , filters = {}) => {
//   const params = new URLSearchParams(filters).toString();

//   const response = await axios.get(
//     `${BASE_URL}/todo?title_like=${findItem}&_page=${page}&_limit=5${params}`
//   );

export const getTableRow = async (findItem = "", page = 1, filters = {}) => {
  // {key:value,key1:value1}
  // [[key,value],[key1,value1]]

  // const filteredParams = Object.fromEntries(
  //   Object.entries(filters).filter((item) => item[1] !== '')
  // );
  const params = new URLSearchParams(filters).toString();

  const response = await axios.get(
    `${BASE_URL}/todo?title_like=${findItem}&_page=${page}&_limit=5&${params}`
  );
  return {
    data: response.data,
    totalPage: Math.ceil(response.headers["x-total-count"] / 5),
  };
};

export const patchTableRow = async (edit = {}) => {
  const params = new URLSearchParams(edit).toString();

  const response = await axios.patch(`${BASE_URL}/todo?${params}`);
  return response.data;
};
