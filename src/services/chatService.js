import api from "./api";

export async function getChatReply(message) {
  const response = await api.post("/api/chat", { message });
  return response.data;
}
