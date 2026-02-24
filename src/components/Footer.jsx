import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Leaf } from "lucide-react";

const quickLinks = [
  { label: "Predict", to: "/predict" },
  { label: "Crops", to: "/crops" },
  { label: "Videos", to: "/videos" },
  { label: "Chat", to: "/chat" },
];

function Footer() {
  return (
    <footer className="border-t border-leaf-100 bg-white">
      <div className="container-wide grid gap-8 py-10 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2 text-leaf-700">
            <Leaf className="h-6 w-6" />
            <span className="font-display text-lg font-bold">AgriRakshak</span>
          </div>
          <p className="text-sm text-soil-700">
            AI-powered grape disease detection and smart cultivation advisory to reduce crop loss.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-display text-lg font-semibold">Quick Links</h3>
          <div className="grid gap-2 text-sm">
            {quickLinks.map((item) => (
              <Link key={item.to} to={item.to} className="text-soil-700 hover:text-leaf-700">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-display text-lg font-semibold">Connect</h3>
          <div className="flex items-center gap-3 text-soil-700">
            <a href="#" aria-label="Facebook" className="rounded-lg p-2 hover:bg-leaf-50">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-lg p-2 hover:bg-leaf-50">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-lg p-2 hover:bg-leaf-50">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
