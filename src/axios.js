import axios from "axios";
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});
axios.defaults.headers.common["Authorization"] = "AUTO TOKEN  FROM INSTANCE";
export default instance;
