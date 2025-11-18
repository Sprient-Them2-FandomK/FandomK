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
  const response = await client.get(PATCHS.idols, { params });
  return response.data;
};
