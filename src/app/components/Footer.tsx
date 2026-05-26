import { Link } from "react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F1315f976bc474ae5a1c0f81df25b25e5%2F89d67864eabb460b949aa9851fad73eb?format=webp&width=800&height=1200"
                alt="SDK Automations"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-slate-400">
              Engineering Smart Solutions for Industrial Excellence. Specialized in automation systems, chemical processing, and turnkey engineering.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/industries" className="hover:text-blue-400 transition-colors">Industries</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link to="/capabilities" className="hover:text-blue-400 transition-colors">Engineering</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>PLC Automation</li>
              <li>Control Panel Integration</li>
              <li>Conveyor Systems</li>
              <li>Chemical Processing Lines</li>
              <li>NDT FPI Booths</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-slate-400">Industrial Estate, Plot 42,<br/>Bangalore, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-slate-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-slate-400">info@sdkautomations.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} SDK Automations. All rights reserved.
          </p>
          <div className="text-sm text-slate-500 mt-2 md:mt-0">
            Consulting support from Elroiz Neway Solutions
          </div>
        </div>
      </div>
    </footer>
  );
}
