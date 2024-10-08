import axios from "axios";
const base_url = "http://localhost:8080/users/";

const registerUser = async (user: any) => {
  return axios
    .post(`${base_url}register`, user)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const loginUser = async (user: any) => {
  return axios
    .post(`${base_url}login`, user)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export { registerUser, loginUser };
