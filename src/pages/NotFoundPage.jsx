import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="container-wide py-20 text-center">
      <h1 className="font-display text-4xl font-bold text-soil-900">Page Not Found</h1>
      <p className="mt-3 text-soil-700">The page you are looking for does not exist.</p>
      <Link to="/" className="btn-primary mt-6">
        Back to Home
      </Link>
    </section>
  );
}

export default NotFoundPage;
