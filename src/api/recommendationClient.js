import axios from "axios";

// AI 추천 API 클라이언트
const recommendationClient = axios.create({
  baseURL: import.meta.env.VITE_AI_API_URL || "https://dayeoni-ai-recommendation.hf.space",
  timeout: 30000, // AI 모델 처리 시간 고려해서 30초로 증가
});

/**
 * 선택한 아이돌과 유사한 아이돌 추천
 * @param {number[]} selectedIdolIds - 선택한 아이돌 ID 배열
 * @param {number} limit - 추천받을 아이돌 수
 * @returns {Promise<{recommended_ids: number[], scores: number[]}>}
 */
export const getRecommendations = async (selectedIdolIds, limit = 10) => {
  const response = await recommendationClient.post("/api/recommend", {
    selected_idol_ids: selectedIdolIds,
    limit: limit,
  });
  return response.data;
};

export default recommendationClient;
