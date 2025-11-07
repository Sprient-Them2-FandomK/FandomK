import axios from "axios";

const client = axios.create({
  timeout: 3000,
  baseURL: "https://fandom-k-api.vercel.app/20-2",
});

export default client;
