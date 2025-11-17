import { showToast } from "@/components/common/Toast";
import client from "./client";
import PATCHS from "./path";

/**
 * @param {{
 *   gender: "male" | "female",
 *   cursor?: number,
 *   pageSize?: number,
 * }} params
 */
export const getChartList = async (params) => {
  try {
    const response = await client.get(`${PATCHS.charts}/${params.gender}`, {
      params,
    });
    return response.data;
  } catch (e) {
    showToast("에러 발생", e.toString());
    throw e;
  }
};
