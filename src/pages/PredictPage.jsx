import { useEffect, useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import UploadDropzone from "../components/UploadDropzone";
import LoadingSpinner from "../components/LoadingSpinner";
import ResultCard from "../components/ResultCard";
import { predictDisease } from "../services/predictService";

function PredictPage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const previewUrl = useMemo(() => (file ? URL.createObjectURL(file) : null), [file]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handlePredict = async () => {
    if (!file) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = await predictDisease(file);
      setResult(data);
    } catch (predictionError) {
      setError(predictionError.message || "Prediction failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setFile(null);
    setResult(null);
    setError("");
  };

  return (
    <section className="container-wide py-10 md:py-14">
      <SectionTitle
        title="Grape Disease Prediction"
        subtitle="Upload a grape leaf image to detect disease and receive treatment guidance."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-5">
          <UploadDropzone onFileSelect={setFile} />
          {file ? (
            <div className="card-base">
              <p className="mb-3 font-semibold text-soil-800">Preview</p>
              <img
                src={previewUrl}
                alt="Uploaded grape leaf"
                className="h-64 w-full rounded-xl object-cover"
              />
            </div>
          ) : null}

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handlePredict}
              disabled={!file || loading}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
            >
              Predict Disease
            </button>
            <button type="button" onClick={reset} className="btn-secondary">
              Upload Another Image
            </button>
          </div>

          {loading ? <LoadingSpinner label="Analyzing leaf image..." /> : null}
          {error ? <p className="text-sm font-semibold text-amber-700">{error}</p> : null}
        </div>

        <div>{result ? <ResultCard result={result} /> : <div className="card-base">Prediction result will appear here after image analysis.</div>}</div>
      </div>
    </section>
  );
}

export default PredictPage;
