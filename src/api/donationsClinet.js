import { showToast } from "@/components/common/Toast";
import client from "./client";
import PATCHS from "./path";

/**
 * @param {{
 *   priorityIdolIds?: number[],
 *   cursor?: number,
 *   pageSize?: number,
 * }} params
 */
export const getDonationList = async (params) => {
  try {
    const response = await client.get(PATCHS.donations, {
      params,
    });
    return response.data;
  } catch (e) {
    showToast("에러 발생", e.toString());
    throw e;
  }
};

/**
 * @param { number } id // 후원 id
 * @param {{ amount: number }} body // 후원 데이터
 */
export const contributeDonation = async (id, body) => {
  const response = await client.put(`${PATCHS.donations}/${id}/contribute`, body);
  return response.data;
};
