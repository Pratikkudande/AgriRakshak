function ResultCard({ result }) {
  return (
    <section className="card-base">
      <h3 className="font-display text-xl font-bold text-leaf-700">Prediction Result</h3>
      <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
        <div>
          <p className="text-soil-600">Disease Name</p>
          <p className="font-semibold">{result.disease}</p>
        </div>
        <div>
          <p className="text-soil-600">Confidence</p>
          <p className="font-semibold">{result.confidence}%</p>
        </div>
      </div>
      <div className="mt-4 space-y-3">
        <div>
          <p className="font-semibold text-soil-800">Symptoms</p>
          <p className="text-sm text-soil-700">{result.symptoms}</p>
        </div>
        <div>
          <p className="font-semibold text-soil-800">Treatment Recommendation</p>
          <p className="text-sm text-soil-700">{result.treatment}</p>
        </div>
        <div>
          <p className="font-semibold text-soil-800">Prevention Tips</p>
          <p className="text-sm text-soil-700">{result.prevention}</p>
        </div>
      </div>
    </section>
  );
}

export default ResultCard;
