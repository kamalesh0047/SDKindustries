import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const projects = [
  { id: 1, title: "Aerospace FPI Booth", category: "NDT Systems", img: "https://images.unsplash.com/photo-1629330595593-ab7146bc82c1?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Automotive Conveyor Line", category: "Automation", img: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Chemical Processing Setup", category: "Processing Lines", img: "https://images.unsplash.com/photo-1716643863806-989dd76ae093?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Robotic Welding Station", category: "Automation", img: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Industrial Control Panel", category: "Electrical", img: "https://images.unsplash.com/photo-1498262257252-c282316270bc?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Surface Treatment Bath", category: "Processing Lines", img: "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?auto=format&fit=crop&q=80&w=800" },
];

const categories = ["All", "Automation", "Processing Lines", "NDT Systems", "Electrical"];

export function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pt-10 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Featured Projects</h1>
          <p className="text-lg text-slate-600">
            A showcase of our world-class industrial installations, automation setups, and turnkey engineering solutions.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="1.5rem">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl bg-white"
                onClick={() => setSelectedImg(project.img)}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <span className="text-blue-400 font-medium text-sm mb-1">{project.category}</span>
                  <h3 className="text-white font-bold text-xl">{project.title}</h3>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImg}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
