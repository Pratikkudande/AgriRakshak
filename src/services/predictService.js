import api from "./api";

export async function predictDisease(file) {
  const formData = new FormData();
  formData.append("image", file);

  const response = await api.post("/api/predict", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
}
