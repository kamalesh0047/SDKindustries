import { motion } from "motion/react";
import { Plane, Car, Wrench, Shield, Zap, Search, Factory } from "lucide-react";

const industries = [
  {
    title: "Aerospace",
    icon: Plane,
    desc: "Precision engineering, NDT booths, and specialized surface treatment setups meeting stringent aerospace standards.",
    image: "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Automobile",
    icon: Car,
    desc: "Conveyor systems, painting booths, and assembly line automation for high-volume automotive production.",
    image: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Precision Engineering",
    icon: Wrench,
    desc: "Automated control panels and specialized machining process setups for exact tolerances.",
    image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Metal Finishing",
    icon: Shield,
    desc: "Complete chemical processing lines, electroplating setups, and bath process integrations.",
    image: "https://images.unsplash.com/photo-1716643863806-989dd76ae093?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Non-Destructive Testing",
    icon: Search,
    desc: "FPI booths, dark rooms, and specialized inspection facilities for advanced material testing.",
    image: "https://images.unsplash.com/photo-1629330595593-ab7146bc82c1?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "General Manufacturing",
    icon: Factory,
    desc: "Turnkey automation, material handling, and production optimization for diverse manufacturing needs.",
    image: "https://images.unsplash.com/photo-1498262257252-c282316270bc?auto=format&fit=crop&q=80&w=800",
  },
];

export function IndustriesPage() {
  return (
    <div className="pt-10 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Industries We Serve</h1>
          <p className="text-lg text-slate-600">
            Empowering global sectors with specialized engineering, automation, and processing solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 bg-white"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <ind.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{ind.title}</h3>
                <p className="text-slate-600 leading-relaxed">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
