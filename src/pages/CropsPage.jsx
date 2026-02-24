import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { cropInfo } from "../assets/mockData";

const fields = [
  ["Best season", "bestSeason"],
  ["Soil type", "soilType"],
  ["Irrigation info", "irrigation"],
  ["Fertilizer schedule", "fertilizer"],
  ["Common diseases", "diseases"],
  ["Cultivation tips", "tips"],
];

function CropsPage() {
  const [crop, setCrop] = useState("grapes");
  const data = cropInfo[crop];

  return (
    <section className="container-wide py-10 md:py-14">
      <SectionTitle
        title="Crop Information"
        subtitle="Select a crop to view practical cultivation guidance."
      />

      <div className="mb-8 max-w-sm">
        <label htmlFor="crop-select" className="mb-2 block text-sm font-semibold text-soil-700">
          Choose Crop
        </label>
        <select
          id="crop-select"
          className="w-full rounded-xl border border-leaf-200 bg-white px-4 py-3 focus:border-leaf-500 focus:outline-none"
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
        >
          <option value="grapes">Grapes</option>
        </select>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {fields.map(([label, key]) => (
          <article key={key} className="card-base">
            <h3 className="font-display text-lg font-semibold text-leaf-700">{label}</h3>
            <p className="mt-2 text-soil-700">{data[key]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CropsPage;
