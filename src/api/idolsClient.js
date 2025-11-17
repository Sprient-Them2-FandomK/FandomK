import { showToast } from "@/components/common/Toast";
import client from "./client";
import PATCHS from "./path";

/**
 * @param {{
 *   keyword?: string,
 *   cursor?: number,
 *   pageSize?: number,
 * }} params
 */
export const getIdolList = async (params) => {
  try {
    const response = await client.get(PATCHS.idols, { params });
    return response.data;
  } catch (e) {
    showToast("에러 발생", e.toString());
    throw e;
  }
};
