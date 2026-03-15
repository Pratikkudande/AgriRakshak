import api from "./api";

export async function predictDisease(file) {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await api.post("/api/predict", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  } catch (error) {
    const message =
      error?.response?.data?.error ||
      "Prediction service is unavailable. Start the ML service and try again.";
    throw new Error(message);
  }
}
