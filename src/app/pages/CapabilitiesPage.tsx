import { motion } from "motion/react";
import { PenTool, Workflow, Grid, TrendingUp, Layers, GitMerge, ShieldCheck, Box } from "lucide-react";

const capabilities = [
  { icon: Grid, title: "GA Layout Development", desc: "Precise General Arrangement layouts for optimal factory space utilization." },
  { icon: Workflow, title: "Process Flow Planning", desc: "Detailed step-by-step mapping of industrial manufacturing processes." },
  { icon: Layers, title: "Utility Layout Coordination", desc: "Integration of electrical, plumbing, HVAC, and pneumatic systems." },
  { icon: TrendingUp, title: "Production Optimization", desc: "Identifying bottlenecks and streamlining operations for maximum throughput." },
  { icon: GitMerge, title: "Equipment Integration", desc: "Seamless mechanical and electrical integration of complex machinery." },
  { icon: Box, title: "Workflow Planning", desc: "Ergonomic and efficient workflow designs for operator safety and speed." },
  { icon: ShieldCheck, title: "Safety Systems", desc: "Implementation of industrial safety protocols and fail-safe mechanisms." },
  { icon: PenTool, title: "Execution Support", desc: "On-site engineering supervision and project management." },
];

export function CapabilitiesPage() {
  return (
    <div className="pt-10 pb-24 bg-slate-900 min-h-screen text-slate-200">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498262257252-c282316270bc?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-5 bg-fixed"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20 pt-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Engineering <span className="text-blue-500">Capabilities</span></h1>
          <p className="text-lg text-slate-400">
            Advanced technical planning, blueprint execution, and turnkey engineering integration for robust industrial infrastructures.
          </p>
        </motion.div>

        {/* Blueprint Visual Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-24 p-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl"
        >
          <div className="bg-slate-900 rounded-[22px] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Technical Workflow Integration</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  From the initial schematic drawing to the final production startup, our engineering process ensures every utility, safety protocol, and machine integration is mapped perfectly onto your facility's footprint.
                </p>
                <div className="space-y-4">
                  {['Conceptualization', 'Blueprint Drafting', 'Utility Mapping', 'Deployment & Testing'].map((step, idx) => (
                    <div key={idx} className="flex items-center space-x-4">
                      <div className="w-8 h-8 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
                        {idx + 1}
                      </div>
                      <span className="text-slate-300 font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-64 md:h-auto md:aspect-square border border-blue-500/30 rounded-xl bg-slate-800/50 backdrop-blur-sm overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?auto=format&fit=crop&q=80&w=800" alt="Engineering Diagram" className="w-full h-full object-cover mix-blend-luminosity opacity-50 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
                {/* Floating UI Elements */}
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-1/4 left-1/4 bg-slate-900/80 backdrop-blur-md p-3 rounded border border-blue-500/30 text-xs text-blue-300 font-mono">
                  [X: 124.5, Y: 89.2] SYS_OK
                </motion.div>
                <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 5, delay: 1 }} className="absolute bottom-1/3 right-1/4 bg-slate-900/80 backdrop-blur-md p-3 rounded border border-cyan-500/30 text-xs text-cyan-300 font-mono">
                  AUTO_CALIBRATE: ACTIVE
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 hover:border-blue-500/50 transition-all group"
            >
              <cap.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:text-blue-300 group-hover:scale-110 transition-all" />
              <h4 className="text-lg font-bold text-white mb-2">{cap.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
