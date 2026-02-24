import SectionTitle from "../components/SectionTitle";

const technologies = ["CNN", "MobileNetV2", "Deep Learning", "MERN Stack"];

function AboutPage() {
  return (
    <section className="container-wide py-10 md:py-14">
      <SectionTitle
        title="About AgriRakshak"
        subtitle="An AI-enabled initiative to support grape farmers with disease detection and smart advisory tools."
      />

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <article className="card-base">
          <h3 className="font-display text-xl font-semibold text-soil-900">Project Description</h3>
          <p className="mt-3 text-soil-700">
            AgriRakshak is a professional decision-support platform focused on grape crop health. It uses image-based
            AI inference and advisory modules to help farmers detect disease quickly and act early.
          </p>
          <h4 className="mt-5 font-display text-lg font-semibold text-soil-900">Mission</h4>
          <p className="mt-2 text-soil-700">
            Reduce crop loss using AI by delivering accurate disease detection and practical cultivation knowledge in a
            simple interface.
          </p>
        </article>

        <article className="card-base">
          <h3 className="font-display text-xl font-semibold text-soil-900">Technology Used</h3>
          <div className="mt-4 grid gap-3">
            {technologies.map((tech) => (
              <span key={tech} className="rounded-xl bg-leaf-50 px-3 py-2 text-sm font-semibold text-leaf-800">
                {tech}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default AboutPage;
