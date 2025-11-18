import { showToast } from "@/components/common/Toast";
import axios from "axios";

const client = axios.create({
  timeout: 3000,
  baseURL: "https://fandom-k-api.vercel.app/20-2",
});

client.interceptors.response.use(
  (res) => res,
  (error) => {
    showToast("요청을 처리하는 중 문제가 발생했어요. 잠시 후 다시 시도해 주세요.");
    return Promise.reject(error);
  }
);

export default client;
