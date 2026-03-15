from __future__ import annotations

from pathlib import Path

import numpy as np
from flask import Flask, jsonify, request
from flask_cors import CORS
from PIL import Image
from tensorflow import keras


BASE_DIR = Path(__file__).resolve().parent.parent
MODEL_PATH = BASE_DIR / "mobilenetv2_grape_disease_model.h5"
IMAGE_SIZE = (224, 224)
CLASS_NAMES = ["Black_rot", "Esca", "Leaf_blight", "Healthy"]

DISEASE_DETAILS = {
    "Black_rot": {
        "disease": "Black Rot",
        "symptoms": "Brown circular lesions and dark spots may appear on leaves and berries.",
        "treatment": "Remove infected plant parts and apply a recommended protective fungicide such as mancozeb or myclobutanil based on local guidance.",
        "prevention": "Prune for airflow, keep the canopy dry when possible, and remove infected debris from the field.",
    },
    "Esca": {
        "disease": "Esca",
        "symptoms": "Leaves may show tiger-stripe patterns with yellow-brown discoloration and vine weakness.",
        "treatment": "Prune affected wood, sanitize cutting tools, and remove severely affected vines if infection is advanced.",
        "prevention": "Use healthy planting material and avoid unnecessary trunk wounds during vineyard management.",
    },
    "Leaf_blight": {
        "disease": "Leaf Blight",
        "symptoms": "Irregular necrotic or burnt-looking patches spread across the leaf surface.",
        "treatment": "Remove badly affected leaves and use a copper-based or locally recommended fungicide when needed.",
        "prevention": "Improve spacing, reduce water splash, and monitor vines regularly during humid weather.",
    },
    "Healthy": {
        "disease": "Healthy",
        "symptoms": "Leaves are green and uniform with no major visible lesions.",
        "treatment": "No disease treatment is needed. Continue regular crop monitoring and balanced nutrition.",
        "prevention": "Maintain good irrigation practices, canopy ventilation, and periodic scouting for early symptoms.",
    },
}


def load_model():
    if not MODEL_PATH.exists():
        raise FileNotFoundError(f"Model file not found at {MODEL_PATH}")
    return keras.models.load_model(MODEL_PATH)


model = load_model()
app = Flask(__name__)
CORS(app)


def preprocess_image(file_storage) -> np.ndarray:
    image = Image.open(file_storage.stream).convert("RGB")
    image = image.resize(IMAGE_SIZE)
    image_array = np.asarray(image, dtype=np.float32) / 255.0
    return np.expand_dims(image_array, axis=0)


@app.get("/api/health")
def health_check():
    return jsonify({"status": "ok", "model": MODEL_PATH.name})


@app.post("/api/predict")
def predict():
    image = request.files.get("image")
    if image is None or not image.filename:
        return jsonify({"error": "Please upload a grape leaf image."}), 400

    try:
        processed_image = preprocess_image(image)
        predictions = model.predict(processed_image, verbose=0)[0]
    except Exception as exc:  # noqa: BLE001
        return jsonify({"error": f"Could not process the image: {exc}"}), 400

    top_index = int(np.argmax(predictions))
    class_name = CLASS_NAMES[top_index]
    disease_info = DISEASE_DETAILS[class_name]
    confidence = round(float(predictions[top_index]) * 100, 2)
    class_confidences = [
        {
            "label": DISEASE_DETAILS[label]["disease"],
            "value": round(float(score) * 100, 2),
        }
        for label, score in zip(CLASS_NAMES, predictions)
    ]

    return jsonify(
        {
            **disease_info,
            "confidence": confidence,
            "rawClassName": class_name,
            "classConfidences": sorted(
                class_confidences, key=lambda item: item["value"], reverse=True
            ),
        }
    )


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
