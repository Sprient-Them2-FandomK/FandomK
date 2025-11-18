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
  const response = await client.get(`${PATCHS.charts}/${params.gender}`, {
    params,
  });
  return response.data;
};
