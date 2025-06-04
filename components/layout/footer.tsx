import { Zap, Mail, Phone } from "lucide-react";

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Case Studies", href: "#case-studies" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Help Center", href: "#help" },
      { label: "Community", href: "#community" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-orange-500 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-orange-500" />
              </div>
              <span className="text-xl font-bold">Skyless</span>
            </div>
            <p className="text-orange-100 mb-4">
              Helping small businesses grow through effective social media
              marketing.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-orange-100">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-orange-100">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@skyless.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-400 mt-12 pt-8 text-center text-orange-100">
          <p>&copy; 2025 Skyless. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
