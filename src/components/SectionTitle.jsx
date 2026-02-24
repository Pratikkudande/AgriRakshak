function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="font-display text-2xl font-bold text-soil-900 md:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-3xl text-soil-700">{subtitle}</p> : null}
    </div>
  );
}

export default SectionTitle;
