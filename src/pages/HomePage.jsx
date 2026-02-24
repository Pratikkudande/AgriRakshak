import { Link } from "react-router-dom";
import { Activity, MessageSquareText, Sprout, Video } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";

const features = [
  {
    icon: Activity,
    title: "Grape Disease Prediction",
    description: "Upload leaf images and get AI-based disease diagnosis with confidence.",
  },
  {
    icon: Sprout,
    title: "Crop Information",
    description: "Access practical cultivation guidance for season, soil, irrigation, and nutrition.",
  },
  {
    icon: MessageSquareText,
    title: "AI Farming Assistant",
    description: "Ask farming questions and get simple, quick recommendations.",
  },
  {
    icon: Video,
    title: "Video Learning",
    description: "Watch curated grape cultivation and disease management videos.",
  },
];

function HomePage() {
  return (
    <>
      <section className="bg-hero py-16 md:py-24">
        <div className="container-wide grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 inline-block rounded-full bg-leaf-100 px-4 py-1 text-sm font-semibold text-leaf-800">
              Smart Grape Protection Platform
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-soil-900 md:text-5xl">
              AI-Powered Smart Protection for Your Grapes
            </h1>
            <p className="mt-4 max-w-xl text-lg text-soil-700">
              Detect diseases early, improve cultivation decisions, and reduce crop losses using practical AI tools.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/predict" className="btn-primary">
                Detect Disease
              </Link>
              <Link to="/crops" className="btn-secondary">
                Learn Cultivation
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-leaf-100 bg-white/80 p-6 shadow-soft">
            <h3 className="font-display text-xl font-semibold text-soil-900">Benefits for Farmers</h3>
            <ul className="mt-4 space-y-3 text-soil-700">
              <li>Early disease warning for timely action</li>
              <li>Clear treatment and prevention recommendations</li>
              <li>Simple, mobile-friendly guidance in one place</li>
              <li>Improved decision-making with AI support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          <SectionTitle
            title="Core Modules"
            subtitle="AgriRakshak combines disease diagnostics, advisory support, and learning resources for grape farmers."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-wide">
          <div className="card-base bg-leaf-50">
            <SectionTitle
              title="About AgriRakshak"
              subtitle="AgriRakshak is designed to deliver industry-standard AI support for grape disease detection and precision cultivation planning."
            />
            <p className="text-soil-700">
              Our mission is to help reduce grape crop loss with practical, trustworthy, and easy-to-use digital tools for everyday farm decisions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
